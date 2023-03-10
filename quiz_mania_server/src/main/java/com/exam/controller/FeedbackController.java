package com.exam.controller;

import com.exam.model.exam.Quiz;
import com.exam.model.feedback.Feedback;
import com.exam.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/feed")
public class FeedbackController {
    @Autowired
    private FeedbackService feedbackService;
    @PostMapping("/")
    public ResponseEntity<?> add(@RequestBody Feedback feedback)
    {
        return ResponseEntity.ok(this.feedbackService.addFeedback(feedback));
    }

    @GetMapping("/")
    public ResponseEntity<?> feedbacks()
    {
        return ResponseEntity.ok(this.feedbackService.getFeedbacks());
    }
    @GetMapping("/{fid}")
    public Feedback feedback(@PathVariable("fid") Long fid)
    {
        return this.feedbackService.getFeedback(fid);
    }

}
