package com.exam.service.impl;

import com.exam.config.RestConfig;
import com.exam.helper.UserFoundException;
import com.exam.helper.UserNotFoundException;
import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.model.image.Image;
import com.exam.repo.ImageRepository;
import com.exam.repo.RoleRepository;
import com.exam.repo.UserRepository;
import com.exam.service.UserService;
import net.bytebuddy.implementation.auxiliary.AuxiliaryType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.sql.SQLOutput;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService
{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RestConfig restConfig;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private ImageRepository imageRepository;
@Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, ImageRepository imageRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.imageRepository = imageRepository;
    }

    // creating user
    @Override
    public User createUser(User user, Set<UserRole> userRoles, Image image) throws Exception {
        User local =this.userRepository.findByUsername(user.getUsername());
        if(local!=null)
        {
            System.out.println("User is already there !!.");
//            throw new Exception("User already present !!.");
//            throw new UserNotFoundException();
            throw new UserFoundException();
        }
        else {
            //user create
            for(UserRole ur:userRoles)
            {
                roleRepository.save(ur.getRole());
            }
            user.setImage(image);
            user.getUserRoles().addAll(userRoles);
            local = this.userRepository.save(user);
        }
        return local;
    }
    @Override
    public User createUser1(User user, MultipartFile file) throws Exception {
        User local = this.userRepository.findByUsername(user.getUsername());
//        String url="http://localhost:9005/user/"+user.getUsername();
//        ResponseEntity<User> response = restConfig.restTemplate().getForEntity( url, User.class);
//        System.out.println(response);

        Image image = null;
        if (local.getImage() != null) {
            image = this.imageRepository.findByUserId(local.getImage().getId());
        }
        if (image == null) {
            image = new Image(); // create a new Image object if it doesn't exist
        }
        image.setType(file.getContentType());
        image.setImage(file.getBytes());
        image.setName(file.getName());
        user.setImage(image);
        local = this.userRepository.save(user);
        return local;
    }

    @Override
    public User createUser2(User user) throws Exception {
        User local =this.userRepository.findByUsername(user.getUsername());

        if(local!=null)
        {
            user.setImage(local.getImage());

        }
            local = this.userRepository.save(user);

        return local;
    }
//    @Override
//    public User getUserById(Long userId) {
//        return this.userRepository.findByUserId(userId);
//    }
    //getting user by username
    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }
    @Override
    public User getUserById(Long userId)
    {
        return this.userRepository.getById(userId) ;
    }
    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }
}
