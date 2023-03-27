package com.exam.service.email;

import com.exam.model.contactus.ContactUs;

import javax.mail.MessagingException;

public interface EmailService {
    public void sendEmail(ContactUs contactUs) throws MessagingException;
}
