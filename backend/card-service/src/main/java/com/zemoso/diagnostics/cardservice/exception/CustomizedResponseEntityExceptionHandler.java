package com.zemoso.diagnostics.cardservice.exception;

import java.util.Date;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@ControllerAdvice
@RestController
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<Object> handleAllExceptions(Exception ex, WebRequest request) {
        ExceptionResponse exceptionResponse =
                new ExceptionResponse(new Date(), ex.getMessage(), request.getDescription(false));

        ResponseEntity<Object> errors= new ResponseEntity<>(exceptionResponse, HttpStatus.INTERNAL_SERVER_ERROR);

        if(!ObjectUtils.isEmpty(errors)) return errors;

        return new ResponseEntity<>(exceptionResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(NoRecordFound.class)
    public final ResponseEntity<Object> handleUserNotFoundException(NoRecordFound ex, WebRequest request) {
        ExceptionResponse exceptionResponse =
                new ExceptionResponse(new Date(), ex.getMessage(), request.getDescription(false));

        ResponseEntity<Object> errors= new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);

        if(!ObjectUtils.isEmpty(errors)) return errors;

        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers, HttpStatus status, WebRequest request) {
        ExceptionResponse exceptionResponse =
                new ExceptionResponse(new Date(), "Validation Failed", ex.getBindingResult().toString());

        ResponseEntity<Object> errors= new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);

        if(!ObjectUtils.isEmpty(errors)) return errors;

        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
}