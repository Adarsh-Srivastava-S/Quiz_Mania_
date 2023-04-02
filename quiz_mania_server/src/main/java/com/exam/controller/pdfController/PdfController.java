package com.exam.controller.pdfController;

import com.exam.model.Pdf;
import com.exam.model.User;
import com.exam.repo.PdfRepo;
import com.exam.service.UserService;
import com.exam.service.pdf.PdfService;
import com.exam.utility.ImageUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;
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

    @PostMapping(value = "/submit-pdf",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> submitPdf(@RequestBody Pdf data) throws IOException, MessagingException {
//        byte[] imageBytes = ImageUtility.compressImage(data.getPdf());
//        byte[] image=ImageUtility.decompressImage(imageBytes);

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
        User user = this.userService.getUserById(data.getUserid());
String image="data:image/png;base64,"+data.getName();
        Pdf model = new Pdf();
        model.setPdf(data.getPdf());
        model.setName(data.getName());
        pdfService.addPdf(model, user);
        // ... save the model to your database or perform any other operations as needed
System.out.println("jfgjdgsfhsdfgjds");
        return ResponseEntity.ok("PDF file uploaded and compressed successfully");
    }


    ///send result to user
    // Get the compressed PDF bytes from your model


}
