package com.ty.lanadelreact.controller;

import com.ty.lanadelreact.model.CommentDTO;
import com.ty.lanadelreact.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/albums/{albumId}/comments")
@CrossOrigin(origins = "http://localhost:5173")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping
    public List<CommentDTO> getCommentsByAlbumId(@PathVariable Long albumId) {
        return commentService.getCommentsByAlbumId(albumId);
    }

    @PostMapping
    public CommentDTO createComment(@PathVariable Long albumId, @RequestBody CommentDTO commentDTO) {
        commentDTO.setAlbumId(albumId);
        return commentService.createComment(commentDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable Long id) {
        commentService.deleteComment(id);
    }
}