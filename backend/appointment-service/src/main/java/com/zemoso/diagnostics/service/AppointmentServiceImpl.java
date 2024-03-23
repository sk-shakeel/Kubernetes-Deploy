package com.zemoso.diagnostics.service;

import com.zemoso.diagnostics.dao.AppointmentRepository;
import com.zemoso.diagnostics.entity.Appointment;
import com.zemoso.diagnostics.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentServiceImpl implements AppointmentService{

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Override
    public Appointment findById(int id) {
        return appointmentRepository.findById(id).orElseThrow(() -> new NotFoundException("Appointment with id - " +id + " not found"));
    }

    @Override
    public Appointment save(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @Override
    public String deleteById(int id) {
        Optional<Appointment> app = appointmentRepository.findById(id);
        if(app.isPresent()){
            appointmentRepository.deleteById(id);
            return "Appointment deleted Successfully";
        }else{
            throw new NotFoundException("error deleting the appointment with id " + id);
        }
    }

    @Override
    public Appointment updateById(int id, Appointment appointment) {
        try{
            Appointment theappointment = findById(id);
            theappointment.setId(appointment.getId());
            theappointment.setDate(appointment.getDate());
            theappointment.setMonth(appointment.getMonth());
            theappointment.setDay(appointment.getDay());
            theappointment.setTime(appointment.getTime());
            theappointment.setPatientId(appointment.patientId);
            theappointment.setAddressId(appointment.getAddressId());
            theappointment.setTestLabId(appointment.getTestLabId());
            theappointment.setUserId(appointment.getUserId());

           return appointmentRepository.save(theappointment);
        }catch(NotFoundException e){
                throw new NotFoundException("appointment id not found " + id);
        }
    }

    @Override
    public List<Appointment> findAllByUserId(int id) {
        return appointmentRepository.findAllByUserId(id);

    }
}
