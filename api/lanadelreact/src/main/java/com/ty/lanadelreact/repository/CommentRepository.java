package com.ty.lanadelreact.repository;

import com.ty.lanadelreact.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByAlbumId(Long albumId);
}
