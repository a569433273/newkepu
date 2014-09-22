package com.liu.newkepu.dao.Impl;

import javax.annotation.Resource;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import com.liu.newkepu.dao.PassengerDao;
import com.liu.newkepu.model.Passenger;

@Component("PassengerDao")
public class PassengerDaoImpl implements PassengerDao{

	@Resource
	private SessionFactory sessionFactory;
	
	@Override
	public void save(Passenger passenger) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().save(passenger);
	}

}
