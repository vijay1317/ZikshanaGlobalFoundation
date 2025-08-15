package org.zikshana.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.modelmapper.ModelMapper;
import org.zikshana.dto.VolunteerDto;
import org.zikshana.entity.Volunteer;
import org.zikshana.repository.VolunteerRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class VolunteerService {
    
    @Autowired
    private VolunteerRepository volunteerRepository;
    
    @Autowired
    private ModelMapper modelMapper;
    
    @Autowired
    private EmailService emailService;
    
    public VolunteerDto registerVolunteer(VolunteerDto volunteerDto) {
        if (volunteerRepository.existsByEmail(volunteerDto.getEmail())) {
            throw new RuntimeException("Volunteer with this email already exists");
        }
        
        Volunteer volunteer = modelMapper.map(volunteerDto, Volunteer.class);
        volunteer.setStatus(Volunteer.VolunteerStatus.PENDING);
        
        Volunteer savedVolunteer = volunteerRepository.save(volunteer);
        
        // Send confirmation email
        emailService.sendVolunteerConfirmationEmail(savedVolunteer);
        
        return modelMapper.map(savedVolunteer, VolunteerDto.class);
    }
    
    public Page<VolunteerDto> getVolunteers(
            Volunteer.VolunteerStatus status,
            String search,
            int page,
            int size,
            String sortBy,
            String sortDir) {
        
        Sort sort = sortDir.equalsIgnoreCase("desc") 
                ? Sort.by(sortBy).descending() 
                : Sort.by(sortBy).ascending();
        
        Pageable pageable = PageRequest.of(page, size, sort);
        
        Page<Volunteer> volunteerPage = volunteerRepository.findVolunteersWithFilters(status, search, pageable);
        
        return volunteerPage.map(volunteer -> modelMapper.map(volunteer, VolunteerDto.class));
    }
    
    public VolunteerDto getVolunteerById(Long id) {
        Volunteer volunteer = volunteerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Volunteer not found with id: " + id));
        return modelMapper.map(volunteer, VolunteerDto.class);
    }
    
    public VolunteerDto updateVolunteerStatus(Long id, Volunteer.VolunteerStatus status) {
        Volunteer volunteer = volunteerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Volunteer not found with id: " + id));
        
        Volunteer.VolunteerStatus oldStatus = volunteer.getStatus();
        volunteer.setStatus(status);
        
        Volunteer updatedVolunteer = volunteerRepository.save(volunteer);
        
        // Send status update email
        if (status == Volunteer.VolunteerStatus.APPROVED && oldStatus != status) {
            emailService.sendVolunteerApprovalEmail(updatedVolunteer);
        }
        
        return modelMapper.map(updatedVolunteer, VolunteerDto.class);
    }
    
    public VolunteerDto updateVolunteer(Long id, VolunteerDto volunteerDto) {
        Volunteer volunteer = volunteerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Volunteer not found with id: " + id));
        
        volunteer.setFullName(volunteerDto.getFullName());
        volunteer.setPhone(volunteerDto.getPhone());
        volunteer.setSkills(volunteerDto.getSkills());
        volunteer.setAvailability(volunteerDto.getAvailability());
        volunteer.setInterests(volunteerDto.getInterests());
        volunteer.setNotes(volunteerDto.getNotes());
        
        Volunteer updatedVolunteer = volunteerRepository.save(volunteer);
        return modelMapper.map(updatedVolunteer, VolunteerDto.class);
    }
    
    public void deleteVolunteer(Long id) {
        if (!volunteerRepository.existsById(id)) {
            throw new RuntimeException("Volunteer not found with id: " + id);
        }
        volunteerRepository.deleteById(id);
    }
    
    public List<VolunteerDto> getActiveVolunteers() {
        List<Volunteer> volunteers = volunteerRepository.findByStatusOrderByCreatedAtDesc(
                Volunteer.VolunteerStatus.ACTIVE);
        return volunteers.stream()
                .map(volunteer -> modelMapper.map(volunteer, VolunteerDto.class))
                .collect(Collectors.toList());
    }
    
    public Long getTotalVolunteersByStatus(Volunteer.VolunteerStatus status) {
        return volunteerRepository.countByStatus(status);
    }
    
    public Long getVolunteersByInterest(Volunteer.VolunteerInterest interest) {
        return volunteerRepository.countByStatusAndInterest(Volunteer.VolunteerStatus.ACTIVE, interest);
    }
}