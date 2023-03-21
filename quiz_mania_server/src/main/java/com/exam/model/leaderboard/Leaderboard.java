package com.exam.model.leaderboard;

import com.exam.model.User;
import com.exam.model.exam.Quiz;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Leaderboard {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
    @ManyToOne
    @JoinColumn(name = "quiz_id")
    Quiz quiz;
    private Double score;
}
