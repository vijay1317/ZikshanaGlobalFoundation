package org.zikshana.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.zikshana.dto.JwtResponse;
import org.zikshana.dto.LoginRequest;
import org.zikshana.entity.Role;
import org.zikshana.entity.User;
import org.zikshana.repository.RoleRepository;
import org.zikshana.repository.UserRepository;
import org.zikshana.security.JwtUtils;
import org.zikshana.security.UserDetailsImpl;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getEmail(),
                userDetails.getFirstName(),
                userDetails.getLastName(),
                roles));
    }

    @GetMapping("/validate")
    public ResponseEntity<?> validateToken() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            List<String> roles = userDetails.getAuthorities().stream()
                    .map(item -> item.getAuthority())
                    .collect(Collectors.toList());

            return ResponseEntity.ok(new JwtResponse(null,
                    userDetails.getId(),
                    userDetails.getEmail(),
                    userDetails.getFirstName(),
                    userDetails.getLastName(),
                    roles));
        }
        return ResponseEntity.status(401).body("Invalid token");
    }

    @PostMapping("/init-admin")
    public ResponseEntity<?> initializeAdmin() {
        try {
            // Check if admin already exists
            if (userRepository.existsByEmail("admin@zikshana.org")) {
                return ResponseEntity.badRequest().body(Map.of("message", "Admin user already exists"));
            }

            // Create ROLE_ADMIN if it doesn't exist
            Role adminRole = roleRepository.findByName(Role.ERole.ROLE_ADMIN)
                    .orElseGet(() -> {
                        Role newRole = new Role();
                        newRole.setName(Role.ERole.ROLE_ADMIN);
                        return roleRepository.save(newRole);
                    });

            // Create admin user
            User admin = new User();
            admin.setFirstName("Admin");
            admin.setLastName("User");
            admin.setEmail("admin@zikshana.org");
            admin.setPassword(passwordEncoder.encode("Admin@123"));
            admin.setPhone("9999999999");
            admin.setIsActive(true);

            Set<Role> roles = new HashSet<>();
            roles.add(adminRole);
            admin.setRoles(roles);

            userRepository.save(admin);

            Map<String, String> response = new HashMap<>();
            response.put("message", "Admin user created successfully");
            response.put("email", "admin@zikshana.org");
            response.put("password", "Admin@123");
            response.put("note", "Please change this password after first login");

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "Failed to create admin user: " + e.getMessage()));
        }
    }
}
