package com.ty.lanadelreact.service;

import com.ty.lanadelreact.model.Comment;
import com.ty.lanadelreact.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getCommentsByAlbumId(Long albumId) {
        return commentRepository.findByAlbumId(albumId);
    }

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }
}
