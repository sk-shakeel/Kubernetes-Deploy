package com.zemoso.diagnostics.userservice.dao;

import com.zemoso.diagnostics.userservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsername(String name);
}
