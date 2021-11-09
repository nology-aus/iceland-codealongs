package io.nology.iceland;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class IcelandApplication {

	public static void main(String[] args) {
		SpringApplication.run(IcelandApplication.class, args);
	}
}
