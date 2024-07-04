package com.ty.lanadelreact.repository;

import com.ty.lanadelreact.model.Album;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlbumRepository extends JpaRepository<Album, Long> {
}
