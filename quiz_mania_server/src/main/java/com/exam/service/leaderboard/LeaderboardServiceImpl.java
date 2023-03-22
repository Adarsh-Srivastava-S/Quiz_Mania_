package com.exam.service.leaderboard;

import com.exam.model.exam.Quiz;
import com.exam.model.leaderboard.Leaderboard;
import com.exam.repo.LeaderboardRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class LeaderboardServiceImpl implements LeaderboardService {
    @Autowired
    LeaderboardRepo leaderboardRepo;

    @Override
    public Leaderboard addLeaderboard(Leaderboard leaderboard) {


        return this.leaderboardRepo.save(leaderboard);
    }

    @Override
    public Set<Leaderboard> getLeaderboard(Quiz quiz) {


        return (this.leaderboardRepo.findByQuizOrderByScoreDesc(quiz));
    }
    @Override
    public Set<Leaderboard> getLeader()
    {
        return this.leaderboardRepo.findByOrderByScoreDesc();
    }
    private Set<Leaderboard> sort(ArrayList<Leaderboard> leaderbloards) {
        Collections.sort(leaderbloards, Comparator.comparing(Leaderboard::getScore).reversed());
        return new HashSet<>(leaderbloards);
    }
}
