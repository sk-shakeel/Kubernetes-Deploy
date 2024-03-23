package com.zemoso.diagnostics.patientservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatientDto {
    private int patientId;
    private String relation;
    private String name;
    private int age;
    private String gender;
    private int userId;


    public PatientDto(String relation, String name, int age, String gender, int userId) {
        this.relation = relation;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.userId = userId;
    }
}
