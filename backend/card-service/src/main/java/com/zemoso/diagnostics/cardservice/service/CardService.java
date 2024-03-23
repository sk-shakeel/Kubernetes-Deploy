package com.zemoso.diagnostics.cardservice.service;

import com.zemoso.diagnostics.cardservice.entity.Card;

import java.util.List;

public interface CardService {
    List<Card> findAll();

    Card findById(int cardId);

    Card saveCard(Card convertToEntity);

    Card deleteCardById(int cardId);

    List<Card> findAllCardsByUserId(int cardId);
}
