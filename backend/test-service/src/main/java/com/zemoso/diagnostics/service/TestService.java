package com.zemoso.diagnostics.service;

import com.zemoso.diagnostics.entity.Test;

import java.util.List;

public interface TestService {
    List<Test> findAll();
    Test findById(int id);
}
