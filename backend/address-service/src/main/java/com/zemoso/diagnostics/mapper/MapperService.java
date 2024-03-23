package com.zemoso.diagnostics.mapper;

import com.zemoso.diagnostics.dto.AddressDTO;
import com.zemoso.diagnostics.entity.Address;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service()
public class MapperService {

    private ModelMapper modelMapper = new ModelMapper();
    public Address convertToEntity(AddressDTO jobDTO){
        try{
            return modelMapper.map(jobDTO, Address.class);
        }
        catch (NullPointerException ne){
            throw new NullPointerException("null pointer in address convertToEntity");
        }
    }

    public AddressDTO convertToDto(Address address) {
        try{
            return modelMapper.map(address, AddressDTO.class);
        }
        catch (NullPointerException ne){
            throw new NullPointerException("null pointer in address convertToDTO");
        }
    }
}
