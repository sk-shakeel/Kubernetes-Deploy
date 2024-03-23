package com.zemoso.diagnostics.labservice.controller;

import com.zemoso.diagnostics.labservice.dto.LabDto;
import com.zemoso.diagnostics.labservice.entity.Lab;
import com.zemoso.diagnostics.labservice.exception.NoRecordFound;
import com.zemoso.diagnostics.labservice.mapper.MapperService;
import com.zemoso.diagnostics.labservice.service.LabServices;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin("*")
@RestController
@RequestMapping("/labs")
public class LabController {

    @Autowired
    private LabServices labServices;

    @Autowired
    private MapperService mapperService;

    @GetMapping
    public List<LabDto> getAllLabs(){
        log.info("Inside getAllLabs method of LabController");
        return mapperService.cardEntityToDto(labServices.findAll());
    }

    @GetMapping("/{id}")
    public LabDto getLabById(@PathVariable("id") Integer labId){
        log.info("Inside getLabById method of LabController");
        if(labServices.findById(labId).isEmpty())
            throw new NoRecordFound("Lab with id-"+ labId+" is not Found");
        return mapperService.convertToDTO(labServices.findById(labId).get());
    }
}
