package com.exam.repo;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.model.feedback.Feedback;
import com.exam.model.feedback.FeedbackQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface FeedbackQuestionRepository extends JpaRepository<FeedbackQuestion,Long> {
    Set<FeedbackQuestion> findByFeedback(Feedback feedback);
}
