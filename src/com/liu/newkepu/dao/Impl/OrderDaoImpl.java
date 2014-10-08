package com.liu.newkepu.dao.Impl;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import com.liu.newkepu.dao.OrderDao;
import com.liu.newkepu.model.Order;

import java.util.List;

@Component("OrderDao")
public class OrderDaoImpl implements OrderDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Order order) {
        sessionFactory.getCurrentSession().save(order);
    }

    @Override
    public List<Order> findByorder_id(String order_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Order o where o.order_id='" + order_id + "'");
        return query.list();
    }

    @Override
    public Order loadByorder_id(String order_id) {
        Order order = (Order) sessionFactory.getCurrentSession().load(Order.class, order_id);
        return order;
    }

    @Override
    public void update(Order order) {
        sessionFactory.getCurrentSession().update(order);
    }

}
