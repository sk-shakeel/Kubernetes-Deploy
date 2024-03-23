package com.zemoso.diagnostics.patientservice.service;

import com.zemoso.diagnostics.patientservice.entity.Patient;

import java.util.List;

public interface PatientService {

    List<Patient> findAll();

    Patient findByPatientId(int patientId);

    Patient deletePatientById(int patientId);

    Patient savePatient(Patient patient);
}
