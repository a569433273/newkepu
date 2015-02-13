package com.liu.newkepu.dao.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import com.liu.newkepu.dao.FlightnameDao;
import com.liu.newkepu.model.Flightname;

@Component("FlightnameDao")
public class FlightnameDaoImpl implements FlightnameDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public Flightname findBysanzima(String sanzima) {
        Flightname flightname = (Flightname) sessionFactory.getCurrentSession().load(Flightname.class, sanzima);
        return flightname;
    }

}
