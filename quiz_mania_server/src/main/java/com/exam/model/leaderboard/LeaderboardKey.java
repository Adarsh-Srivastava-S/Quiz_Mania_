package com.exam.model.leaderboard;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class LeaderboardKey implements Serializable {
    @Column(name = "user_id")
    Long userId;
    @Column(name = "quiz_id")
    Long quizId;
}
