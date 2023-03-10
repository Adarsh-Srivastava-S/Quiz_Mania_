package com.exam.model.feedback;

import com.exam.model.exam.Quiz;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class FeedbackQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long feedId;
    private String content;

    private String answer;
    @ManyToOne(fetch = FetchType.EAGER)
    private Feedback feedback;


}

