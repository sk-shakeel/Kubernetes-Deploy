package com.zemoso.diagnostics.service;

import com.zemoso.diagnostics.dao.TestRepository;
import com.zemoso.diagnostics.entity.Test;
import com.zemoso.diagnostics.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestServiceImpl implements TestService{

    @Autowired
    private TestRepository testRepository;

    @Override
    public List<Test> findAll() {
        return testRepository.findAll();
    }

    @Override
    public Test findById(int id) {
        return testRepository.findById(id).orElseThrow(() -> new NotFoundException("Test id not found - "+ id));
    }
}
