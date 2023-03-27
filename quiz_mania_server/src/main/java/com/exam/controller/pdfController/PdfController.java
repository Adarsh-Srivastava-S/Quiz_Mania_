package com.exam.controller.pdfController;

import com.exam.model.Pdf;
import com.exam.model.User;
import com.exam.repo.PdfRepo;
import com.exam.service.UserService;
import com.exam.service.pdf.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@RestController
@RequestMapping("/pdf")
@CrossOrigin("*")
public class PdfController {
    @Autowired
    PdfService pdfService;
    @Autowired
    UserService userService;
    PdfRepo pdfRepo;

    @PostMapping("/submit-pdf")
    public ResponseEntity<String> submitPdf(@RequestParam("pdf") MultipartFile pdfFile, @RequestParam("userid") Long id) throws IOException, MessagingException {
//        byte[] pdfBytes = pdfFile.getBytes();
//
//        // Compress the PDF bytes using the Deflater class
//        Deflater deflater = new Deflater();
//        deflater.setLevel(Deflater.BEST_COMPRESSION);
//        deflater.setInput(pdfBytes);
//        deflater.finish();
//
//        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(pdfBytes.length);
//        byte[] tmp = new byte[4*1024];
//        while (!deflater.finished()) {
//            int size = deflater.deflate(tmp);
//            outputStream.write(tmp, 0, size);
//        }
//        outputStream.close();
//        byte[] compressedPdfBytes = outputStream.toByteArray();

        // Save the compressed PDF bytes to your model
        User user = this.userService.getUserById(id);

        Pdf model = new Pdf();
        model.setPdf(pdfFile.getBytes());
        model.setName(pdfFile.getName());
        pdfService.addPdf(model, user);
        // ... save the model to your database or perform any other operations as needed

        return ResponseEntity.ok("PDF file uploaded and compressed successfully");
    }


    ///send result to user
    // Get the compressed PDF bytes from your model


}
