package com.exam.controller;

import com.exam.model.exam.Quiz;
import com.exam.model.leaderboard.Leaderboard;
import com.exam.repo.LeaderboardRepo;
import com.exam.service.leaderboard.LeaderboardService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/leaderboard")
public class LeaderboardController {
    @Autowired
    LeaderboardService leaderboardService;
    @Autowired
    LeaderboardRepo leaderboardRepo;

    @PostMapping("/")
    public ResponseEntity<Leaderboard> addLeaderboard(@RequestBody Leaderboard leaderboard) {

        return ResponseEntity.ok(this.leaderboardService.addLeaderboard(leaderboard));
    }

    @GetMapping("/leaderboard/all/{qid}")
    public ResponseEntity<?> get(@PathVariable("qid") Long qid) {
        Quiz quiz = new Quiz();
        quiz.setqId(qid);
        Set<Leaderboard> leaderboards = this.leaderboardService.getLeaderboard(quiz);

        return ResponseEntity.ok(leaderboards);
    }
    @GetMapping("/leader")
    public ResponseEntity<?> getLeader(){
        Set<Leaderboard> leaderboards=this.leaderboardService.getLeader();
        return ResponseEntity.ok(leaderboards);
    }


}
