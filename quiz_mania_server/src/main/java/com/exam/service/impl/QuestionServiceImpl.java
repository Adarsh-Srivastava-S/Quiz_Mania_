package com.exam.service.impl;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.repo.QuestionRepository;
import com.exam.repo.QuizRepository;
import com.exam.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private QuizRepository quizRepository;

    @Override
    public Question addQuestion(Question question) {
        Quiz quiz = this.quizRepository.findById(question.getQuiz().getqId()).get();

        List<Question> questions = this.questionRepository.findByQuiz(quiz);
        int temp = Integer.parseInt(quiz.getNumberOfQuestions());
        if (temp >= questions.size()) {

            quiz.setActive(false);
            this.quizRepository.save(quiz);
            question.setQuiz(quiz);
        }
        return this.questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
//        int temp= Integer.parseInt(quiz.getNumberOfQuestions());
        Quiz quiz = question.getQuiz();
        List<Question> questions = this.questionRepository.findByQuiz(quiz);
        int temp = Integer.parseInt(quiz.getNumberOfQuestions());
        if (temp >= questions.size()) {
            quiz.setActive(false);
            question.setQuiz(quiz);
        }
        return this.questionRepository.save(question);
    }

    @Override
    public Set<Question> getQuestions() {
        return new HashSet<>(this.questionRepository.findAll());
    }

    @Override
    public Question getQuestion(Long questionId) {
        return this.questionRepository.findById(questionId).get();
    }

    @Override
    public List<Question> getQuestionsOfQuiz(Quiz quiz) {
        return this.questionRepository.findByQuiz(quiz);
    }

    @Override
    public void deleteQuestion(Long quesId) {
        Question question = new Question();
        question.setQuesId(quesId);
        this.questionRepository.delete(question);
    }

    @Override
    public Question get(Long questionsId) {
        return this.questionRepository.getOne(questionsId);
    }
}
