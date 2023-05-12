package com.exam.service;

import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.model.image.Image;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Set;

public interface UserService
{
    //creating user
    public User createUser(User user, Set<UserRole>userRoles, Image image) throws Exception;
    public User createUser3(User user, Set<UserRole>userRoles) throws Exception;
//    public User getUserById(Long userId);
    public User createUser1(User user, MultipartFile file) throws Exception;
    public User createUser2(User user) throws Exception;

    //get user by username
    public User getUser(String username);

    public List<UserRole> getAllUser(Role role);

    //delete user by id
    public void deleteUser(Long userId);

    public User getUserById(Long userId);
}
