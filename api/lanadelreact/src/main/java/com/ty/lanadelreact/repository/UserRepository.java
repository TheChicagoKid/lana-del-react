package com.ty.lanadelreact.repository;

import com.ty.lanadelreact.model.Comment;
import com.ty.lanadelreact.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
