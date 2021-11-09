package io.nology.iceland.payloads.books;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


public class BookCreate {
    @Getter @Setter @NotNull
    Integer pages;
    @Getter @Setter @NotNull
    Boolean isHardCover;
    @Getter @Setter @NotBlank
    String author;
}
