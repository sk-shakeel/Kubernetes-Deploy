package com.zemoso.diagnostics.mapper;

import com.zemoso.diagnostics.dto.TestDto;
import com.zemoso.diagnostics.entity.Test;
import org.springframework.stereotype.Component;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class MapperService {
    private ModelMapper modelMapper = new ModelMapper();

    public Test convertToEntity(TestDto testDto){
        try{
            return modelMapper.map(testDto, Test.class);
        }catch (NullPointerException e){
            throw new NullPointerException("Exception in convertToEntity " + e);
        }
    }

    public TestDto convertToDTO(Test test){
        try{
            return modelMapper.map(test, TestDto.class);
        }catch (NullPointerException e){
            throw new NullPointerException("Exception in convert to DTO " + e);
        }
    }

    public List<TestDto> testEntityToDto(List<Test> testList){
        return testList.stream().map(x -> convertToDTO(x)).collect(Collectors.toList());
    }

    public List<Test> testDtoToEntity(List<TestDto> testDtoList){
        return testDtoList.stream().map(x -> convertToEntity(x)).collect(Collectors.toList());
    }
}
