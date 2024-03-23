package com.zemoso.diagnostics.service;

import com.zemoso.diagnostics.dao.AddressRepository;
import com.zemoso.diagnostics.entity.Address;
import com.zemoso.diagnostics.exception.AddressNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class AddressSeviceImpl implements AddressService{

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public Address save(Address address) {
        log.info("Inside save method of Service");
        return addressRepository.save(address);
    }

    @Override
    public Address findById(int id) {
        log.info("Inside findById method of Service");
        return addressRepository.findById(id).orElseThrow(() -> new AddressNotFoundException("Address with id - " + id +" not found"));
    }

    @Override
    public List<Address> findAll() {
        log.info("Inside findAll method of Service");
        return addressRepository.findAll();
    }
}
