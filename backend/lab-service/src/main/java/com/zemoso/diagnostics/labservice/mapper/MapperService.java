package com.zemoso.diagnostics.labservice.mapper;

import com.zemoso.diagnostics.labservice.entity.Lab;
import com.zemoso.diagnostics.labservice.dto.LabDto;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Slf4j
@Service()
public class MapperService {

    private ModelMapper modelMapper = new ModelMapper();
    public Lab convertToEntity(LabDto labDto){
        try{
            return modelMapper.map(labDto, Lab.class);
        }
        catch (IllegalArgumentException ne){
            throw new IllegalArgumentException("null pointer in job convertToEntity");
        }
    }

    public LabDto convertToDTO(Lab lab){
        try{
            return modelMapper.map(lab, LabDto.class);
        }catch (IllegalArgumentException e){
            throw new IllegalArgumentException("Exception in convert to DTO " + e);
        }
    }

    public List<LabDto> cardEntityToDto(List<Lab> list){
        return list.stream().map(x -> convertToDTO(x)).collect(Collectors.toList());
    }

    public List<Lab> cardDtoToEntity(List<LabDto> dtoList){
        return dtoList.stream().map(x -> convertToEntity(x)).collect(Collectors.toList());
    }
}
