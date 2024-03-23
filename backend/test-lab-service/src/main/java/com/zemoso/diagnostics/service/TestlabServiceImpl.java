package com.zemoso.diagnostics.service;

import com.zemoso.diagnostics.vo.LabVO;
import com.zemoso.diagnostics.vo.ResponseTemplateVO;
import com.zemoso.diagnostics.vo.TestVO;
import com.zemoso.diagnostics.dao.TestlabRepository;
import com.zemoso.diagnostics.entity.TestLab;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;

import java.util.ArrayList;
import java.util.List;

@Service
public class TestlabServiceImpl implements TestlabService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private TestlabRepository testlabRepository;

    @Value("${labservice.url}")
    private String labserviceUrl;

    @Value("${testservice.url}")
    private String testserviceUrl;

    @Override
    public List<ResponseTemplateVO> findAll() {
        List<ResponseTemplateVO> voList = new ArrayList<>();
        List<TestLab> testlabs = testlabRepository.findAll();
        for(TestLab testLab : testlabs ){
            LabVO labVO = restTemplate.getForObject(labserviceUrl+testLab.getLabId(),LabVO.class);
            TestVO testVO = restTemplate.getForObject(testserviceUrl+testLab.getTestId(),TestVO.class);
            ResponseTemplateVO vo = new ResponseTemplateVO();
            vo.setLab(labVO);
            vo.setTest(testVO);
            voList.add(vo);
        }
        return voList;
    }

    @Override
    public List<ResponseTemplateVO> findLabById(int labId) {
        List<ResponseTemplateVO> voList = new ArrayList<>();
        List<TestLab> testlabs = testlabRepository.findAll();
        for (TestLab testLab : testlabs) {
            if (testLab.getLabId() == labId) {
                LabVO labVO = restTemplate.getForObject(labserviceUrl + testLab.getLabId(), LabVO.class);
                TestVO testVO = restTemplate.getForObject(testserviceUrl + testLab.getTestId(), TestVO.class);
                ResponseTemplateVO vo = new ResponseTemplateVO();
                vo.setLab(labVO);
                vo.setTest(testVO);
                voList.add(vo);
            }
        }
        return voList;
    }

    @Override
    public List<ResponseTemplateVO> findById(int labId, int testId) {
        List<ResponseTemplateVO> voList = new ArrayList<>();
        List<TestLab> testlabs = testlabRepository.findAll();
        for (TestLab testLab : testlabs) {
            if (testLab.getLabId() == labId && testLab.getTestId() == testId) {
                LabVO labVO = restTemplate.getForObject(labserviceUrl + testLab.getLabId(), LabVO.class);
                TestVO testVO = restTemplate.getForObject(testserviceUrl + testLab.getTestId(), TestVO.class);
                ResponseTemplateVO vo = new ResponseTemplateVO();
                vo.setLab(labVO);
                vo.setTest(testVO);
                voList.add(vo);
            }
        }
        return voList;
    }

}
