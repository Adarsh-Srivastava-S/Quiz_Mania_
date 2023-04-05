package com.exam.service;

import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.model.image.Image;

import java.util.Set;

public interface UserService
{
    //creating user
    public User createUser(User user, Set<UserRole>userRoles, Image image) throws Exception;
//    public User getUserById(Long userId);
public User createUser1(User user, Set<UserRole>userRoles) throws Exception;
    //get user by username
    public User getUser(String username);

    //delete user by id
    public void deleteUser(Long userId);

    public User getUserById(Long userId);
}
