package org.zikshana.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.modelmapper.ModelMapper;
import org.zikshana.dto.ProgramDto;
import org.zikshana.entity.Program;
import org.zikshana.repository.ProgramRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProgramService {
    
    @Autowired
    private ProgramRepository programRepository;
    
    @Autowired
    private ModelMapper modelMapper;
    
    public List<ProgramDto> getAllActivePrograms() {
        List<Program> programs = programRepository.findByStatusOrderByCreatedAtDesc(Program.ProgramStatus.ACTIVE);
        return programs.stream()
                .map(program -> modelMapper.map(program, ProgramDto.class))
                .collect(Collectors.toList());
    }
    
    public Page<ProgramDto> getPrograms(
            Program.ProgramCategory category,
            Program.ProgramStatus status,
            String search,
            int page,
            int size,
            String sortBy,
            String sortDir) {
        
        Sort sort = sortDir.equalsIgnoreCase("desc") 
                ? Sort.by(sortBy).descending() 
                : Sort.by(sortBy).ascending();
        
        Pageable pageable = PageRequest.of(page, size, sort);
        
        Page<Program> programPage = programRepository.findProgramsWithFilters(category, status, search, pageable);
        
        return programPage.map(program -> modelMapper.map(program, ProgramDto.class));
    }
    
    public ProgramDto getProgramById(Long id) {
        Program program = programRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Program not found with id: " + id));
        return modelMapper.map(program, ProgramDto.class);
    }
    
    public ProgramDto createProgram(ProgramDto programDto) {
        Program program = modelMapper.map(programDto, Program.class);
        program.setStatus(Program.ProgramStatus.ACTIVE);
        Program savedProgram = programRepository.save(program);
        return modelMapper.map(savedProgram, ProgramDto.class);
    }
    
    public ProgramDto updateProgram(Long id, ProgramDto programDto) {
        Program program = programRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Program not found with id: " + id));
        
        program.setTitle(programDto.getTitle());
        program.setDescription(programDto.getDescription());
        program.setFullDescription(programDto.getFullDescription());
        program.setImageUrl(programDto.getImageUrl());
        program.setCategory(programDto.getCategory());
        program.setBeneficiariesCount(programDto.getBeneficiariesCount());
        program.setLocationsCount(programDto.getLocationsCount());
        program.setBudget(programDto.getBudget());
        program.setTargetAmount(programDto.getTargetAmount());
        
        if (programDto.getStatus() != null) {
            program.setStatus(programDto.getStatus());
        }
        
        Program updatedProgram = programRepository.save(program);
        return modelMapper.map(updatedProgram, ProgramDto.class);
    }
    
    public void deleteProgram(Long id) {
        Program program = programRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Program not found with id: " + id));
        program.setStatus(Program.ProgramStatus.INACTIVE);
        programRepository.save(program);
    }
    
    public List<ProgramDto> getProgramsByCategory(Program.ProgramCategory category) {
        List<Program> programs = programRepository.findByCategoryAndStatusOrderByCreatedAtDesc(
                category, Program.ProgramStatus.ACTIVE);
        return programs.stream()
                .map(program -> modelMapper.map(program, ProgramDto.class))
                .collect(Collectors.toList());
    }
    
    public Long getTotalBeneficiaries() {
        return programRepository.getTotalBeneficiariesByStatus(Program.ProgramStatus.ACTIVE);
    }
    
    public Long getTotalLocations() {
        return programRepository.getTotalLocationsByStatus(Program.ProgramStatus.ACTIVE);
    }
}