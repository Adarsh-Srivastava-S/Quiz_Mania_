package com.exam.repo;

//import com.exam.model.OpenView.DispQuest;

import com.exam.model.faq.FaqQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface FaqQuestionRepository extends JpaRepository<FaqQuestion, Long> {


}
