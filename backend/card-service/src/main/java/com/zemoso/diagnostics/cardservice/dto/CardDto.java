package com.zemoso.diagnostics.cardservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CardDto {
    private int cardId;
    private String number;
    private String cardHolder;
    private String expiryDate;
    private String cvv;
    private int userId;
}
