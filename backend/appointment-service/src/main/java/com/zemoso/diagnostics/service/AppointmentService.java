package com.zemoso.diagnostics.service;

import com.zemoso.diagnostics.entity.Appointment;

import java.util.List;

public interface AppointmentService {
    Appointment findById(int id);

    Appointment save(Appointment appointment);

    String deleteById(int id);

    Appointment updateById(int id, Appointment appointment);

    List<Appointment> findAllByUserId(int id);
}
