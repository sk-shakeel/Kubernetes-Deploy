package com.zemoso.diagnostics.entity;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "test_lab")
public class TestLab {

    @Id
    @Setter(value = AccessLevel.NONE)
    @Column(name = "id")
    private int id;

    @Column(name = "cost")
    private int cost;

    @Column(name = "test_id")
    private int testId;

    @Column(name = "lab_id")
    private int labId;
}
