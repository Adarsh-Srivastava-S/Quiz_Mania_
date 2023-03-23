package com.exam.repo;

import com.exam.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>
{
   public User findByUsername(String username);
//   public User findById(Long userId);
}
