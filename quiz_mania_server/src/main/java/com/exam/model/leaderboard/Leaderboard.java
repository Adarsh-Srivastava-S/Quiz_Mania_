package com.exam.model.leaderboard;

import com.exam.model.User;
import com.exam.model.exam.Quiz;
import com.exam.model.image.Image;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;


@Entity
public class Leaderboard {
//    @EmbeddedId
//    LeaderboardKey id;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @ManyToOne
//@MapsId("id")
    @JoinColumn(name = "user_id")
    User user;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name ="image_id",referencedColumnName = "user_id")

    Image image;


    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        if (image == null || image.getUser() == null) {
            throw new IllegalArgumentException("Invalid Image object provided");
        }

        this.image = image;
    }

//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    @ManyToOne
//@MapsId("qId")
    @JoinColumn(name = "quiz_id")
    Quiz quiz;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    private double score;
}
