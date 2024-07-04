package com.ty.lanadelreact.controller;

import com.ty.lanadelreact.model.Album;
import com.ty.lanadelreact.model.Comment;
import com.ty.lanadelreact.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/albums/{albumId}/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping
    public List<Comment> getCommentsByAlbumId(@PathVariable Long albumId) {
        return commentService.getCommentsByAlbumId(albumId);
    }

    @PostMapping
    public Comment createComment(@PathVariable Long albumId, @RequestBody Comment comment) {
        comment.setAlbum(new Album());
        comment.getAlbum().setId(albumId);
        return commentService.createComment(comment);
    }

    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable Long id) {
        commentService.deleteComment(id);
    }
}