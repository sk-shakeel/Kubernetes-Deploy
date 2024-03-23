package com.zemoso.diagnostics.userservice.mapper;

import com.zemoso.diagnostics.userservice.dto.UserDTO;
import com.zemoso.diagnostics.userservice.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service()
public class MapperService {

    private ModelMapper modelMapper = new ModelMapper();
    public User convertToEntity(UserDTO jobDTO){
        try{
            return modelMapper.map(jobDTO, User.class);
        }
        catch (NullPointerException ne){
            throw new NullPointerException("null pointer in job convertToEntity");
        }
    }

    public UserDTO convertToEntity(User user){
        try{
            return modelMapper.map(user, UserDTO.class);
        }
        catch (NullPointerException ne){
            throw new NullPointerException("null pointer in job convertToEntity");
        }
    }

    public List<UserDTO> convertToListDto(List<User> userList){
        try{
            return userList.stream().map(x -> convertToDTO(x)).collect(Collectors.toList());
        }
        catch (NullPointerException ne){
            throw new NullPointerException("null pointer in job convertToEntity");
        }
    }

    public List<UserDTO> convertToDtoById(Optional<User> userid){
        try{
            return userid.stream().map(x -> convertToDTO(x)).collect(Collectors.toList());
        }
        catch (NullPointerException ne){
            throw new NullPointerException("null pointer in job convertToEntity");
        }
    }

    private UserDTO convertToDTO(User x) {
        try{
            return modelMapper.map(x,UserDTO.class);
        }
        catch (NullPointerException e){
            throw new NullPointerException("Exception in convert to DTO " + e);
        }
    }


}
