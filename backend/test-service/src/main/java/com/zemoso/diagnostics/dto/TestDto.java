package com.zemoso.diagnostics.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public @Data class TestDto {
    private int id;
    private String name;
    private String time;
}
