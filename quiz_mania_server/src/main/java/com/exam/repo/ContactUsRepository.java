package com.exam.repo;

//import com.exam.model.OpenView.DispQuest;

import com.exam.model.contactus.ContactUs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface ContactUsRepository extends JpaRepository<ContactUs, Long> {

}
