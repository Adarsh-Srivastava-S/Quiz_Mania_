package com.exam.service.image;

import com.exam.model.image.Image;
import com.exam.repo.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    @Autowired
    ImageRepository imageRepository;
    public void addImage(Image image) {
        this.imageRepository.save(image);
    }
}
