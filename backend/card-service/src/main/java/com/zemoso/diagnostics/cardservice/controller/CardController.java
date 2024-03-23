package com.zemoso.diagnostics.cardservice.controller;

import com.zemoso.diagnostics.cardservice.dto.CardDto;
import com.zemoso.diagnostics.cardservice.entity.Card;
import com.zemoso.diagnostics.cardservice.exception.NoRecordFound;
import com.zemoso.diagnostics.cardservice.mapper.MapperService;
import com.zemoso.diagnostics.cardservice.service.CardService;
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
@RequestMapping("/cards")
public class CardController {

    @Autowired
    private CardService cardService;

    @Autowired
    private MapperService mapperService;

    @GetMapping
    public List<CardDto> getAllCard(){
        log.info("Inside getAllCard method of CardController");
        return mapperService.cardEntityToDto(cardService.findAll());
    }

    @PostMapping
    public CardDto saveCard(@RequestBody CardDto cardDto){
        log.info("Inside saveCard method of CardController");
        return mapperService.convertToDTO(cardService.saveCard(mapperService.convertToEntity(cardDto)));
    }

    @GetMapping("/{id}")
    public CardDto getCardById(@PathVariable("id") int cardId){
        log.info("Inside getCardById method of CardController");
        if(cardService.findById(cardId) == null)
            throw new NoRecordFound("Card with id-"+cardId+" is not Found");
        return mapperService.convertToDTO(cardService.findById(cardId));
    }

    @DeleteMapping("/{id}")
    public CardDto deleteCardById(@PathVariable("id") int cardId){
        log.info("Inside deleteCardById method of CardController");
        return mapperService.convertToDTO(cardService.deleteCardById(cardId));
    }

    @PatchMapping("/{id}")
    public CardDto updateCardById(@PathVariable("id") int cardId, @RequestBody Map<Object,Object> fields){
        log.info("Inside updateCardById method of CardController");
        Card card = cardService.findById(cardId);
        if(card == null)
            throw new NoRecordFound("Card with id-"+cardId+" is not Found");
        fields.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(Card.class,(String) key);
            ReflectionUtils.makeAccessible(field);
            ReflectionUtils.setField(field,card,value);
        });
        return mapperService.convertToDTO(cardService.saveCard(card));
    }

    @GetMapping("/user/{id}")
    public List<CardDto> getCardsByUserId(@PathVariable("id") int cardId){
        return mapperService.cardEntityToDto(cardService.findAllCardsByUserId(cardId));
    }
}
