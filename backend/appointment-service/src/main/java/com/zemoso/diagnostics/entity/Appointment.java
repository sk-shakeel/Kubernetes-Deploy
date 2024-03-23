package com.zemoso.diagnostics.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@Entity
@Table(name="appointment")
@NoArgsConstructor
@AllArgsConstructor
public @Data class Appointment {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name = "month")
    public String month;

    @Column(name = "date")
    public String date;

    @Column(name = "time")
    public String time;

    @Column(name = "day")
    public String day;

    @Column(name = "user_id")
    public int userId;

    @Column(name = "test_lab_id")
    public int testLabId;

    @Column(name = "patient_id")
    public int patientId;

    @Column(name = "address_id")
    public int addressId;

    @Override
    public String toString() {
        return "Appointment{" +
                "id=" + id +
                ", month='" + month + '\'' +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                ", day='" + day + '\'' +
                ", userId=" + userId +
                ", testLabId=" + testLabId +
                ", patientId=" + patientId +
                ", addressId=" + addressId +
                '}';
    }
}
