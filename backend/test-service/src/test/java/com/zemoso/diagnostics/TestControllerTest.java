package com.zemoso.diagnostics;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.diagnostics.controller.TestController;
import com.zemoso.diagnostics.dao.TestRepository;
import com.zemoso.diagnostics.dto.TestDto;
import com.zemoso.diagnostics.mapper.MapperService;
import com.zemoso.diagnostics.service.TestService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(TestController.class)
class TestControllerTest {

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper mapper;
    @MockBean
    private MapperService mapperService;
    @MockBean
    private TestService testService;
    @Autowired
    private TestController testController;
    @MockBean
    private TestRepository testRepository;

    private TestDto test = new TestDto();
    private TestDto test1 = new TestDto();

    @BeforeEach
    void setup(){
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();

        test = test.builder().id(10).name("Polio Drops").time("24hrs").build();
        test1 = test1.builder().id(11).name("Blood Test").time("24hrs").build();
    }

    @DisplayName("Test for Getting all the tests")
    @org.junit.jupiter.api.Test
     void findAll() throws Exception{
        List<TestDto> tests = new ArrayList<>(Arrays.asList(test, test1));
        Mockito.when(testController.findAll()).thenReturn(tests);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("http://service.bootcamp61.ga:8080/tests")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", Matchers.is("Polio Drops")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].name", Matchers.is("Blood Test")));
    }

    @DisplayName("Test for Getting the tests by id")
    @org.junit.jupiter.api.Test
     void findById() throws Exception{
        Mockito.when(testController.findById(10)).thenReturn(test);

        mockMvc.perform(MockMvcRequestBuilders.get("http://service.bootcamp61.ga:8080/tests/10")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Matchers.is(10)));
    }
}
