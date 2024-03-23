package com.zemoso.diagnostics.cardservice.mapper;

import com.zemoso.diagnostics.cardservice.dto.CardDto;
import com.zemoso.diagnostics.cardservice.entity.Card;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.List;

import java.util.stream.Collectors;


@Slf4j
@Service()
public class MapperService {

    private ModelMapper modelMapper = new ModelMapper();
    public Card convertToEntity(CardDto cardDto){
        try{
            return modelMapper.map(cardDto, Card.class);
        }
        catch (NullPointerException ne){
            throw new NullPointerException("null pointer in job convertToEntity");
        }
    }

    public CardDto convertToDTO(Card test){
        try{
            return modelMapper.map(test, CardDto.class);
        }catch (NullPointerException e){
            throw new NullPointerException("Exception in convert to DTO " + e);
        }
    }

    public List<CardDto> cardEntityToDto(List<Card> cardList){
        return cardList.stream().map(x -> convertToDTO(x)).collect(Collectors.toList());
    }

    public List<Card> cardDtoToEntity(List<CardDto> cardDtoList){
        return cardDtoList.stream().map(x -> convertToEntity(x)).collect(Collectors.toList());
    }
}
