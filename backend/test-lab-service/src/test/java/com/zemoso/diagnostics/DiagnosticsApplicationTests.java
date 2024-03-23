package com.zemoso.diagnostics;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.diagnostics.vo.LabVO;
import com.zemoso.diagnostics.vo.ResponseTemplateVO;
import com.zemoso.diagnostics.vo.TestVO;
import com.zemoso.diagnostics.controller.TestLabController;
import com.zemoso.diagnostics.dao.TestlabRepository;
import com.zemoso.diagnostics.entity.TestLab;
import com.zemoso.diagnostics.mapper.MapperService;
import com.zemoso.diagnostics.service.TestlabService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import java.util.*;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(DiagnosticsApplication.class)
@ContextConfiguration(classes= TestLabController.class)
@ComponentScan("com.zemoso.diagnostics")
@RunWith(SpringRunner.class)
class DiagnosticsApplicationTests {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    TestlabService testlabService;

    @MockBean
    TestlabRepository testlabRepository;

    @MockBean
    RestTemplate restTemplate;


    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private MapperService mapperService;

    @Autowired
    TestLabController testlabController;

    @Autowired
    private WebApplicationContext wac;

    private TestLab testLab1;
    private TestLab testLab2;

    private LabVO labvo;
    private TestVO testVO;
    private ResponseTemplateVO responseTemplateVO;

    @Value("${labservice.url}")
    private String labserviceUrl;

    @Value("${testservice.url}")
    private String testserviceUrl;


    @BeforeEach
    void setup(){
        testLab1=new TestLab(1,1200,1,1);
        testLab2=new TestLab(2,2500,1,1);
        labvo= new LabVO(1,"arifa",4,4);
        testVO= new TestVO(1,"covid","2.00-3.00");
        responseTemplateVO=new ResponseTemplateVO(labvo,testVO);
    }

    @DisplayName("All test with labs")
    @Test
    void getAllTestwithLabs()  throws Exception{
        List<TestLab> testLabs = new ArrayList<>(Arrays.asList(testLab1));
        when(testlabRepository.findAll()).thenReturn(testLabs);
        when(restTemplate.getForObject(labserviceUrl+testLab1.getLabId(),LabVO.class)).thenReturn(labvo);
        when(restTemplate.getForObject(testserviceUrl+testLab1.getTestId(),TestVO.class)).thenReturn(testVO);
        mockMvc.perform(get("/testlabs")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(1)));
    }

    @DisplayName("All labs by id")
    @Test
    void getAllLabsWithId()  throws Exception{
        List<TestLab> testLabs = new ArrayList<>(Arrays.asList(testLab1));
        when(testlabRepository.findAll()).thenReturn(testLabs);
        when(restTemplate.getForObject(labserviceUrl+testLab1.getLabId(),LabVO.class)).thenReturn(labvo);
        when(restTemplate.getForObject(testserviceUrl+testLab1.getTestId(),TestVO.class)).thenReturn(testVO);
        mockMvc.perform(get("/testlabs/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @DisplayName("Get labs with test id ")
    @Test
    void getLabsAndTestWithId()  throws Exception{
        when(testlabRepository.findAll()).thenReturn(Arrays.asList(testLab1));
        when(restTemplate.getForObject(labserviceUrl+testLab1.getLabId(),LabVO.class)).thenReturn(labvo);
        when(restTemplate.getForObject(testserviceUrl+testLab1.getTestId(),TestVO.class)).thenReturn(testVO);
        mockMvc.perform(get("/testlabs/1/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @DisplayName("Get labs with test id Exception")
    @Test
    void getLabsAndTestWithIdException()  throws Exception{
        List<TestLab> testLabs = new ArrayList<>(Arrays.asList(testLab1));
        when(testlabRepository.findAll()).thenReturn(testLabs);
        when(restTemplate.getForObject(labserviceUrl+3,LabVO.class)).thenReturn(null);
        when(restTemplate.getForObject(testserviceUrl+10,TestVO.class)).thenReturn(null);
        mockMvc.perform(get("/testlabs/3/10")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()));

    }
}