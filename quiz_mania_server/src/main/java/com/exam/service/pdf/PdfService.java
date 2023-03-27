package com.exam.service.pdf;

import com.exam.model.Pdf;
import com.exam.model.User;

import javax.mail.MessagingException;

public interface PdfService {
    public void addPdf(Pdf pdf, User user) throws MessagingException;
}
