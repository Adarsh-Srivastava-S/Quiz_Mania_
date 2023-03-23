package com.exam.controller.imageCont;

import com.exam.model.User;
import com.exam.model.image.Image;
import com.exam.model.image.ImageUploadResponse;
import com.exam.repo.ImageRepository;
import com.exam.service.UserService;
import com.exam.utility.ImageUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:8082") open for specific port
@CrossOrigin("*") // open for all ports
public class ImageController {

    @Autowired
    ImageRepository imageRepository;
    @Autowired
    UserService userService;

    @PostMapping("/upload/image")
    public ResponseEntity<ImageUploadResponse> uplaodImage(@RequestParam("img") MultipartFile file,@RequestParam("userid") Long id)
            throws IOException {
//        User use=new User();
        User user1=this.userService.getUserById(id);


        imageRepository.save(Image.builder()

                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .user(user1)
                .image(ImageUtility.compressImage(file.getBytes())).build()
               );
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ImageUploadResponse("Image uploaded successfully: " +
                        file.getOriginalFilename()));
    }
//    @GetMapping(path = {"/get/image/info/{id}"})
//    public ResponseEntity<List<Image>> getImagesByUserId(@PathVariable Long id) {
//        List<Image> images = imageRepository.findByUserId(id);
//        return ResponseEntity.ok(images);
//    }
//    @GetMapping(path = {"/get/image/info/{id}"})
//    public Image getImageDetails(@PathVariable("id") Long id) throws IOException {
//
//        User user=userService.getUserById(id);
//        final Optional<Image> dbImage = imageRepository.findByUserId;
//
//        return Image.builder()
//                .name(dbImage.get().getName())
//                .type(dbImage.get().getType())
//                .image(ImageUtility.decompressImage(dbImage.get().getImage())).build();
//    }

    @GetMapping(path = {"/get/image/info/{id}"})
    public Image getImageDetails(@PathVariable("id") Long id) throws IOException {
        User user = userService.getUserById(id);
        List<Image> images = imageRepository.findByUserId(user.getId());

//        if (images.isEmpty()) {
//            throw new ResourceNotFoundException("No image found for user with id " + user.getId());
//        }

        Image dbImage = images.get(0);

        return Image.builder()
                .name(dbImage.getName())
                .type(dbImage.getType())
                .image(ImageUtility.decompressImage(dbImage.getImage())).build();
    }

//    @GetMapping(path = {"/get/image/{name}"})
//    public ResponseEntity<byte[]> getImage(@PathVariable("name") String name) throws IOException {
//
//        final Optional<Image> dbImage = imageRepository.findByName(name);
//
//        return ResponseEntity
//                .ok()
//                .contentType(MediaType.valueOf(dbImage.get().getType()))
//                .body(ImageUtility.decompressImage(dbImage.get().getImage()));
//    }
}