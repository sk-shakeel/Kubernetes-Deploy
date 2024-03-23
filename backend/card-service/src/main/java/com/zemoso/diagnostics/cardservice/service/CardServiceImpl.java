package com.zemoso.diagnostics.cardservice.service;

import com.zemoso.diagnostics.cardservice.dao.CardRepository;
import com.zemoso.diagnostics.cardservice.entity.Card;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class CardServiceImpl implements CardService{

    @Autowired
    private CardRepository cardRepository;
    @Override
    public List<Card> findAll() {
        log.info("Inside getAllCard method of CardService");
        return cardRepository.findAll();
    }

    @Override
    public Card findById(int cardId) {
        log.info("Inside findById method of CardService");
        return cardRepository.findById(cardId);
    }

    @Override
    public Card saveCard(Card card) {
        log.info("Inside saveCard method of CardService");
        return cardRepository.save(card);
    }

    @Override
    public Card deleteCardById(int cardId) {
        log.info("Inside deleteCardById method of CardService");
        Card card = cardRepository.findById(cardId);
        cardRepository.deleteById(cardId);
        return card;
    }

    @Override
    public List<Card> findAllCardsByUserId(int cardId) {
        log.info("Inside findAllCardsByUserId method of CardService");
        return cardRepository.findAllByUserId(cardId);
    }
}
