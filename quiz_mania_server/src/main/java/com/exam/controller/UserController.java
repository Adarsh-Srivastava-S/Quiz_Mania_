package com.exam.controller;

import com.exam.helper.UserFoundException;
import com.exam.helper.UserNotFoundException;
import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.model.image.Image;
import com.exam.service.UserService;
import com.exam.utility.ImageUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController
{
    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    //for creating user
    @PostMapping(value = "/",consumes = {"multipart/form-data"})
    public User createUser(@ModelAttribute User user, @RequestParam("img") MultipartFile file) throws Exception
    {

        // encoding password with bcrptpass
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        Set<UserRole> roles = new HashSet<>();

        Image image=new Image();
        image.setImage(file.getBytes());
        image.setType(file.getContentType());
        image.setName(file.getName());


        Role role = new Role();
        role.setRoleId(45L);
        role.setRoleName("NORMAL");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);

        roles.add(userRole);
        return this.userService.createUser(user, roles,image);
    }

//    @GetMapping("/{userid}")
//    public User getUserById(@PathVariable("userid") Long userId)
//    {
//        return this.userService.getUserById(userId);
//    }


    @GetMapping("/{username}")
    public ResponseEntity<User> getUser(@PathVariable("username") String username) {
        return ResponseEntity.ok(this.userService.getUser(username));
    }

    // delete the user by id
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId)
    {
        this.userService.deleteUser(userId);
    }

    //update api

//    @ExceptionHandler(UserFoundException.class)
//    public ResponseEntity<?> exceptionHandler(UserNotFoundException ex, ResponseEntity<?> ResponseEntity)
//    {
//        return ResponseEntity;
    }

