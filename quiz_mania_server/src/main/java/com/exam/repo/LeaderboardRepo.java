package com.exam.repo;

import com.exam.model.exam.Quiz;
import com.exam.model.leaderboard.Leaderboard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface LeaderboardRepo extends JpaRepository<Leaderboard, Long> {
    Set<Leaderboard> findByQuiz(Quiz quiz);
}
