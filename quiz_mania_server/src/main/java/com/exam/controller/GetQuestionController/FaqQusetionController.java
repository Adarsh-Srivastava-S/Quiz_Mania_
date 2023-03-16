package com.exam.controller.GetQuestionController;

import com.exam.model.contactus.ContactUs;
import com.exam.model.faq.FaqQuestion;
import com.exam.service.FaqQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/faqs")
public class FaqQusetionController {
    @Autowired
    FaqQuestionService faqQuestionService;

    @PostMapping("/add")
    public ResponseEntity<?> addFaqQustion(@RequestBody FaqQuestion faqQuestion) {
        return ResponseEntity.ok(this.faqQuestionService.addFaqQuestion(faqQuestion));
    }

    @GetMapping("/show")
    public List<FaqQuestion> show() {
        return new ArrayList<>(this.faqQuestionService.findAllFaqQuestion());
    }

    @GetMapping("/faqpage")
    public ResponseEntity<List<FaqQuestion>> getAllFaq
            (@RequestParam(value = "pageNumber", defaultValue = "10", required = false) Integer pageNumber,
             @RequestParam(value = "pageSize", defaultValue = "1", required = false) Integer pageSize) {
        List<FaqQuestion> allFaq = this.faqQuestionService.getAllFaqQuestion(pageNumber, pageSize);

        return new ResponseEntity<List<FaqQuestion>>(allFaq, HttpStatus.OK);
    }

}
