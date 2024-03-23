package com.zemoso.diagnostics.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.diagnostics.controller.AddressController;
import com.zemoso.diagnostics.DiagnosticsApplication;
import com.zemoso.diagnostics.dao.AddressRepository;
import com.zemoso.diagnostics.entity.Address;
import com.zemoso.diagnostics.exception.AddressNotFoundException;
import com.zemoso.diagnostics.mapper.MapperService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(DiagnosticsApplication.class)
@RunWith(SpringRunner.class)
@ContextConfiguration(classes= AddressService.class)
@ComponentScan("com.zemoso.diagnostics")
class AddressServiceTests {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    AddressService addressService;

    @MockBean
    AddressRepository addressRepository;

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private MapperService mapperService;

    @Autowired
    AddressController addressController;

    @Autowired
    private WebApplicationContext wac;

    private Address Address1;
    private Address Address2;

    @BeforeEach
    void setup(){
        Address1=new Address(1,"ui/ux designer","myntra@","11-22","hyd",1);
        Address2=new Address(2,"software tester","ZEMOSO@","11-21","ong",2);
    }

    @DisplayName("All address")
    @Test
    void allUserTest() throws Exception {
        List<Address> addresses = new ArrayList<>(Arrays.asList(Address1, Address2));
        when(addressRepository.findAll()).thenReturn((addresses));

        mockMvc.perform(get("/address")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)));
    }

    @DisplayName("address by id")
    @Test
    void UserByIdTest() throws Exception {
        when(addressRepository.findById(1)).thenReturn(Optional.ofNullable(Address1));
        mockMvc.perform(get("/address/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }



    @DisplayName(" Get job By Id Exception")
    @Test
    void JobByIdTestException() throws Exception {
        when(addressRepository.findById(3)).thenThrow(new AddressNotFoundException("Address with id - 3 was not found"));

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/address/3")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(404))
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()));

    }


    @DisplayName("Insert User User")
    @Test
    void createUserTest() throws Exception {
        Address1=new Address(1,"ui/ux designer","mantra@","11-22","hyd",1);
        Address address = new Address(1,"ui/ux designer","mantra@","11-22","hyd",1);

        when(addressRepository.save(address)).thenReturn(Address1);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("http://service.bootcamp61.ga:8080/address")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(address));

        ResultActions postUserUserResult =  mockMvc.perform(mockRequest);
        MvcResult testResult = postUserUserResult
                .andExpect(status().isOk())
                .andReturn();
    }
}