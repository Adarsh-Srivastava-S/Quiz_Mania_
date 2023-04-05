package com.exam.controller;

import com.exam.model.User;
import com.exam.model.exam.Quiz;
import com.exam.model.image.Image;
import com.exam.model.leaderboard.Leaderboard;
import com.exam.repo.ImageRepository;
import com.exam.repo.LeaderboardRepo;
import com.exam.service.UserService;
import com.exam.service.image.ImageService;
import com.exam.service.leaderboard.LeaderboardService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/leaderboard")
public class LeaderboardController {
    private final LeaderboardService leaderboardService;
    private final UserService userService;
    private final LeaderboardRepo leaderboardRepo;
    private final ImageService imageService;
    private final ImageRepository imageRepository;

    @Autowired
    public LeaderboardController(LeaderboardService leaderboardService,
                                 UserService userService,
                                 LeaderboardRepo leaderboardRepo,
                                 ImageService imageService,
                                 ImageRepository imageRepository) {
        this.leaderboardService = leaderboardService;
        this.userService = userService;
        this.leaderboardRepo = leaderboardRepo;
        this.imageService = imageService;
        this.imageRepository = imageRepository;
    }

    @PostMapping("/")
    public ResponseEntity<Leaderboard> addLeaderboard(@RequestBody Leaderboard leaderboard) {
       User user = userService.getUserById(leaderboard.getUser().getId());

        // Create a new Image object and set the User object in it
Image image=imageRepository.findByUserId(user.getId());
//        leaderboard.setImage(image);
        // Save the Image object to the database

//        imageService.addImage(image);

        // Set the Image object in the Leaderboard object and save it to the database
//        leaderboard.setImage(image);
        leaderboardService.addLeaderboard(leaderboard);


        return ResponseEntity.ok(this.leaderboardService.addLeaderboard(leaderboard));
    }

    @GetMapping("/leaderboard/all/{qid}")
    public ResponseEntity<?> get(@PathVariable("qid") Long qid) {
        Quiz quiz = new Quiz();
        quiz.setqId(qid);
        List<Leaderboard> leaderboards = this.leaderboardService.getLeaderboard(quiz);
     return ResponseEntity.ok(leaderboards);
    }
    @GetMapping("/leaderboard/user/{uid}")
    public ResponseEntity<?> getUserLeader(@PathVariable("uid") Long uid) {
        User user=new User();
        user.setId(uid);
        List<Leaderboard> leaderboards = this.leaderboardService.getLeaderboardByUser(user);
        return ResponseEntity.ok(leaderboards);
    }
    @GetMapping("/leader")
    public ResponseEntity<?> getLeader(){
        Set<Leaderboard> leaderboards=this.leaderboardService.getLeader();
        return ResponseEntity.ok(leaderboards);
    }


}
