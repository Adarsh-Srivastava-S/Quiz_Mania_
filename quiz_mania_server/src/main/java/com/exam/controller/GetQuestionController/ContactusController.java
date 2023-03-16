package com.exam.controller.GetQuestionController;

import com.exam.model.contactus.ContactUs;
import com.exam.model.faq.FaqQuestion;
import com.exam.model.feedback.Feedback;
import com.exam.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@RestController
@RequestMapping("/contact")

public class ContactusController {
    @Autowired
    ContactUsService contactUsService;

    @PostMapping("/add")
    public ResponseEntity<?> addContactUs(@RequestBody ContactUs contactUs) {
        return ResponseEntity.ok(this.contactUsService.addContactUs(contactUs));
    }

    @GetMapping("/show")
    public List<ContactUs> show() {
        return new ArrayList<>(this.contactUsService.findAllcontactUs());
    }

    @GetMapping("/page")
    public ResponseEntity<List<ContactUs>> getAllContactUs
            (@RequestParam(value = "pageNumber", defaultValue = "1", required = false) Integer pageNumber,
             @RequestParam(value = "pageSize", defaultValue = "5", required = false) Integer pageSize) {
        List<ContactUs> allContactUs = this.contactUsService.getAllContactUs(pageNumber, pageSize);

        return new ResponseEntity<List<ContactUs>>(allContactUs, HttpStatus.OK);
    }


}
