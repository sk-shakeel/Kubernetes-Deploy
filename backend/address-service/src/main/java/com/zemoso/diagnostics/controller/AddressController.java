package com.zemoso.diagnostics.controller;

import com.zemoso.diagnostics.dto.AddressDTO;
import com.zemoso.diagnostics.entity.Address;
import com.zemoso.diagnostics.service.AddressService;
import com.zemoso.diagnostics.mapper.MapperService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@Slf4j
@RestController
@RequestMapping("/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @Autowired
    private MapperService mapperService;

    @GetMapping
    public List<Address> findUsers() {
        log.info("Inside findUsers method of Controller");
        return addressService.findAll();
    }

    @GetMapping("/{id}")
    public AddressDTO findById(@PathVariable("id") int id) {
        log.info("Inside findById method of Controller");
        Address address = addressService.findById(id);
        return mapperService.convertToDto(address);
    }

    @PostMapping
    public Address createJob(@RequestBody AddressDTO address){
        log.info("Inside createJob method of Controller");
        return addressService.save(mapperService.convertToEntity(address));
    }
}