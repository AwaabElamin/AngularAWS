package com.example.backendspringboot;

import com.example.backendspringboot.models.Product;
import com.example.backendspringboot.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner init(ProductRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Product("Sample Product 1", "A sample product", 9.99));
                repository.save(new Product("Sample Product 2", "Another sample product", 19.99));
            }
        };
    }
}
