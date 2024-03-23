package com.zemoso.diagnostics.labservice.dto;

import lombok.*;

import javax.persistence.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class LabDto {
    private int labId;
    private  String labName;
    private float rating;
    private int availableSlots;
}
