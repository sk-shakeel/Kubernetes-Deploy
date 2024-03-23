package com.zemoso.diagnostics.labservice.dao;

import com.zemoso.diagnostics.labservice.entity.Lab;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LabRepository extends JpaRepository<Lab,Integer> {
}
