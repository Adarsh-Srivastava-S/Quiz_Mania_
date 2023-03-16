package com.exam.service;

//import com.exam.model.OpenView.DispQuest;

import com.exam.model.contactus.ContactUs;
import com.exam.model.faq.FaqQuestion;

import java.util.List;
import java.util.Set;

public interface ContactUsService {
    public ContactUs addContactUs(ContactUs contactUs);

    public ContactUs getContactUs(Long contactId);

    public ContactUs updateContactUs(ContactUs contactUs);

    public List<ContactUs> getAllContactUs(Integer pageNumber, Integer pageSize);

    public Set<ContactUs> findAllcontactUs();
//    public Set<ContactUs> getContactUsList(DispQuest dispQuest);

}
