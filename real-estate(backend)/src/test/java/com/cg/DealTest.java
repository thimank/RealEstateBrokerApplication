package com.cg;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import com.cg.entity.Customer;
import com.cg.entity.Deal;
import com.cg.entity.Property;

@SpringBootTest
public class DealTest extends AbstractTest{
	
	@Override
	@BeforeEach
	public void setUp() {
		super.setUp();
	}
	
	/*@Test
	public void getAllDeals() throws Exception{
		String uri = "/allDeals";
		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)).andReturn();
		int status= mvcResult.getResponse().getStatus();
		assertEquals(200,status);
		String content = mvcResult.getResponse().getContentAsString();
		Deal dealList[] = super.mapFromJson(content, Deal[].class);
		assertEquals(0.0,dealList[0].getDealCost());
	}*/

	@Test
	public void createDeal() throws Exception{
		String uri = "/addDeal";
		Deal d= new Deal();
	    Customer c =new Customer();
	    c.setUserid(8);
	    Property p = new Property();
	    p.setPropId(13);
	    d.setCustomer(c);
	    d.setProperty(p);
	    d.setDealCost(900000);
	    String inputJson = super.mapToJson(d);
	    MvcResult mvcResult2 = mvc.perform(MockMvcRequestBuilders.post(uri).contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();
	    int status = mvcResult2.getResponse().getStatus();
	    assertEquals(404, status);
	}
		
}
