package com.liu.newkepu.dao.Impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.liu.newkepu.dao.HangbanDao;
import com.liu.newkepu.model.Hangban;

@Component("HangbanDao")
public class HangbanDaoImpl implements HangbanDao{
	
	@Resource
	private SessionFactory sessionFactory;

	@Override
	public void save(Hangban hangban) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().save(hangban);
	}

	@Override
	public List<Hangban> findByqifeianddaodaandriqi(String qifei, String daoda,
			String riqi) {
		// TODO Auto-generated method stub
		Query query = sessionFactory.getCurrentSession().createQuery("from Hangban h where h.boardpoint='" + qifei + "' and h.offpoint='" + daoda + "' and h.departuredate='" + riqi + "'");
		return query.list();
	}

}
