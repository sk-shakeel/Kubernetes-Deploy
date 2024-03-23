package com.zemoso.diagnostics.patientservice.controller;

import com.zemoso.diagnostics.patientservice.dto.PatientDto;
import com.zemoso.diagnostics.patientservice.entity.Patient;
import com.zemoso.diagnostics.patientservice.exception.NoRecordFound;
import com.zemoso.diagnostics.patientservice.mapper.MapperService;
import com.zemoso.diagnostics.patientservice.service.PatientService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Slf4j
@CrossOrigin("*")
@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @Autowired
    private MapperService mapperService;

    @GetMapping
    public List<PatientDto> findAllPatients(){
        log.info("Inside findAllPatients method of PatientController");
        return mapperService.listEntityToDto(patientService.findAll());
    }

    @PostMapping
    public PatientDto savePatient(@RequestBody PatientDto patientDto){
        System.out.println("in controller"+patientDto);
        log.info("Inside savePatient method of PatientController");
        return mapperService.convertToDTO(patientService.savePatient(mapperService.convertToEntity(patientDto)));
    }

    @GetMapping("/{id}")
    public PatientDto findPatientById(@PathVariable("id") int patientId){
        log.info("Inside findPatientById method of PatientController");
        if(patientService.findByPatientId(patientId) == null)
            throw new NoRecordFound("Patient with id-"+patientId+" is not Found");
        return mapperService.convertToDTO(patientService.findByPatientId(patientId));
    }

    @PatchMapping("/{id}")
    public PatientDto updateByPatientId(@PathVariable("id") int patientId,@RequestBody Map<Object, Object> fields){
        log.info("Inside updateByPatientId method of PatientController");
        Patient patient = patientService.findByPatientId(patientId);
        if(patient == null)
            throw new NoRecordFound("Patient with id-"+patientId+" is not Found");
        fields.forEach((key , value) -> {
            Field field = ReflectionUtils.findField(Patient.class, (String) key);
            ReflectionUtils.makeAccessible(field);
            ReflectionUtils.setField(field,patient,value);
        } );
        return mapperService.convertToDTO(patientService.savePatient(patient));
    }

    @DeleteMapping("/{id}")
    public PatientDto deleteByPatientId(@PathVariable("id") int patientId){
        log.info("Inside deleteByPatientId method of PatientController");
        return mapperService.convertToDTO(patientService.deletePatientById(patientId));
    }
}
