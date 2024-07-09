package com.ty.lanadelreact.service;

import com.ty.lanadelreact.model.Comment;
import com.ty.lanadelreact.model.CommentDTO;
import com.ty.lanadelreact.repository.AlbumRepository;
import com.ty.lanadelreact.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private AlbumRepository albumRepository;

    public List<CommentDTO> getCommentsByAlbumId(Long albumId) {
        return commentRepository.findByAlbumId(albumId).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public CommentDTO createComment(CommentDTO commentDTO) {
        Comment comment = new Comment();
        comment.setText(commentDTO.getText());
        comment.setAlbum(albumRepository.findById(commentDTO.getAlbumId()).orElseThrow(() ->
                new RuntimeException("Album not found")));
        commentRepository.save(comment);
        return convertToDTO(comment);
    }

    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }

    private CommentDTO convertToDTO(Comment comment) {
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setId(comment.getId());
        commentDTO.setText(comment.getText());
        commentDTO.setAlbumId(comment.getAlbum().getId());
        return commentDTO;
    }
}
