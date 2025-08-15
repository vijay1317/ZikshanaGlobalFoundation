package org.zikshana;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ZikshanaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZikshanaBackendApplication.class, args);
	}

}