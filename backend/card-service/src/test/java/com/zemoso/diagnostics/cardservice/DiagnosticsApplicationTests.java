package com.zemoso.diagnostics.cardservice;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.diagnostics.cardservice.controller.CardController;
import com.zemoso.diagnostics.cardservice.dao.CardRepository;
import com.zemoso.diagnostics.cardservice.dto.CardDto;
import com.zemoso.diagnostics.cardservice.entity.Card;
import com.zemoso.diagnostics.cardservice.mapper.MapperService;
import com.zemoso.diagnostics.cardservice.service.CardService;
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

@WebMvcTest(CardController.class)
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = DiagnosticsApplication.class)
@ComponentScan("com.zemoso.diagnostics.cardservice")
class DiagnosticsApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper mapper;

	@Autowired
	private CardController cardController;

	@Autowired
	private CardService cardService;

    @Autowired
    private MapperService mapperService;

	@MockBean
	private CardRepository cardRepository;

	private Card card1;
	private Card card2;

	@BeforeEach
	void setup(){
		card1 = new Card(1,"1234 567","card1_name","02/25","123",1);
		card2 = new Card(2,"1234 567","card2_name","02/25","123",1);
	}

	@DisplayName("Get All Cards")
	@Test
	void getAllCards() throws Exception {
		List<Card> cards = new ArrayList<>(Arrays.asList(card1,card2));
		when(cardRepository.findAll()).thenReturn(cards);

		mockMvc.perform(get("/cards").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.hasSize(2)));
	}

	@DisplayName("Get Card By Id")
	@Test
	void getCardById() throws Exception {
		when(cardRepository.findById(card1.getCardId())).thenReturn(card1);

		mockMvc.perform(get("/cards/"+card1.getCardId()).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.cardId",Matchers.is(card1.getCardId())));
	}

	@DisplayName("Get Card By Id Exception")
	@Test
	void getCardByIdException() throws Exception {
		when(cardRepository.findById(card1.getCardId())).thenReturn(null);

		mockMvc.perform(get("/cards/"+card1.getCardId()).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound())
				.andExpect(MockMvcResultMatchers.jsonPath("$.message",Matchers.is("Card with id-"+card1.getCardId()+" is not Found")));
	}

	@DisplayName("Save Card ")
	@Test
	void saveCard() throws Exception {
		CardDto cardDto = new CardDto(1,"1234 567","card1_name","02/25","123",1);
		when(cardService.saveCard(card1)).thenReturn(card1);

		mockMvc.perform(post("/cards").contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON)
						.content(mapper.writeValueAsString(cardDto)))
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.notNullValue()))
				.andExpect(MockMvcResultMatchers.jsonPath("$.cardId",Matchers.is(card1.getCardId())));
	}

	@DisplayName("Update Card ")
	@Test
	void updateCard() throws Exception {
		HashMap<Object,Object> map = new HashMap<>();
		map.put("cvv","789");
		when(cardRepository.findById(card1.getCardId())).thenReturn(card1);
		when(cardService.saveCard(card1)).thenReturn(card1);

		mockMvc.perform(patch("/cards/"+card1.getCardId()).contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON)
						.content(mapper.writeValueAsString(map)))
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.notNullValue()));
	}

	@DisplayName("Update Card Exception")
	@Test
	void updateCardException() throws Exception {
		HashMap<Object,Object> map = new HashMap<>();
		map.put("cvv","789");
		when(cardRepository.findById(card1.getCardId())).thenReturn(null);

		mockMvc.perform(patch("/cards/"+card1.getCardId()).contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON)
						.content(mapper.writeValueAsString(map)))
				.andExpect(status().isNotFound())
				.andExpect(MockMvcResultMatchers.jsonPath("$.message",Matchers.is("Card with id-"+card1.getCardId()+" is not Found")));
	}

	@DisplayName("Delete Card ")
	@Test
	void delteCard() throws Exception {
		when(cardRepository.findById(card1.getCardId())).thenReturn(card1);

		mockMvc.perform(delete("/cards/"+card1.getCardId()).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.notNullValue()))
				.andExpect(MockMvcResultMatchers.jsonPath("$.cardId",Matchers.is(card1.getCardId())));
	}

	@DisplayName("Get Cards By UserId ")
	@Test
	void getCardsByUserId() throws Exception {
		List<Card> cards = new ArrayList<>(Arrays.asList(card1,card2));
		when(cardRepository.findAllByUserId(card1.getUserId())).thenReturn(cards);

		mockMvc.perform(get("/cards/user/"+card1.getUserId()).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.notNullValue()))
				.andExpect(MockMvcResultMatchers.jsonPath("$",Matchers.hasSize(2)));
	}
}
