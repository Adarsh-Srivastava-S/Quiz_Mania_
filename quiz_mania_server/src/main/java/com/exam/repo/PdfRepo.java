package com.exam.repo;

import com.exam.model.Pdf;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PdfRepo extends JpaRepository<Pdf, Long> {

}
