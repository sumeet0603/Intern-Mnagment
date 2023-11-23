package com.relntern;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages="com.relntern.repository")
@EnableAutoConfiguration
@ComponentScan({"com.relntern.repository","com.relntern.controller","com.relntern.service"})
public class RelnternBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(RelnternBackendApplication.class, args);
	}

}
