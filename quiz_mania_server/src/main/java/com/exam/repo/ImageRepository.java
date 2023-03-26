package com.exam.repo;

import java.util.List;
import java.util.Optional;

import com.exam.model.User;
import com.exam.model.image.Image;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ImageRepository extends JpaRepository<Image, Long> {
Image findByUserId(Long userId);

//    List<Image> findByUserId(Long userId);
}
