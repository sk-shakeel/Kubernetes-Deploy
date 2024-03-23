package com.zemoso.diagnostics.cardservice.dao;

import com.zemoso.diagnostics.cardservice.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardRepository extends JpaRepository<Card,Integer> {

    Card findById(int cardId);

    List<Card> findAllByUserId(int cardId);
}
