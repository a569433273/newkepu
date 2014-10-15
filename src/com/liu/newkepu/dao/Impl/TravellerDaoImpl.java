package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.TravellerDao;
import com.liu.newkepu.model.Traveller;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("TravellerDao")
public class TravellerDaoImpl implements TravellerDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Traveller traveller) {
        sessionFactory.getCurrentSession().save(traveller);
    }

    @Override
    public void update(Traveller traveller) {
        sessionFactory.getCurrentSession().update(traveller);
    }

    @Override
    public void delete(Traveller traveller) {
        sessionFactory.getCurrentSession().delete(traveller);
    }

    @Override
    public List<Traveller> findBymember_id(String member_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Traveller t where t.traveller_member_id='" + member_id + "'");
        return query.list();
    }

    @Override
    public Traveller load(String member_id) {
        Traveller traveller = (Traveller) sessionFactory.getCurrentSession().load(Traveller.class, member_id);
        return traveller;
    }
}
