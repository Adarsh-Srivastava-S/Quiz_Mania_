package com.exam.model.feedback;

import com.exam.model.User;
import com.exam.model.exam.Question;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.*;

@Data
@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long fId;
    private String title;
    private Boolean active=false;
    private String numberOfFeedQuestion;
    //Mapped to user
    @ManyToOne(fetch = FetchType.EAGER)
    private User user;
//    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @OneToMany(mappedBy = "feedback",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<FeedbackQuestion> feedbackQuestions = new LinkedList<>();

}
