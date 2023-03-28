package com.exam.service.leaderboard;

import com.exam.model.User;
import com.exam.model.exam.Quiz;
import com.exam.model.leaderboard.Leaderboard;

import java.util.List;
import java.util.Set;

public interface LeaderboardService {

     Leaderboard addLeaderboard(Leaderboard leaderboard);

     List<Leaderboard> getLeaderboard(Quiz quiz);
     List<Leaderboard> getLeaderboardByUser(User user);
     Set<Leaderboard> getLeader();
}
