package com.cg;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import com.cg.entity.User;


@SpringBootTest
public class UserTest extends AbstractTest {
	
	@Override
	@BeforeEach
	public void setUp() {
		super.setUp();
	}

	@Test
	public void userFound() throws Exception{
		String uri = "/user/3";
		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)).andReturn();
		int status = mvcResult.getResponse().getStatus();
		assertEquals(200,status);
		String content = mvcResult.getResponse().getContentAsString();
		User u = super.mapFromJson(content, User.class);
		assertEquals("pqr.com",u.getEmail());
	}

}
