package com.ty.lanadelreact.service;

import com.ty.lanadelreact.model.Album;
import com.ty.lanadelreact.model.AlbumDTO;
import com.ty.lanadelreact.model.CommentDTO;
import com.ty.lanadelreact.repository.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AlbumService {
    @Autowired
    private AlbumRepository albumRepository;

    public List<AlbumDTO> getAllAlbums() {
        return albumRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public AlbumDTO getAlbumById(Long id) {
        return albumRepository.findById(id).map(this::convertToDTO).orElse(null);
    }

    public AlbumDTO createAlbum(AlbumDTO albumDTO) {
        Album album = new Album();
        album.setTitle(albumDTO.getTitle());
        album.setReleaseDate(albumDTO.getReleaseDate());
        album.setCoverUrl(albumDTO.getCoverUrl());
        albumRepository.save(album);
        return convertToDTO(album);
    }

    public AlbumDTO updateAlbum(Long id, AlbumDTO albumDTO) {
        Album album = albumRepository.findById(id).orElseThrow(() -> new RuntimeException("Album not found"));
        album.setTitle(albumDTO.getTitle());
        album.setReleaseDate(albumDTO.getReleaseDate());
        album.setCoverUrl(albumDTO.getCoverUrl());
        albumRepository.save(album);
        return convertToDTO(album);
    }

    public void deleteAlbum(Long id) {
        albumRepository.deleteById(id);
    }

    private AlbumDTO convertToDTO(Album album) {
        AlbumDTO albumDTO = new AlbumDTO();
        albumDTO.setId(album.getId());
        albumDTO.setTitle(album.getTitle());
        albumDTO.setReleaseDate(album.getReleaseDate());
        albumDTO.setCoverUrl(album.getCoverUrl());
        albumDTO.setComments(album.getComments().stream().map(comment -> {
            CommentDTO commentDTO = new CommentDTO();
            commentDTO.setId(comment.getId());
            commentDTO.setText(comment.getText());
            commentDTO.setAlbumId(comment.getAlbum().getId());
            return commentDTO;
        }).collect(Collectors.toList()));
        return albumDTO;
    }
}
