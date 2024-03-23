package com.zemoso.diagnostics.patientservice.service;

import com.zemoso.diagnostics.patientservice.dao.PatientRepository;
import com.zemoso.diagnostics.patientservice.entity.Patient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class PatientServiceImpl implements PatientService{

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public List<Patient> findAll() {
        log.info("Inside findAll method of PatientServiceImpl");
        return patientRepository.findAll();
    }

    @Override
    public Patient findByPatientId(int patientId) {
        log.info("Inside findByPatientId method of PatientServiceImpl");
        return patientRepository.findById(patientId);
    }

    @Override
    public Patient deletePatientById(int patientId) {
        log.info("Inside deletePatientById method of PatientServiceImpl");
        Patient patient = patientRepository.findById(patientId);
        patientRepository.deleteById(patientId);
        return patient;
    }

    @Override
    public Patient savePatient(Patient patient) {
        System.out.println("in Service"+patient);
        log.info("Inside savePatient method of PatientServiceImpl");
        return patientRepository.save(patient);
    }
}
