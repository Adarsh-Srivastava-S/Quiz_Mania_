package com.exam.service.impl;

//import com.exam.model.OpenView.DispQuest;

import com.exam.model.contactus.ContactUs;
import com.exam.model.faq.FaqQuestion;
import com.exam.repo.ContactUsRepository;
import com.exam.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ContactUsServiceImpl implements ContactUsService {
    @Autowired
    ContactUsRepository contactUsRepository;

    @Override
    public ContactUs addContactUs(ContactUs contactUs) {
        return this.contactUsRepository.save(contactUs);
    }

    @Override
    public ContactUs getContactUs(Long contactId) {
        return this.contactUsRepository.findById(contactId).get();
    }

    @Override
    public ContactUs updateContactUs(ContactUs contactUs) {
        return this.contactUsRepository.save(contactUs);
    }

    @Override
    public Set<ContactUs> findAllcontactUs() {
        return new HashSet<>(this.contactUsRepository.findAll());
    }

    @Override
    public List<ContactUs> getAllContactUs(Integer pageNumber, Integer pageSize) {
        Pageable p = (Pageable) PageRequest.of(pageNumber, pageSize);
        Page<ContactUs> pageContactUs = this.contactUsRepository.findAll(p);
        List<ContactUs> allContact = pageContactUs.getContent();
        return allContact;

    }
//     @Override
//   public Set<ContactUs> getContactUsList(DispQuest dispQuest)
//    {
//        return this.contactUsRepository.findByDispQuest(dispQuest);
//    }

}
