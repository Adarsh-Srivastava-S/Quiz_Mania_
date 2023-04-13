package com.exam.service.leaderboard;

import com.exam.model.User;
import com.exam.model.exam.Quiz;
import com.exam.model.image.Image;
import com.exam.model.leaderboard.Leaderboard;
import com.exam.repo.LeaderboardRepo;
import com.exam.utility.ImageUtility;
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
    public List<Leaderboard> getLeaderboard(Quiz quiz) {
       List<Leaderboard> leaderboards= new ArrayList<>(this.leaderboardRepo.findByQuizOrderByScoreDesc(quiz));
//        for (Leaderboard leaderboard : leaderboards) {
////            Image dbImage=leaderboard.getImage();
////            leaderboard.getImage().setImage(ImageUtility.decompressImage(dbImage.getImage()));
//
////           Image image1= Image.builder().name(dbImage.getName()).type(dbImage.getType()).image(ImageUtility.decompressImage(dbImage.getImage())).build();
////        leaderboard.setImage(image1);
//        }
        return leaderboards;
    }
    @Override
    public Set<Leaderboard> getLeader()
    {
        return this.leaderboardRepo.findByOrderByScoreDesc();
    }
    @Override
    public List<Leaderboard> getLeaderboardByUser(User user)
    {
        List<Leaderboard> leaderboards= new ArrayList<>(this.leaderboardRepo.findByUserOrderByScoreDesc(user));
        return leaderboards;
    }

    private Set<Leaderboard> sort(ArrayList<Leaderboard> leaderbloards) {
        Collections.sort(leaderbloards, Comparator.comparing(Leaderboard::getScore).reversed());
        return new HashSet<>(leaderbloards);
    }
}
