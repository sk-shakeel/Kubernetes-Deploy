package com.zemoso.diagnostics.patientservice.mapper;


import com.zemoso.diagnostics.patientservice.dto.PatientDto;
import com.zemoso.diagnostics.patientservice.entity.Patient;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Slf4j
@Service()
public class MapperService {

    private ModelMapper modelMapper = new ModelMapper();
    public Patient convertToEntity(PatientDto patientDTO){
        try{
            return modelMapper.map(patientDTO, Patient.class);
        }
        catch (NullPointerException ne){
            throw new NullPointerException("null pointer in job convertToEntity");
        }
    }

    public PatientDto convertToDTO(Patient patient){
        try{
            return modelMapper.map(patient, PatientDto.class);
        }catch (NullPointerException e){
            throw new NullPointerException("Exception in convert to DTO " + e);
        }
    }

    public List<PatientDto> listEntityToDto(List<Patient> list){
        return list.stream().map(x -> convertToDTO(x)).collect(Collectors.toList());
    }

    public List<Patient> listDtoToEntity(List<PatientDto> dtoList){
        return dtoList.stream().map(x -> convertToEntity(x)).collect(Collectors.toList());
    }
}

