package com.zemoso.diagnostics.dao;

import com.zemoso.diagnostics.entity.TestLab;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestlabRepository extends JpaRepository<TestLab,Integer> {
}
