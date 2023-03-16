package com.exam.model.contactus;

//import com.exam.model.OpenView.DispQuest;

import jdk.jfr.DataAmount;
import lombok.Data;

import javax.persistence.*;
import javax.security.auth.Subject;

@Data
@Entity
public class ContactUs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long contactId;
    private String name;
    private String email;
    private String Subject;
    private String content;

}
