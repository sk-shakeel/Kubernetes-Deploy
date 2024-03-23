package com.zemoso.diagnostics.labservice;

import com.zemoso.diagnostics.labservice.controller.LabController;
import com.zemoso.diagnostics.labservice.dao.LabRepository;
import com.zemoso.diagnostics.labservice.dto.LabDto;
import com.zemoso.diagnostics.labservice.entity.Lab;
import com.zemoso.diagnostics.labservice.mapper.MapperService;
import com.zemoso.diagnostics.labservice.service.LabServices;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;

@WebMvcTest(DiagnosticsApplication.class)
@RunWith(SpringRunner.class)
@ContextConfiguration(classes=LabController.class)
@ComponentScan("com.zemoso.diagnostics.labservice")
class DiagnosticsApplicationTests {

	@Autowired
	MockMvc mockMvc;

	@Autowired
	private LabServices labServices;

	@MockBean
	private LabRepository labRepository;

	@Autowired
	LabController labController;

	@Autowired
	private MapperService mapperService;

	private  Lab lab1;
	private Lab lab2;
	@BeforeEach
	void setup(){
		lab1=new Lab(0,"Los Altos Center Lab", (float) 4.3,4);
		lab2=new Lab(1,"Los Altos Center Lab", (float) 4.3,4);
	}

	@DisplayName("Get all Labs")
	@Test
	void findAllLabs() throws Exception {
		List<Lab> labs = new ArrayList<>(Arrays.asList(lab1,lab2));
		when(labRepository.findAll()).thenReturn((labs));
		mockMvc.perform(get("/labs").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)));
	}

	@DisplayName("Get Lab By Id")
	@Test
	void findLabById() throws Exception {
		when(labRepository.findById(lab1.getLabId())).thenReturn(Optional.ofNullable((lab1)));
		mockMvc.perform(get("/labs/"+lab1.getLabId()).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}

	@DisplayName("Get Lab By Id Exception")
	@Test
	void findLabByIdException() throws Exception {
		when(labRepository.findById(lab1.getLabId())).thenReturn(Optional.ofNullable((null)));
		mockMvc.perform(get("/labs/"+lab1.getLabId()).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isNotFound());
	}

	@DisplayName("Mapper Service convertToEntity")
	@Test
	void convertToEntityMapper() throws Exception {
		LabDto labDto = new LabDto(0,"Los Altos Center Lab", (float) 4.3,4);
		Lab lab = mapperService.convertToEntity(labDto);
		Assert.assertEquals(lab1, lab);

		Assert.assertThrows(IllegalArgumentException.class,
				()->{
					mapperService.convertToEntity (null);
				});
	}

	@DisplayName("Mapper Service convertToDto Exception")
	@Test
	void convertToDtoMapperException() throws Exception {
		Assert.assertThrows(IllegalArgumentException.class,
				()->{
					mapperService.convertToDTO(null);
				});
	}

	@DisplayName("Mapper Service convertDtoToEntity ")
	@Test
	void convertDtoToEntityMapper() throws Exception {
		List<LabDto> labDtos = new ArrayList<>(Arrays.asList(new LabDto(0,"Los Altos Center Lab", (float) 4.3,4)));
		List<Lab> labs = new ArrayList<>(Arrays.asList(lab1));

		List<Lab> acutualLabs = mapperService.cardDtoToEntity(labDtos);

		Assert.assertEquals(labs,acutualLabs);
	}
}
