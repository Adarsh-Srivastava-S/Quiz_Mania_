package com.exam.repo;

import com.exam.model.exam.Quiz;
import com.exam.model.feedback.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback,Long> {
    public List<Feedback> findByActive(Boolean b);
}
