package com.exam.service.forgetPassword;

public interface ForgetPasswordService {
//    public void saveOTPTimestamp(Long otp, Timestamp timestamp);
    public String generateAndSendOTP(String email);
    public boolean validateOTP(String email, String otp);
}
