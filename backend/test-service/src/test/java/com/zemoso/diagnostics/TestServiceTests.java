package com.zemoso.diagnostics;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.diagnostics.dao.TestRepository;
import com.zemoso.diagnostics.entity.Test;
import com.zemoso.diagnostics.mapper.MapperService;
import com.zemoso.diagnostics.service.TestService;
import com.zemoso.diagnostics.service.TestServiceImpl;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


@WebMvcTest({TestService.class})
@ContextConfiguration(classes = DiagnosticsApplication.class)
@RunWith(MockitoJUnitRunner.class)
class TestServiceTests {

    @Autowired
    private WebApplicationContext context;
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper mapper;
    @MockBean
    private MapperService mapperService;
    @Autowired
    private TestService testService;
    @Autowired
    private TestServiceImpl testServiceImpl;
    @MockBean
    private TestRepository testRepository;

    private Test test1 = new Test();
    private Test test2 = new Test();

    Integer firstId = 1;
    Integer secondId = 2;

    void setup(){
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();

        test1 = test1.builder().id(firstId).name("Polio Drops").time("24hrs").build();
        test2 = test2.builder().id(secondId).name("Blood Test").time("24hrs").build();
    }

    @org.junit.jupiter.api.Test
     void findTestById() {
        try {
            Test test1 = new Test(1, "Covid RTPCR", "24hrs");
            when(testRepository.findAll()).thenReturn(
                    Stream.of(test1).collect(Collectors.toList()));
            assertEquals(1, testService.findAll().size());
            assertEquals(test1, testService.findById(1));
            assertEquals(1, test1.getId());
            assertEquals("Covid RTPCR", test1.getName());
            assertEquals("24hrs", test1.getTime());

        }
        catch(Exception e) {

        }
    }

    @org.junit.jupiter.api.Test
    void findAllTest() {
        List<Test> testsList = new ArrayList<>();
        Test test1 = new Test(1, "Covid RTPCR", "24 Hours");
        Test test2 = new Test(2, "Full Body", "24 Hours");
        testsList.add(test1);
        testsList.add(test2);
        when(testRepository.findAll()).thenReturn(testsList);
        assertEquals(2, testService.findAll().size());
    }

}
