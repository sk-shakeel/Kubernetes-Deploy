package com.zemoso.diagnostics.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TestLabDTO {
    private int id;
    private int cost;
    private int testId;
    private int labId;
}