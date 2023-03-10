package com.exam.controller;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.model.feedback.Feedback;
import com.exam.model.feedback.FeedbackQuestion;
import com.exam.service.FeedbackQuestionService;
import com.exam.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/feedback")

public class FeedbackQuestionController {
    @Autowired
    private FeedbackQuestionService feedbackQuestionService;
    @Autowired
    private FeedbackService feedbackService;
    @PostMapping("/")
    public ResponseEntity<FeedbackQuestion> add(@RequestBody FeedbackQuestion feedbackQuestion)
    {
        return ResponseEntity.ok(this.feedbackQuestionService.addFeedbackQuestion(feedbackQuestion));
    }


    @GetMapping("/feed/{fid}")
    public ResponseEntity<?> getQuestionsOfFeedback(@PathVariable("fid") Long fid)
    {

        Feedback feedback = this.feedbackService.getFeedback(fid);
        Set<FeedbackQuestion> feedbackQuestions = feedbackQuestionService.getQuestionsOfFeedback(feedback);
        List<FeedbackQuestion> list = new ArrayList(feedbackQuestions);
        if (list.size()>Integer.parseInt(feedback.getNumberOfFeedQuestion()))
        {
            list = list.subList(0,Integer.parseInt(feedback.getNumberOfFeedQuestion()+1));
        }
        list.forEach((q)-> q.setAnswer(""));

        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }

}
