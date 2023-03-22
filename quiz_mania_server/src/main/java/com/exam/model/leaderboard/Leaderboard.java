package com.exam.model.leaderboard;

import com.exam.model.User;
import com.exam.model.exam.Quiz;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

@Data
@Entity
public class Leaderboard {
    @EmbeddedId
    LeaderboardKey id;

    @ManyToOne
    @MapsId("id")
    @JoinColumn(name = "user_id")
    User user;
    @ManyToOne
    @MapsId("qId")
    @JoinColumn(name = "quiz_id")
    Quiz quiz;
    private double score;
}
