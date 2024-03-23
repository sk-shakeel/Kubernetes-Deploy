package com.zemoso.diagnostics.labservice.service;


import com.zemoso.diagnostics.labservice.dao.LabRepository;
import com.zemoso.diagnostics.labservice.entity.Lab;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class LabServicesImpl implements  LabServices{

    @Autowired
    private LabRepository labRepository;

    @Override
    public List<Lab> findAll() {
        log.info("Inside findAll method of LabServiceImpl");
        return labRepository.findAll();
    }

    @Override
    public Optional<Lab> findById(Integer labId) {
        log.info("Inside findById method of LabServiceImpl");
        return labRepository.findById(labId);
    }
}
