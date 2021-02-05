package com.aim.java.Unit5MovieMaster.movie.entity.genre;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/genres")
public class GenreController {
    @Autowired
    private GenreRepository genreRepository;

    @GetMapping(path = "")
    public Iterable<Genre> getAllGenre(){
        return genreRepository.findAll();
    }
}
