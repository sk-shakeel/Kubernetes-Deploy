package com.zemoso.diagnostics.patientservice;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.diagnostics.patientservice.controller.PatientController;
import com.zemoso.diagnostics.patientservice.dao.PatientRepository;
import com.zemoso.diagnostics.patientservice.dto.PatientDto;
import com.zemoso.diagnostics.patientservice.entity.Patient;
import com.zemoso.diagnostics.patientservice.mapper.MapperService;
import com.zemoso.diagnostics.patientservice.service.PatientService;
import org.hamcrest.Matchers;
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

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PatientController.class)
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = DiagnosticsApplication.class)
@ComponentScan("com.zemoso.diagnostics.patientservice")
class DiagnosticsApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper mapper;

	@Autowired
	private PatientController patientController;

	@Autowired
	private PatientService patientService;

	@MockBean
	private PatientRepository patientRepository;

	@Autowired
	private MapperService mapperService;

	private Patient patient1;
	private Patient patient2;

	@BeforeEach
	void setup(){
		patient1 = new Patient(0,"MySelf","Klaus",22,"Male",1);
		patient2 = new Patient(2,"Other","Eliajha",26,"Male",1);
	}

	@DisplayName("Get All Patients")
	@Test
	void allPatientst() throws Exception {
		List<Patient> patients = new ArrayList<>(Arrays.asList(patient1,patient2));
		when(patientRepository.findAll()).thenReturn(patients);

		mockMvc.perform(get("/patients").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.hasSize(2)));
	}

	@DisplayName("Get Patient By Id")
	@Test
	void patientByIdTest() throws Exception {
		when(patientRepository.findById(patient1.getPatientId())).thenReturn(patient1);

		mockMvc.perform(get("/patients/"+patient1.getPatientId()).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andExpect(MockMvcResultMatchers.jsonPath("$.patientId",Matchers.is(patient1.getPatientId())));
	}

	@DisplayName("Get Patient By Id For Custom Error")
	@Test
	void patientByIdTestError() throws Exception {
		when(patientRepository.findById(2)).thenReturn(null);

		mockMvc.perform(get("/patients/"+patient1.getPatientId()).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
	}

	@DisplayName("Delete Patient By Id")
	@Test
	void deletePatientByIdTest() throws Exception {
		when(patientRepository.findById(patient1.getPatientId())).thenReturn(patient1);

		mockMvc.perform(delete("/patients/"+patient1.getPatientId()).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

	@DisplayName("Post Patient")
	@Test
	void savePatientTest() throws Exception {
		PatientDto patientDto = new PatientDto(0,"MySelf","Klaus",22,"Male",1);
		when(patientService.savePatient(patient1)).thenReturn(patient1);

		mockMvc.perform(post("/patients").contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON)
						.content(mapper.writeValueAsString(patientDto)))
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.notNullValue()));
	}

	@DisplayName("Patch Patient By Id")
	@Test
	void patchPatientTest() throws Exception {
		HashMap<Object, Object> map = new HashMap<Object, Object>();
		map.put("relation","Father");
		map.put("name","Sam Smith");

		when(patientRepository.findById(patient1.getPatientId())).thenReturn(patient1);
		when(patientService.savePatient(patient1)).thenReturn(patient1);

		mockMvc.perform(patch("/patients/"+patient1.getPatientId()).contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON)
						.content(mapper.writeValueAsString(map)))
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.notNullValue()));
	}

	@DisplayName("Update Patient By Id For Custom Error")
	@Test
	void updatePatientTestErrorById() throws Exception {
		HashMap<Object, Object> map = new HashMap<Object, Object>();
		map.put("relation","Father");
		map.put("name","Sam Smith");

		when(patientRepository.findById(patient1.getPatientId())).thenReturn(null);

		mockMvc.perform(patch("/patients/"+patient1.getPatientId()).contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON)
						.content(mapper.writeValueAsString(map)))
				.andExpect(status().isNotFound());
	}
}
