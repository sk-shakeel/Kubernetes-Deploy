package com.zemoso.diagnostics.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NoRecordFound extends RuntimeException {
	public NoRecordFound(String message) {
		super(message);
	}
}