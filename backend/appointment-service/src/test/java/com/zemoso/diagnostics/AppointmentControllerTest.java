package com.zemoso.diagnostics;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.diagnostics.controller.AppointmentController;
import com.zemoso.diagnostics.dao.AppointmentRepository;
import com.zemoso.diagnostics.dto.AppointmentDto;
import com.zemoso.diagnostics.entity.Appointment;
import com.zemoso.diagnostics.mapper.MapperService;
import com.zemoso.diagnostics.service.AppointmentService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(AppointmentController.class)
class AppointmentControllerTest {

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper mapper;
    @MockBean
    private MapperService mapperService;
    @MockBean
    private AppointmentService appointmentService;
    @Autowired
    private AppointmentController appointmentController;
    @MockBean
    private AppointmentRepository appointmentRepository;

    private AppointmentDto appointmentDto = new AppointmentDto();

    @BeforeEach
    void setup(){
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();

        appointmentDto = appointmentDto.builder().id(10)
                .month("June")
                .date("20")
                .time("7.00am-8.00am")
                .day("Friday")
                .userId(1)
                .testLabId(1)
                .patientId(1)
                .addressId(1)
                .build();
   }

    @DisplayName("Test for Getting the appointments by id")
    @org.junit.jupiter.api.Test
    void findById() throws Exception{
        Mockito.when(appointmentController.findById(10)).thenReturn(appointmentDto);

        mockMvc.perform(MockMvcRequestBuilders.get("http://service.bootcamp61.ga:8080/appointments/10")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.notNullValue()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Matchers.is(10)));
    }

    @DisplayName("Test to update the appointments by id")
    @org.junit.jupiter.api.Test
    void updateById() throws Exception{
        Mockito.when(appointmentController.findById(10)).thenReturn(appointmentDto);
        AppointmentDto appointmentDto1 = new AppointmentDto(10, "June", "23", "7.00am - 8.00am", "Friday", 1,1,1,1);
        Appointment appointment = mapperService.convertToEntity(appointmentDto1);
        Mockito.when(appointmentController.updateAppointment(10, appointmentDto1)).thenReturn(appointment);

        assertEquals("June", appointmentController.findById(10).getMonth());

    }

    @DisplayName("Test to add the appointments")
    @org.junit.jupiter.api.Test
    void addAppointment() throws Exception{
        Appointment appointment = new Appointment(10, "June", "20", "7.00am - 8.00am", "Friday", 1,1,1,1);
        Mockito.when(appointmentController.addAppointment(appointmentDto)).thenReturn(appointment);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("http://service.bootcamp61.ga:8080/appointments")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(appointment));

        ResultActions postUserUserResult =  mockMvc.perform(mockRequest);
        MvcResult testResult = postUserUserResult
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.notNullValue()))
                .andReturn();
    }

    @DisplayName("Test for deleting the appointments by id")
    @org.junit.jupiter.api.Test
    void deleteAppointment() throws Exception{
        Appointment appointment = new Appointment(10, "June", "20", "7.00am - 8.00am", "Friday", 1,1,1,1);
        Mockito.when(appointmentRepository.findById(10)).thenReturn(Optional.ofNullable((appointment)));
        this.mockMvc.perform(MockMvcRequestBuilders
                        .delete("http://service.bootcamp61.ga:8080/appointments/10")
                        .contentType(MediaType.APPLICATION_JSON))
                        .andExpect(status().isOk());
    }

}
