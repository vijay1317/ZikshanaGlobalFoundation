package org.zikshana.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.zikshana.dto.ProgramDto;
import org.zikshana.entity.Program;
import org.zikshana.service.ProgramService;

import java.util.List;

@RestController
@RequestMapping("/programs")
@Tag(name = "Programs", description = "Program management APIs")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProgramController {
    
    @Autowired
    private ProgramService programService;
    
    @GetMapping
    @Operation(summary = "Get all programs with filters")
    public ResponseEntity<Page<ProgramDto>> getPrograms(
            @RequestParam(required = false) Program.ProgramCategory category,
            @RequestParam(required = false) Program.ProgramStatus status,
            @RequestParam(required = false, defaultValue = "") String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir) {
        
        Page<ProgramDto> programs = programService.getPrograms(category, status, search, page, size, sortBy, sortDir);
        return ResponseEntity.ok(programs);
    }
    
    @GetMapping("/active")
    @Operation(summary = "Get all active programs")
    public ResponseEntity<List<ProgramDto>> getActivePrograms() {
        List<ProgramDto> programs = programService.getAllActivePrograms();
        return ResponseEntity.ok(programs);
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get program by ID")
    public ResponseEntity<ProgramDto> getProgramById(@PathVariable Long id) {
        ProgramDto program = programService.getProgramById(id);
        return ResponseEntity.ok(program);
    }
    
    @GetMapping("/category/{category}")
    @Operation(summary = "Get programs by category")
    public ResponseEntity<List<ProgramDto>> getProgramsByCategory(@PathVariable Program.ProgramCategory category) {
        List<ProgramDto> programs = programService.getProgramsByCategory(category);
        return ResponseEntity.ok(programs);
    }
    
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Create new program")
    public ResponseEntity<ProgramDto> createProgram(@Valid @RequestBody ProgramDto programDto) {
        ProgramDto createdProgram = programService.createProgram(programDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProgram);
    }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Update program")
    public ResponseEntity<ProgramDto> updateProgram(@PathVariable Long id, @Valid @RequestBody ProgramDto programDto) {
        ProgramDto updatedProgram = programService.updateProgram(id, programDto);
        return ResponseEntity.ok(updatedProgram);
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Delete program")
    public ResponseEntity<?> deleteProgram(@PathVariable Long id) {
        programService.deleteProgram(id);
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/stats/beneficiaries")
    @Operation(summary = "Get total beneficiaries count")
    public ResponseEntity<Long> getTotalBeneficiaries() {
        Long count = programService.getTotalBeneficiaries();
        return ResponseEntity.ok(count);
    }
    
    @GetMapping("/stats/locations")
    @Operation(summary = "Get total locations count")
    public ResponseEntity<Long> getTotalLocations() {
        Long count = programService.getTotalLocations();
        return ResponseEntity.ok(count);
    }
}