package com.liu.newkepu.dao.Impl;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import com.liu.newkepu.dao.PassengerDao;
import com.liu.newkepu.model.Passenger;

import java.util.List;

@Component("PassengerDao")
public class PassengerDaoImpl implements PassengerDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Passenger passenger) {
        sessionFactory.getCurrentSession().save(passenger);
    }

    @Override
    public List<Passenger> findByorder_id(String order_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Passenger p where p.passenger_order_id = '" + order_id + "'");
        return query.list();
    }

    @Override
    public List<Passenger> findByorder_idandpassenger_type(String order_id, int passenger_type) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Passenger p where p.passenger_order_id = '" + order_id + "' and p.passenger_type='" + passenger_type + "'");
        return query.list();
    }

}
