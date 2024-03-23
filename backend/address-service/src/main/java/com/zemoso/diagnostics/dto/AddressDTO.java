package com.zemoso.diagnostics.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {

    private int id;

    private String houseNo;

    private String area;

    private String zipcode;

    private String city;

    private int userId;
}
