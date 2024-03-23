package com.zemoso.diagnostics.userservice.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.diagnostics.userservice.DiagnosticsApplication;
import com.zemoso.diagnostics.userservice.controller.UserController;
import com.zemoso.diagnostics.userservice.dao.UserRepository;
import com.zemoso.diagnostics.userservice.entity.User;
import com.zemoso.diagnostics.userservice.exception.UserNotFoundException;
import com.zemoso.diagnostics.userservice.mapper.MapperService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
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

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(DiagnosticsApplication.class)
@RunWith(SpringRunner.class)
@ContextConfiguration(classes= UserService.class)
@ComponentScan("com.zemoso.diagnostics.userservice")
class UserServiceTests {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    UserService userService;

    @MockBean
    UserRepository userRepository;

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private MapperService mapperService;

    @Autowired
    UserController userController;

    @Autowired
    private WebApplicationContext wac;

    private User user1;
    private User user2;

    @BeforeEach
    void setup(){
        user1=new User(1,"ui/ux designer","myntra@");
        user2=new User(2,"software tester","ZEMOSO@");
    }

    @DisplayName("All Users")
    @Test
    void allUserUsersTest() throws Exception {
        List<User> Users = new ArrayList<>(Arrays.asList(user1, user2));
        when(userRepository.findAll()).thenReturn((Users));

        mockMvc.perform(get("/user")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)));
    }

    @DisplayName("User by id")
    @Test
    void UserByIdTest() throws Exception {
        List<User> Users = new ArrayList<>(Arrays.asList(user1));
        when(userRepository.findById(1)).thenReturn(Optional.ofNullable(user1));

        mockMvc.perform(get("/user/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @DisplayName(" Get job By Id Exception")
    @Test
    void JobByIdTestException() throws Exception {
        Mockito.when(userRepository.findById(3)).thenThrow(new UserNotFoundException("User with id - 3 was not found"));

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/user/3")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(404))
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()));

    }

    @DisplayName("User by name")
    @Test
    void UserByNameTest() throws Exception {
        List<User> Users = new ArrayList<>(Arrays.asList(user1));
        when(userRepository.findByUsername("uxdesigner")).thenReturn((user1));

        mockMvc.perform(get("/user/username/uxdesigner")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @DisplayName(" Get user By name Exception")
    @Test
    void UserBYnameTestException() throws Exception {
        Mockito.when(userRepository.findByUsername(user1.getUsername())).thenReturn((null));

        mockMvc.perform(get("/user/username/uxdesigner")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @DisplayName("Insert User User")
    @Test
    void createUserTest() throws Exception {
        user1=new User(1,"ui/ux designer","mantra@");
        User user = new User(1,"ui/ux designer","mantra@");

        Mockito.when(userRepository.save(user)).thenReturn(user1);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("http://service.bootcamp61.ga:8080/user")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(user));

        ResultActions postUserUserResult =  mockMvc.perform(mockRequest);
        MvcResult testResult = postUserUserResult
                .andExpect(status().isOk())
                .andReturn();
    }
}

