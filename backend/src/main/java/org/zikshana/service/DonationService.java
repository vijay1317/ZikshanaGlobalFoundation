package org.zikshana.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.zikshana.dto.DonationDto;
import org.zikshana.entity.Donation;
import org.zikshana.entity.Program;
import org.zikshana.repository.DonationRepository;
import org.zikshana.repository.ProgramRepository;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class DonationService {

    @Autowired
    private DonationRepository donationRepository;

    @Autowired
    private ProgramRepository programRepository;

    @Autowired
    private EmailService emailService;

    public DonationDto createDonation(DonationDto donationDto) {
        // Convert DTO to Entity
        Donation donation = new Donation();
        donation.setDonorName(donationDto.getFullName());
        donation.setDonorEmail(donationDto.getEmail());
        donation.setDonorMobile(donationDto.getMobile());
        donation.setDonorAddress(donationDto.getAddress());
        donation.setDonorPincode(donationDto.getPincode());
        donation.setDonorPan(donationDto.getPan());
        donation.setAmount(donationDto.getAmount());
        donation.setTipAmount(donationDto.getTip() != null ? donationDto.getTip() : BigDecimal.ZERO);
        donation.setIsAnonymous(donationDto.getIsAnonymous());
        donation.setWhatsappUpdates(donationDto.getWhatsappUpdates());
        donation.setIsIndianCitizen(donationDto.getIsCitizen());
        donation.setGiftCardCode(donationDto.getGiftCardCode());
        donation.setPaymentStatus(Donation.PaymentStatus.PENDING);

        // Generate transaction ID
        donation.setTransactionId("TXN" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());

        // Associate with program if programId is provided
        if (donationDto.getProgramId() != null) {
            Program program = programRepository.findById(donationDto.getProgramId())
                    .orElseThrow(() -> new RuntimeException("Program not found"));
            donation.setProgram(program);
        }

        // Save donation
        Donation savedDonation = donationRepository.save(donation);

        // Convert back to DTO
        return convertToDto(savedDonation);
    }

    public DonationDto getDonationById(Long id) {
        Donation donation = donationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Donation not found"));
        return convertToDto(donation);
    }

    public DonationDto getDonationByTransactionId(String transactionId) {
        Donation donation = donationRepository.findByTransactionId(transactionId)
                .orElseThrow(() -> new RuntimeException("Donation not found"));
        return convertToDto(donation);
    }

    public List<DonationDto> getAllDonations() {
        return donationRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public List<DonationDto> getDonationsByEmail(String email) {
        return donationRepository.findByDonorEmail(email).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public List<DonationDto> getDonationsByProgramId(Long programId) {
        return donationRepository.findByProgram_Id(programId).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public DonationDto updatePaymentStatus(String transactionId, String status, String razorpayPaymentId, String razorpaySignature) {
        Donation donation = donationRepository.findByTransactionId(transactionId)
                .orElseThrow(() -> new RuntimeException("Donation not found"));

        donation.setPaymentStatus(Donation.PaymentStatus.valueOf(status.toUpperCase()));
        donation.setRazorpayPaymentId(razorpayPaymentId);
        donation.setRazorpaySignature(razorpaySignature);

        // If payment is successful, update program raised amount
        if ("SUCCESS".equals(status.toUpperCase()) && donation.getProgram() != null) {
            Program program = donation.getProgram();
            BigDecimal currentRaised = program.getRaisedAmount() != null ? program.getRaisedAmount() : BigDecimal.ZERO;
            program.setRaisedAmount(currentRaised.add(donation.getTotalAmount()));
            programRepository.save(program);
        }

        Donation updatedDonation = donationRepository.save(donation);

        // Send confirmation email after successful payment
        if ("SUCCESS".equals(status.toUpperCase())) {
            try {
                emailService.sendDonationSuccessEmail(updatedDonation);
            } catch (Exception e) {
                // Log the error but don't fail the payment update
                System.err.println("Failed to send donation confirmation email: " + e.getMessage());
            }
        }

        return convertToDto(updatedDonation);
    }

    public BigDecimal getTotalDonationsAmount() {
        BigDecimal total = donationRepository.getTotalDonationsAmount();
        return total != null ? total : BigDecimal.ZERO;
    }

    public Long getTotalDonationsCount() {
        Long count = donationRepository.getTotalDonationsCount();
        return count != null ? count : 0L;
    }

    public List<DonationDto> getRecentDonations() {
        return donationRepository.findRecentSuccessfulDonations().stream()
                .limit(10)
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private DonationDto convertToDto(Donation donation) {
        DonationDto dto = new DonationDto();
        dto.setId(donation.getId());
        dto.setFullName(donation.getIsAnonymous() ? "Anonymous" : donation.getDonorName());
        dto.setEmail(donation.getDonorEmail());
        dto.setMobile(donation.getDonorMobile());
        dto.setAddress(donation.getDonorAddress());
        dto.setPincode(donation.getDonorPincode());
        dto.setPan(donation.getDonorPan());
        dto.setAmount(donation.getAmount());
        dto.setTip(donation.getTipAmount());
        dto.setTotal(donation.getTotalAmount());
        dto.setIsAnonymous(donation.getIsAnonymous());
        dto.setWhatsappUpdates(donation.getWhatsappUpdates());
        dto.setIsCitizen(donation.getIsIndianCitizen());
        dto.setGiftCardCode(donation.getGiftCardCode());
        dto.setPaymentStatus(donation.getPaymentStatus().name());
        dto.setTransactionId(donation.getTransactionId());
        if (donation.getProgram() != null) {
            dto.setProgramId(donation.getProgram().getId());
        }
        return dto;
    }
}
