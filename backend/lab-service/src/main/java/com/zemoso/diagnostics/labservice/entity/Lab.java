package com.zemoso.diagnostics.labservice.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "lab")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Lab {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(value = AccessLevel.NONE)
    @Column(name = "id")
    private int labId;

    @Column(name = "name")
    private  String labName;

    @Column(name = "rating")
    private float rating;

    @Column(name = "available_slots")
    private int availableSlots;
}
