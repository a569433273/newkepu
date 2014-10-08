package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.TravellerDao;
import com.liu.newkepu.model.Traveller;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import java.util.List;

@Component("TravellerDao")
public class TravellerDaoImpl implements TravellerDao {
    private SessionFactory sessionFactory;

    @Override
    public void save(Traveller traveller) {
        sessionFactory.getCurrentSession().save(traveller);
    }

    @Override
    public List<Traveller> findBymember_id(String member_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Traveller t where t.traveller_member_id='" + member_id + "'");
        return query.list();
    }
}
