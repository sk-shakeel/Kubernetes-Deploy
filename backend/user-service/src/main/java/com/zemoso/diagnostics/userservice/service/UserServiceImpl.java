package com.zemoso.diagnostics.userservice.service;

import com.zemoso.diagnostics.userservice.dao.UserRepository;
import com.zemoso.diagnostics.userservice.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        log.info("Inside findAll method of Service");
        return userRepository.findAll();
    }

    public Optional<User> findUserById(int id) {
        log.info("Inside findUserById method of Service");
        return userRepository.findById(id);
    }

    @Override
    public User save(User user) {
        log.info("Inside save method of Service");
        return userRepository.save(user);
    }

    @Override
    public User findUserByName(String name) {
        log.info("Inside findUserByName method of Service");
        return userRepository.findByUsername(name);
    }
}
