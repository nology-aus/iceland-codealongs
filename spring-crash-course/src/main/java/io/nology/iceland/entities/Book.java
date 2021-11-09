package io.nology.iceland.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter @Setter
    private Long id;
    @Getter @Setter
    private Integer pages;
    @Getter @Setter
    private Boolean isHardCover;
    @Getter @Setter
    private String author;

    public Book(Integer pages, Boolean isHardCover, String author) {
        this.pages = pages;
        this.isHardCover = isHardCover;
        this.author = author;
    }

    public Book() {}
}
