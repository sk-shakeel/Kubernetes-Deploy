package com.zemoso.diagnostics.patientservice.dao;

import com.zemoso.diagnostics.patientservice.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient,Integer> {
    Patient findById (int patientId);
}
