package com.exam.controller;

import com.exam.model.User;
import com.exam.model.exam.Quiz;
import com.exam.model.feedback.Feedback;
import com.exam.model.feedback.FeedbackQuestion;
import com.exam.service.FeedbackService;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/feed")
public class FeedbackController {
    @Autowired
    private FeedbackService feedbackService;
    @Autowired
    private UserService userService;
    @PostMapping("/")
    public ResponseEntity<?> addFeedback(@RequestBody Feedback feedback)
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
    @GetMapping("/user/{username}")
    public ResponseEntity<?> getFeedback(@PathVariable("username") String username)
    {

        User user = this.userService.getUser(username);
        Set<Feedback> feedback = feedbackService.getFeedback(user);
        List<Feedback> list = new ArrayList(feedback);
//        if (list.size()>Integer.parseInt(user.getNumberOfFeed()))
//        {
//            list = list.subList(0,Integer.parseInt(feedback.getNumberOfFeedQuestion()+1));
//        }
//        list.forEach((q)-> q.setAnswer(""));
//
//        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }

}
