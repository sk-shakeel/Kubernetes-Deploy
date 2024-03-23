package com.zemoso.diagnostics.mapper;

import com.zemoso.diagnostics.dto.AppointmentDto;
import com.zemoso.diagnostics.entity.Appointment;
import org.springframework.stereotype.Component;
import org.modelmapper.ModelMapper;

@Component
public class MapperService {

    private ModelMapper modelMapper = new ModelMapper();

    public Appointment convertToEntity(AppointmentDto appointmentDto){
        try{
            return modelMapper.map(appointmentDto, Appointment.class);
        }catch (NullPointerException e){
            throw new NullPointerException("Exception in AppointmentDto convert to entity " + e);
        }
    }

    public AppointmentDto convertToDTO(Appointment appointment){
        try{
            return modelMapper.map(appointment, AppointmentDto.class);
        }catch (NullPointerException e){
            throw new NullPointerException("Exception in Appointment convert to Dto " + e);
        }
    }

}
