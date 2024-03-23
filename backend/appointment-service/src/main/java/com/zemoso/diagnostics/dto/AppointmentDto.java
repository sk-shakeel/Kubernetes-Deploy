package com.zemoso.diagnostics.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@NoArgsConstructor
@AllArgsConstructor
public @Data class AppointmentDto {

    private int id;

    private String month;

    private String date;

    private String time;

    private String day;

    private int userId;

    private int testLabId;

    private int patientId;

    private int addressId;
}
