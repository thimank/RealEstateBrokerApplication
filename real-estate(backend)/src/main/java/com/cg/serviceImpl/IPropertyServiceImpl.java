package com.cg.serviceImpl;

import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.entity.Property;
import com.cg.exception.PropertyNotFoundException;
import com.cg.pojo.PropertyCriteria;
import com.cg.repository.IPropertyRepo;
import com.cg.service.IPropertyService;

@Service
@Transactional
public class IPropertyServiceImpl implements IPropertyService{

	@Autowired 
	IPropertyRepo propertyRepository;
	@PersistenceContext
	EntityManager em;

	//service method for displaying all Properties from Repository
	@Override
	public List<Property> listAllProperties() {
		return propertyRepository.findAll();
	}

	//service method for adding new property in the repository
	@Override
	public Property addProperty(Property property) {
		return propertyRepository.save(property);
	}

	//Service method for updating property details in the Repository
	@Override
	public Property editProperty(Property property) {
		Optional<Property> opt = propertyRepository.findById(property.getPropId());
		if(opt.isPresent()) {
			return propertyRepository.save(property);
		}
		else
			throw new PropertyNotFoundException("Property not Found");
	}

	//Service method for displaying property details based on Id from Repository
	@Override
	public Property viewProperty(int propId) throws PropertyNotFoundException {
		Optional<Property> opt =propertyRepository.findById(propId);
		if(opt.isPresent())
			return  opt.get();
		else 
			throw new PropertyNotFoundException("Property not exists with the given id");
	}

	//Service method for removing property by given Id from the Repository
	@Override
	public String removeProperty(int propId) throws PropertyNotFoundException {
		Property pt = propertyRepository.findById(propId).orElseThrow(()-> new PropertyNotFoundException("Property doesn't Exist"));
		propertyRepository.delete(pt);
		return "Property deleted Successfully";
	}

	//service method to list all property details
	@Override
	public List<Property> listPropertyByCriteria(PropertyCriteria criteria) {
		String config =criteria.getConfig();
		String offer =criteria.getOffer();
		String city =criteria.getCity();
		double min =criteria.getMinCost();
		double max =criteria.getMaxCost();
		if(config ==null || config=="")
			config="%";
		if(offer==null || offer=="")
			offer="%";
		if(city==null || city=="")
			city="%";
		if(max==0)
			max=Double.MAX_VALUE; 

		TypedQuery<Property> query = em.createQuery("select p from Property p where  p.configuration like :i  and p.offerType like:j and  p.city like :k and (p.offerCost Between :l and :m )", Property.class);

		query.setParameter("i", config);
		query.setParameter("j", offer);
		query.setParameter("k", city);
		query.setParameter("l", min);
		query.setParameter("m", max);

		return query.getResultList();
	}

	@Override
	public List<Property> availableProperties() {
		List<Property> property=propertyRepository.findAll().stream().filter( p -> p.status!=false).toList();
		return property;
	}
}
