package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.MeetingrenDao;
import com.liu.newkepu.model.Meetingren;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component("MeetingrenDao")
public class MeetingrenDaoImpl implements MeetingrenDao{

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Meetingren meetingren) {
        sessionFactory.getCurrentSession().save(meetingren);
    }
}
