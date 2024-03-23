package com.zemoso.diagnostics.labservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class DiagnosticsApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiagnosticsApplication.class, args);
	}

}
