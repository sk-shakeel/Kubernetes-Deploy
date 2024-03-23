package com.zemoso.diagnostics.userservice.controller;

import com.zemoso.diagnostics.userservice.dto.UserDTO;
import com.zemoso.diagnostics.userservice.entity.User;
import com.zemoso.diagnostics.userservice.exception.UserNotFoundException;
import com.zemoso.diagnostics.userservice.mapper.MapperService;
import com.zemoso.diagnostics.userservice.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private MapperService mapperService;

    @GetMapping
    public List<UserDTO> findAll() {
        log.info("Inside findAll method of Controller");
        return mapperService.convertToListDto(userService.findAll());
    }

    @GetMapping("/{id}")
    public List<UserDTO> findUserById(@PathVariable("id") int id) {
        log.info("Inside findUserById method of Controller");
        if(userService.findUserById(id).isEmpty())
            throw new UserNotFoundException("User with id - "+id+" was not found");
        return mapperService.convertToDtoById(userService.findUserById(id));
    }

    @GetMapping("/username/{name}")
    public UserDTO findUserByName(@PathVariable("name") String name) {
        log.info("Inside findUserByName method of Controller");
        if(userService.findUserByName(name)==null)
            throw new UserNotFoundException("User - "+name+" was not found");
        return mapperService.convertToEntity(userService.findUserByName(name));
    }

    @PostMapping
    public User createJob(@RequestBody UserDTO user){
        log.info("Inside createJob method of Controller");
        return userService.save(mapperService.convertToEntity(user));
    }
}