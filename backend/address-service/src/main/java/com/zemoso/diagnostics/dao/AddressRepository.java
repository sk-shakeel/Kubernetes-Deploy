package com.zemoso.diagnostics.dao;

import com.zemoso.diagnostics.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Integer> {
}
