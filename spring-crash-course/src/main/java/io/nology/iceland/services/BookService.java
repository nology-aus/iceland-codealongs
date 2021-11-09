package io.nology.iceland.services;

import io.nology.iceland.entities.Book;
import io.nology.iceland.payloads.books.BookCreate;
import io.nology.iceland.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BookService {
    @Autowired
    private BookRepository repository;

    public void create(BookCreate book) {
        Book dbBook = new Book(book.getPages(), book.getIsHardCover(), book.getAuthor());
        this.repository.save(dbBook);
    }

    public List<Book> all() {
        return this.repository.findAll();
    }

    public Optional<Book> find(Long id) {
        return this.repository.findById(id);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}