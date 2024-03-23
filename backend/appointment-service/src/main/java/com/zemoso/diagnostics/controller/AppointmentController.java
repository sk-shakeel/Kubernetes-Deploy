package com.zemoso.diagnostics.controller;

import com.zemoso.diagnostics.dto.AppointmentDto;
import com.zemoso.diagnostics.entity.Appointment;
import com.zemoso.diagnostics.exception.NotFoundException;
import com.zemoso.diagnostics.mapper.MapperService;
import com.zemoso.diagnostics.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    private AppointmentService appointmentService;

    @Autowired
    private MapperService mapperService;

    @Autowired
    private AppointmentController(AppointmentService theAppointmentService){
        appointmentService = theAppointmentService;
    }

    @GetMapping("/user/{userId}")
    public List<Appointment> findAll(@PathVariable(name="userId") int id){
        return appointmentService.findAllByUserId(id);
    }

    @GetMapping("/{id}")
    public AppointmentDto findById(@PathVariable(name="id") int id){
        Appointment appointment = appointmentService.findById(id);
        return mapperService.convertToDTO(appointment);
    }

    @PutMapping("/{id}")
    public Appointment updateAppointment(@PathVariable(name = "id") int id, @RequestBody AppointmentDto appointmentDto ) throws NotFoundException{
        return appointmentService.updateById(id, mapperService.convertToEntity(appointmentDto));
    }

    @PostMapping
    public Appointment addAppointment(@RequestBody AppointmentDto appointmentDto){
        return appointmentService.save(mapperService.convertToEntity(appointmentDto));
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(name = "id") int id) throws NotFoundException{
        return appointmentService.deleteById(id);
    }
}
