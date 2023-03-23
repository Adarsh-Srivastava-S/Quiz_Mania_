package com.exam.repo;

import java.util.Optional;

import com.exam.model.image.Image;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ImageRepository extends JpaRepository<Image, Long> {
    Optional<Image> findByName(String name);
}
