package com.zemoso.diagnostics.controller;

import com.zemoso.diagnostics.vo.ResponseTemplateVO;
import com.zemoso.diagnostics.exception.NoRecordFound;
import com.zemoso.diagnostics.mapper.MapperService;
import com.zemoso.diagnostics.service.TestlabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/testlabs")
public class TestLabController {

    @Autowired
    private TestlabService testlabService;

    @Autowired
    private MapperService mapperService;

    @GetMapping
    public List<ResponseTemplateVO> getAlllabs() {
        return   testlabService.findAll();
    }

    @GetMapping("/{labId}")
    public List<ResponseTemplateVO> getLabById(@PathVariable("labId") int labId){
        return testlabService.findLabById(labId);
    }

    @GetMapping("/{labId}/{testId}")
    public List<ResponseTemplateVO> getLabAndTestById(@PathVariable("labId") int labId, @PathVariable("testId") int testId){
        if(testlabService.findById(labId,testId).isEmpty())
            throw new NoRecordFound("Test id - "+labId+"is not available in lab Id - "+labId);
        return testlabService.findById(labId,testId);
    }

}
