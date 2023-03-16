package com.exam.model.faq;

//import com.exam.model.OpenView.DispQuest;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data

public class FaqQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long faqQuestId;
    private String content;
    private String answer;
//    @ManyToOne(fetch = FetchType.EAGER)
//    private DispQuest dispQuest;
}
