package com.zemoso.diagnostics.controller;

import com.zemoso.diagnostics.dto.TestDto;
import com.zemoso.diagnostics.entity.Test;
import com.zemoso.diagnostics.mapper.MapperService;
import com.zemoso.diagnostics.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/tests")
public class TestController {
    private TestService testService;

    @Autowired
    private MapperService mapperService;

    @Autowired
    public TestController(TestService theTestService) {
        testService = theTestService;
    }

    @GetMapping
    public List<TestDto> findAll() {
        List<Test> testsList = testService.findAll();
        return mapperService.testEntityToDto(testsList);
    }

    @GetMapping("/{id}")
    public TestDto findById(@PathVariable(name = "id") int id){
        Test test = testService.findById(id);
        return mapperService.convertToDTO(test);
    }
}
