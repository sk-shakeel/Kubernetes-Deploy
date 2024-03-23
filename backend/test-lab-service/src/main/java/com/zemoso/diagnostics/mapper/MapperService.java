package com.zemoso.diagnostics.mapper;


import com.zemoso.diagnostics.dto.TestLabDTO;
import com.zemoso.diagnostics.entity.TestLab;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


@Slf4j
@Service()
public class MapperService {

    private ModelMapper modelMapper = new ModelMapper();
    public TestLab convertToEntity(TestLabDTO testLabDTO){
        try{
            return modelMapper.map(testLabDTO, TestLab.class);
        }
        catch (NullPointerException ne){
            throw new NullPointerException("null pointer in job convertToEntity");
        }
    }
}

