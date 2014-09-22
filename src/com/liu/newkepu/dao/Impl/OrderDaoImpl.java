package com.liu.newkepu.dao.Impl;

import javax.annotation.Resource;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import com.liu.newkepu.dao.OrderDao;
import com.liu.newkepu.model.Order;

@Component("OrderDao")
public class OrderDaoImpl implements OrderDao{
	
	@Resource
	private SessionFactory sessionFactory;

	@Override
	public void save(Order order) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().save(order);
	}

}
