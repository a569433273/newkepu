package com.liu.newkepu.dao.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import com.liu.newkepu.dao.TuigaiDao;
import com.liu.newkepu.model.Tuigai;

@Component("TuigaiDao")
public class TuigaiDaoImpl implements TuigaiDao{
	
	@Resource
	private SessionFactory sessionFactory;

	@Override
	public List<Tuigai> findByhangkonggongsi(String hangkonggongsi) {
		// TODO Auto-generated method stub
		Query query = sessionFactory.getCurrentSession().createQuery("from Tuigai t where t.hangkonggongsi='" + hangkonggongsi + "'");
		return query.list();
	}

}
