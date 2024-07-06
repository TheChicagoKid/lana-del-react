package com.ty.lanadelreact.controller;

import com.ty.lanadelreact.model.Album;
import com.ty.lanadelreact.model.AlbumDTO;
import com.ty.lanadelreact.service.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/albums")
@CrossOrigin(origins = "http://localhost:5173")
public class AlbumController {
    @Autowired
    private AlbumService albumService;

    @GetMapping
    public List<AlbumDTO> getAllAlbums() {
        return albumService.getAllAlbums();
    }

    @GetMapping("/{id}")
    public AlbumDTO getAlbumById(@PathVariable Long id) {
        return albumService.getAlbumById(id);
    }

    @PostMapping
    public AlbumDTO createAlbum(@RequestBody AlbumDTO albumDTO) {
        return albumService.createAlbum(albumDTO);
    }

    @PutMapping("/{id}")
    public AlbumDTO updateAlbum(@PathVariable Long id, @RequestBody AlbumDTO albumDTO) {
        return albumService.updateAlbum(id, albumDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteAlbum(@PathVariable Long id) {
        albumService.deleteAlbum(id);
    }
}