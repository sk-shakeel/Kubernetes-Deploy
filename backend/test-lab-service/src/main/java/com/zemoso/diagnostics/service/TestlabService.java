package com.zemoso.diagnostics.service;

import com.zemoso.diagnostics.vo.ResponseTemplateVO;

import java.util.List;

public interface TestlabService {
    List<ResponseTemplateVO> findAll();

    List<ResponseTemplateVO> findById(int labId, int testId);

    List<ResponseTemplateVO> findLabById(int labId);
}
