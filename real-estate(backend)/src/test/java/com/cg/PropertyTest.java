package com.cg;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import com.cg.entity.Broker;
import com.cg.entity.Property;
import com.cg.pojo.PropertyCriteria;

@SpringBootTest
public class PropertyTest extends AbstractTest {
	
	@Override
	@BeforeEach
	public void setUp() {
		super.setUp();
	}

	@Test
	public void getProperty() throws Exception{
		String uri="/viewProperty/103";
		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)).andReturn();
		int status = mvcResult.getResponse().getStatus();
		assertEquals(200, status);
		String content = mvcResult.getResponse().getContentAsString();
		Property p = super.mapFromJson(content, Property.class);
		assertEquals("India", p.getAddress());
	}

	@Test
	public void createProperty() throws Exception{
		String uri="/addProperty";
		Property p= new Property();
		p.setAddress("Australia");
		p.setAreaSqft(600000);
		p.setCity("Hyderabad");
		p.setConfiguration("Flat");
		p.setOfferCost(900000);
		p.setOfferType("Sell");
		p.setStreet("Street_10");
		p.setStatus(true);
		
		String inputJson=super.mapToJson(p);
		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri).contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();
		int status = mvcResult.getResponse().getStatus();
		assertEquals(200, status);
		String content = mvcResult.getResponse().getContentAsString();
		Property p1=super.mapFromJson(content, Property.class);
		assertEquals("Australia",p1.getAddress());
		
	}

	@Test
	public void getAllProperties() throws Exception{
		String uri="/allProperties";
		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)).andReturn();
		int status = mvcResult.getResponse().getStatus();
		assertEquals(200, status);
		String content = mvcResult.getResponse().getContentAsString();
		Property p[] = super.mapFromJson(content, Property[].class);
		assertEquals("India", p[0].getAddress());
	}

	@Test
	public void deleteProperty() throws Exception{
		String uri="/removeProperty/17";
		MvcResult mvcResult=mvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
		int status = mvcResult.getResponse().getStatus();
		assertEquals(200, status);
	}

	@Test
	public void editProperty() throws Exception{
		String uri1="/editProperty";
		String uri="/viewProperty/104";
		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)).andReturn();
		String content = mvcResult.getResponse().getContentAsString();
		Property p = super.mapFromJson(content, Property.class);
		p.setAddress("3-79/D");
		String inputJson = super.mapToJson(p);
		MvcResult mvcResult1=mvc.perform(MockMvcRequestBuilders.put(uri1).contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();
		String content1 = mvcResult1.getResponse().getContentAsString();
		Property p1=super.mapFromJson(content1, Property.class);
		assertEquals("3-79/D", p1.getAddress());	 
	}
}
