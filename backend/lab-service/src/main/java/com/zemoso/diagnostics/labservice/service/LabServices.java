package com.zemoso.diagnostics.labservice.service;

import com.zemoso.diagnostics.labservice.entity.Lab;

import java.util.List;
import java.util.Optional;

public interface LabServices {

    List<Lab> findAll();

    Optional<Lab> findById(Integer labId);
}
