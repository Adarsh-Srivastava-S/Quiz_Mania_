package com.exam.service.leaderboard;

import com.exam.model.exam.Quiz;
import com.exam.model.leaderboard.Leaderboard;

import java.util.Set;

public interface LeaderboardService {

     Leaderboard addLeaderboard(Leaderboard leaderboard);

     Set<Leaderboard> getLeaderboard(Quiz quiz);
}
