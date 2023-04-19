package com.exam.controller.forgetPassword;

import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.model.image.Image;
import com.exam.service.UserService;
import com.exam.service.forgetPassword.ForgetPasswordService;
//import jdk.internal.icu.impl.Punycode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/forget")
@CrossOrigin("*")
public class ForgetPassword {
    @Autowired
    UserService userService;
    @Autowired
    ForgetPasswordService forgetPasswordService;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/password")
    @CrossOrigin("*")
    public ResponseEntity<?> genrateOtp(@RequestParam(name = "username",required = true) String username) throws MessagingException {
        User user=this.userService.getUser(username);
        this.forgetPasswordService.generateAndSendOTP(user.getEmail());
        return ResponseEntity.ok(user);
    }
    @PostMapping("/validate")
    @CrossOrigin("*")
    public ResponseEntity<Boolean> validateOtp(@RequestParam("enterotp") String otp,@RequestParam("username") String username) throws MessagingException {
        User user=this.userService.getUser(username);
        Boolean flag=this.forgetPasswordService.validateOTP(user.getEmail(),otp);
        return ResponseEntity.ok(flag);
    }
    @PostMapping(value = "/change-password")
    public ResponseEntity<Object> createCoordinator(@RequestParam("username") String username,@RequestParam("ch-pass") String chPass,@RequestParam("co-pass") String coPass) throws Exception {
        if(chPass.equals(coPass)) {
            User user=this.userService.getUser(username);
            user.setPassword(this.bCryptPasswordEncoder.encode(chPass));
            this.userService.createUser2(user);
            String message = "Password Change Succesfully!!!";
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", message);
            return ResponseEntity.ok(response);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Passwords do not match");
            return ResponseEntity.ok(response);
        }
    }

//    TODO : change password and upadte in database


}
