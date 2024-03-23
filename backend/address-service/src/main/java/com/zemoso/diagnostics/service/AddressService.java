package com.zemoso.diagnostics.service;

import com.zemoso.diagnostics.entity.Address;

import java.util.List;

public interface AddressService{
     Address save(Address convertToEntity);
    Address findById(int id);

    List<Address> findAll();
}
