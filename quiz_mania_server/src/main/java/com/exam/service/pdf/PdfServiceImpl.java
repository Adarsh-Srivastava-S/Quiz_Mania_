package com.exam.service.pdf;

import com.exam.model.Pdf;
import com.exam.model.User;
import com.exam.repo.PdfRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.mail.util.ByteArrayDataSource;
import java.io.*;
import java.util.Base64;
import java.util.zip.Inflater;

@Service
public class PdfServiceImpl implements PdfService {
    @Autowired
    PdfRepo pdfRepo;
    @Autowired
    private JavaMailSender mailSender;

    public void addPdf(Pdf pdf, User user) throws MessagingException, FileNotFoundException {
//        Pdf model = pdf; // Assuming you have a method to get the PDF model by ID
//        byte[] compressedPdfBytes = model.getPdf();
//
//        // Decompress the PDF bytes using the Inflater class
//        Inflater inflater = new Inflater();
//        inflater.setInput(compressedPdfBytes);
//        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(compressedPdfBytes.length);
//        byte[] tmp = new byte[4*1024];
//        try {
//            while (!inflater.finished()) {
//                int count = inflater.inflate(tmp);
//                outputStream.write(tmp, 0, count);
//            }
//            outputStream.close();
//        } catch (Exception exception) {
//            // Handle any exceptions that occur while decompressing the PDF bytes
//        }

//        Attach the PDF file to an email using JavaMail
//        String emailBody = "Dear " +user.getFirstName()+" "+user.getLastName() + ",\n\n" +
//                "Thank you for reaching out to us at Quiz Mania! We have received your message and will get back to you as soon as possible. Our team is dedicated to providing excellent customer service and we are excited to assist you with any questions or concerns you may have.\n\n" +
//                "Please allow us up to 48 hours to review your message and respond with an appropriate solution. We appreciate your patience and understanding.\n\n" +
//                "Thank you once again for choosing Quiz Mania! We look forward to connecting with you soon.\n\n" +
//                "Best regards,\n\n" +
//                "The Quiz Mania Team,\n\n"+
//                "Your Score Card :-\n\n";
        String emailBody = "Dear " + user.getFirstName() + " " + user.getLastName() +
                ",\n\nWe are pleased to inform you that your scorecard for the recent exam is attached to this email. Congratulations! on your performance!\n\n" +
                "We hope this achievement brings you great satisfaction and encourages you to continue working hard towards your goals. If you have any questions or concerns regarding your scorecard, please do not hesitate to reach out to us.\n\n" +
                "Thank you for your continued dedication to learning and growth.\n\nBest regards," +
                "\nThe Quiz Mania Team!";
        byte[] imageBytes = Base64.getDecoder().decode(pdf.getName());
//        System.out.println(imageBytes);
        File imageFile = new File(user.getFirstName()+".png");
        try (OutputStream outputStream = new FileOutputStream(imageFile)) {
            outputStream.write(imageBytes);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo("quizmania007@gmail.com");
        helper.setSubject("Your Score Card");
        helper.setText(emailBody);
//        ByteArrayDataSource dataSource = new ByteArrayDataSource(pdfBytes, "application/pdf");

        helper.addAttachment(user.getFirstName(), imageFile);

        mailSender.send(message);


    }

}
