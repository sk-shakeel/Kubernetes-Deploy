package com.zemoso.diagnostics;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.diagnostics.dao.AppointmentRepository;
import com.zemoso.diagnostics.dto.AppointmentDto;
import com.zemoso.diagnostics.entity.Appointment;
import com.zemoso.diagnostics.exception.NotFoundException;
import com.zemoso.diagnostics.mapper.MapperService;
import com.zemoso.diagnostics.service.AppointmentService;
import com.zemoso.diagnostics.service.AppointmentServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest({AppointmentService.class})
@ContextConfiguration(classes = DiagnosticsApplication.class)
@RunWith(MockitoJUnitRunner.class)
@ComponentScan("com.zemoso.diagnostics")
class AppointmentServiceTest {

    @Autowired
    private WebApplicationContext context;
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper mapper;
    @MockBean
    private MapperService mapperService;
    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private AppointmentServiceImpl appointmentServiceImpl;
    @MockBean
    private AppointmentRepository appointmentRepository;

    private Appointment appointment1 = new Appointment();
    private Appointment appointment2 = new Appointment();

    Integer firstId = 1;
    Integer secondId = 2;

    @BeforeEach
    void setup(){
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();

        appointment1 = appointment1.builder().id(firstId)
                .month("June")
                .date("20")
                .time("7.00am-8.00am")
                .day("Friday")
                .userId(1)
                .testLabId(1)
                .patientId(1)
                .addressId(1)
                .build();
        appointment2 = appointment2.builder().id(secondId)
                .month("July")
                .date("20")
                .time("7.00am-8.00am")
                .day("Thursday")
                .userId(1)
                .testLabId(1)
                .patientId(1)
                .addressId(1)
                .build();
    }

    @org.junit.jupiter.api.Test
    void findAppointmentById() {
        try {
            Mockito.when(appointmentService.save(appointment1)).thenReturn(appointment1);
            Mockito.when(appointmentService.save(appointment2)).thenReturn(appointment2);
            Mockito.when(appointmentService.findById(firstId)).thenReturn(appointment1);

            assertEquals(appointment1, appointmentService.findById(firstId));
            assertEquals(appointment2, appointmentService.findById(secondId));
        }
        catch(Exception e) {

        }
    }

    @org.junit.jupiter.api.Test
    void findAppointmentByUserId() {
        try {
            Mockito.when(appointmentService.save(appointment1)).thenReturn(appointment1);
            Mockito.when(appointmentService.findById(firstId)).thenReturn(appointment1);

            assertEquals(appointment1, appointmentService.findById(firstId));
        }
        catch(Exception e) {

        }
    }

    @Test
    void updateAppointmentById() {
        Mockito.when(appointmentRepository.save(appointment1)).thenReturn(appointment1);
        Mockito.when(appointmentRepository.findById(appointment1.getId())).thenReturn(Optional.ofNullable(appointment1));
        Appointment appointment3 = new Appointment(1, "April", "23", "7.00am - 8.00am", "Friday", 1,1,1,1);

        appointmentService.updateById(1,appointment3);
        Mockito.when(appointmentRepository.save( appointment3)).thenReturn(appointment3);
        assertEquals(appointment3, appointmentService.findById(1));

        assertThrows(NotFoundException.class, () -> {appointmentService.updateById(11, appointment3);});
    }

    @org.junit.jupiter.api.Test
    void addAppointment() {
        try {
            Appointment appointment = new Appointment(11, "June", "20", "7.00am - 8.00am", "Friday", 1,1,1,1);
            Mockito.when(appointmentService.save(appointment)).thenReturn(appointment);
            assertEquals(appointment, appointmentService.findById(11));
        }
        catch(Exception e) {

        }
    }

    @org.junit.jupiter.api.Test
    void deleteAppointment() {
            Appointment appointment = new Appointment(10, "June", "20", "7.00am - 8.00am", "Friday", 1,1,1,1);
            Mockito.when(appointmentService.save(appointment)).thenReturn(appointment);
            Mockito.when(appointmentService.save(appointment1)).thenReturn(appointment1);

            appointmentRepository.deleteById(appointment1.getId());
            assertThrows(NotFoundException.class, () -> {
                appointmentService.deleteById(92);
            });
    }

    @DisplayName("User by id")
    @Test
    void UserByIdTest() throws Exception {
        Appointment appointment = new Appointment(10, "June", "20", "7.00am - 8.00am", "Friday", 1,1,1,1);
        Appointment appointment1 = new Appointment(10, "June", "20", "7.00am - 8.00am", "Friday", 1,1,1,1);

        List<Appointment> appointments = new ArrayList<>(Arrays.asList(appointment,appointment1));
        when(appointmentRepository.findAllByUserId(1)).thenReturn(appointments);

        mockMvc.perform(get("/appointments/user/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}
