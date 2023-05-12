package com.exam.controller;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.repo.QuestionRepository;
import com.exam.service.QuestionService;
import com.exam.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import static java.lang.Integer.parseInt;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class
QuestionController {
    @Autowired
    private QuestionService service;
@Autowired
private QuestionRepository questionRepository;
    @Autowired
    private QuizService quizService;

    // add question
    @PostMapping("/")
    public ResponseEntity<Question> add(@RequestBody Question question) {
        return ResponseEntity.ok(this.service.addQuestion(question));
    }


    // update question
    @PutMapping("/")
    public ResponseEntity<Question> update(@RequestBody Question question)
    {
        return ResponseEntity.ok(this.service.updateQuestion(question));
    }

    // get all question of any quiz
    @GetMapping("/quiz/{qid}")
    public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("qid") Long qid)
    {
        Quiz quiz = this.quizService.getQuiz(qid);
        List<Question> questions = this.service.getQuestionsOfQuiz(quiz);
//        return ResponseEntity.ok(questionsOfQuiz);

//        List<Question> questions = quiz.getQuestions();
//        List<Question> list = this.questionRepository.findAll();
        List<Question> randomQuestions = new ArrayList<>();

        Random random = new Random();
        while (randomQuestions.size() < parseInt(quiz.getNumberOfQuestions())) {
            int index = random.nextInt(questions.size());
            Question question = questions.get(index);

            if (!randomQuestions.contains(question)) {
                randomQuestions.add(question);
            }
        }

//
//        if (list.size()>Integer.parseInt(quiz.getNumberOfQuestions()))
//        {
//            list = list.subList(0,Integer.parseInt(quiz.getNumberOfQuestions()+1));
//        }
        randomQuestions.forEach((q)->{
            q.setAnswer("");
        });

        Collections.shuffle(randomQuestions);
        return ResponseEntity.ok(randomQuestions);
    }

    @GetMapping("/quiz/all/{qid}")
    public ResponseEntity<?> getQuestionsOfQuizAdmin(@PathVariable("qid") Long qid)
    {
        Quiz quiz = new Quiz();
        quiz.setqId(qid);
        List<Question> questionsOfQuiz = this.service.getQuestionsOfQuiz(quiz);
        return ResponseEntity.ok(questionsOfQuiz);
//        return ResponseEntity.ok(list);
    }

    // get single questions
    @GetMapping("/{quesId}")
    public  Question get(@PathVariable("quesId") Long quesId)
    {
        return this.service.getQuestion(quesId);
    }

    // delete question
    @DeleteMapping("/{quesId}")
     public void delete(@PathVariable("quesId") Long quesId)
    {
        this.service.deleteQuestion(quesId);
    }


    // eval quiz
    @PostMapping("/eval-quiz")
    public ResponseEntity<?> evalQuiz(@RequestBody List<Question> questions)
    {
        System.out.println(questions);
       double marksGot = 0;
       int correctAnswers = 0;
       int attempted = 0;
       int maxMarks=0;

        for(Question q: questions){
           // System.out.println(q.getGivenAnswer());
            // single questions
            Question question = this.service.get(q.getQuesId());
            if (question.getAnswer().equals(q.getGivenAnswer())) {
                // correct
                correctAnswers++;
                double marksSingle = Double.parseDouble(questions.get(0).getQuiz().getMaxMarks()) / questions.size();
                maxMarks= parseInt(questions.get(0).getQuiz().getMaxMarks());
                marksGot += marksSingle;
            }
            if (q.getGivenAnswer() != null) {
                attempted++;
            }
        }
        ;
        Map<String, Object> map = Map.of("marksGot", marksGot, "correctAnswers", correctAnswers, "attempted", attempted,"maxMarks",maxMarks);
        return ResponseEntity.ok(map);
    }

    @PostMapping("/quiz-score")
    public double getscore(@RequestBody List<Question> questions) {
        System.out.println(questions);
        double marksGot = 0;
        int correctAnswers = 0;
        int attempted = 0;

        for (Question q : questions) {
            // System.out.println(q.getGivenAnswer());
            // single questions
            Question question = this.service.get(q.getQuesId());
            if (question.getAnswer().equals(q.getGivenAnswer())) {
                // correct
                correctAnswers++;
                double marksSingle = Double.parseDouble(questions.get(0).getQuiz().getMaxMarks()) / questions.size();
                marksGot += marksSingle;
            }
            if (q.getGivenAnswer() != null) {
                attempted++;
            }
        }
        ;
        return marksGot;
    }
}
