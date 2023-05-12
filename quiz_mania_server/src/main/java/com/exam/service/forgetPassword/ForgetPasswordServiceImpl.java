package com.exam.service.forgetPassword;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.concurrent.TimeUnit;


@Service
public class ForgetPasswordServiceImpl implements ForgetPasswordService{
    @Autowired
    private JavaMailSender emailSender;

    // create a cache with a TTL of 2 minutes
//    Cache<Long, Long> otpTimestampCache = Caffeine.newBuilder()
//            .expireAfterWrite(2, TimeUnit.MINUTES)
//            .build();
//    public void saveOTPTimestamp(Long otp, Timestamp timestamp) {
//        // save the timestamp to the cache
//        otpTimestampCache.put(otp, timestamp.getTime());
//    }
//    // generate an OTP and send it to the user's email
//    public String generateAndSendOTP(String email) {
//
//    // Generate a random 6-digit OTP
//        Random random = new Random();
//        int otpInt = 100000 + random.nextInt(900000); // generates a random number between 100000 and 999999
//        Long otp = Long.valueOf(otpInt); // converts the number to a string
//        String otp1= String.valueOf(otpInt);
//        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
//        saveOTPTimestamp(otp,timestamp);
//        sendOTPViaEmail(email, otp1); // send the OTP to the user's email
//        return otp1;
//    }
//
    private void sendOTPViaEmail(String email, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Password Reset OTP");
        message.setText("Your OTP for resetting your password is: " + otp);
System.out.println(message);
// Send the email
        emailSender.send(message);


    }
//
//    // validate the OTP entered by the user
//    public boolean validateOTP(String email, String otp) {
//        // get the timestamp when the OTP was generated
//        long otpTimestamp = getOTPTimestamp(Long.valueOf(otp));
//        // check if the OTP is still valid (less than 2 minutes old)
//        if (otpTimestamp > 0 && System.currentTimeMillis() - otpTimestamp <= 2 * 60 * 1000) {
//            // valid OTP, delete the timestamp
//
//            deleteOTPTimestamp(Long.valueOf(otp));
//            return true;
//        }
//        // invalid OTP or expired, return false
//        return false;
//    }
//
//
//
//    // retrieve the timestamp when the OTP was generated
//    private long getOTPTimestamp(Long otp) {
//
//        Long timestamp = otpTimestampCache.getIfPresent(otp);
//        // retrieve the timestamp from a database or cache
//        // return 0 if no timestamp found (i.e., OTP not generated for the email)
//        return 0;
//    }
//
//    // delete the timestamp when the OTP is validated
//    private void deleteOTPTimestamp(Long otp) {
//        // delete the timestamp from a database or cache
//        otpTimestampCache.invalidate(otp);
//    }
    // create a cache with a TTL of 5 minutes
    Cache<String, OTP> otpCache = Caffeine.newBuilder()
            .expireAfterWrite(5, TimeUnit.MINUTES)
            .build();

    // generate an OTP and store it in the cache
    public String generateAndSendOTP(String email) {
        // generate a random 6-digit OTP
        Random random = new Random();
        int otpInt = 100000 + random.nextInt(900000); // generates a random number between 100000 and 999999
        String otp = String.valueOf(otpInt); // converts the number to a string

        // create an OTP object and store it in the cache
        OTP otpObj = new OTP(otp, System.currentTimeMillis());
        otpCache.put(email, otpObj);
        sendOTPViaEmail(email,otp);

        return otp;
    }

    // validate the OTP entered by the user
    public boolean validateOTP(String email, String otpEntered) {
        // get the OTP object from the cache
        OTP otpObj = otpCache.getIfPresent(email);
        if (otpObj == null) {
            // OTP expired or never generated
            return false;
        }

        // compare the OTPs and check if the OTP is still valid
        String otp = otpObj.getOTP();
        long otpTimestamp = otpObj.getTimestamp();
        if (otp.equals(otpEntered) && System.currentTimeMillis() - otpTimestamp < 5 * 60 * 1000) {
            otpCache.invalidate(email);

            // OTP is valid
            return true;
        } else {
            // OTP expired or incorrect
            return false;
        }
    }

    // OTP class to store the OTP and its creation timestamp
    public class OTP {
        private String otp;
        private long timestamp;

        public OTP(String otp, long timestamp) {
            this.otp = otp;
            this.timestamp = timestamp;
        }

        public String getOTP() {
            return otp;
        }

        public long getTimestamp() {
            return timestamp;
        }
    }

//     if (timestamp == null) {
//        // timestamp has expired or was never set
//        // handle this case appropriately
//    } else {
//        // timestamp is still valid
//        // compare with current time to see if it's within the 2-minute window
//    }



}
