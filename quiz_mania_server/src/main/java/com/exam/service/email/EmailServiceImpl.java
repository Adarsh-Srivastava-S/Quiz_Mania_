package com.exam.service.email;

import com.exam.model.contactus.ContactUs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(ContactUs contactUs) throws MessagingException {

        String emailSubject = "Thank you for Contacting Us!";
        String emailBody = "Dear " + contactUs.getName() + ",\n\n" +
                "Thank you for reaching out to us at Quiz Mania! We have received your message and will get back to you as soon as possible. Our team is dedicated to providing excellent customer service and we are excited to assist you with any questions or concerns you may have.\n\n" +
                "Please allow us up to 48 hours to review your message and respond with an appropriate solution. We appreciate your patience and understanding.\n\n" +
                "Thank you once again for choosing Quiz Mania! We look forward to connecting with you soon.\n\n" +
                "Best regards,\n\n" +
                "The Quiz Mania Team";
        String emailTemp = "<html><head>"
                + "<style>"
                + "body {background-color: #f7f9dc;}"
                + "</style>"
                + "</head>"
                + "<body>"
                + "<table>"
                + "<tr><td><img src=\"cid:logo\"></td></tr>"
                + "<tr><td><p>Dear <b>" + contactUs.getName() + "</b>,</p>"
                + "<p>Thank you for reaching out to us at <strong>Quiz Mania</strong>! We have received your message and will get back to you as soon as possible. Our team is dedicated to providing excellent customer service and we are excited to assist you with any questions or concerns you may have.</p>"
                + "<p>Please allow us up to 48 hours to review your message and respond with an appropriate solution. We appreciate your patience and understanding.</p>"
                + "<p>Thank you once again for choosing <b>Quiz Mania</b>! We look forward to connecting with you soon.</p>"
                + "<p>Best regards,</p>"
                + "<p><b>The Quiz Mania Team</b> Team</p>"
                + "</td></tr></table>"
                + "</body></html>";
        MimeMessage mimeMessage = mailSender.createMimeMessage();
//        SimpleMailMessage message=new SimpleMailMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
        helper.setFrom("quizmania007@gmail.com");
        helper.setTo(contactUs.getEmail());
        helper.setText(emailTemp, true);
        helper.setSubject(emailSubject);
        helper.addInline("logo", new ClassPathResource("static/logo/Quiz Maniaa.png"));
        mailSender.send(mimeMessage);
        System.out.println("Message Send Succefully ....");
    }
}
//C:\Users\adars\OneDrive\Desktop\Quiz Mania\quiz_mania_front\src\assets\Quiz Maniaa.png