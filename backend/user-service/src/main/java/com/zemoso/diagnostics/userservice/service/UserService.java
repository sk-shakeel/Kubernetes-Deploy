package com.zemoso.diagnostics.userservice.service;

import com.zemoso.diagnostics.userservice.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> findAll();

    Optional<User> findUserById(int id);


    User save(User user);

    User findUserByName(String name);
}
