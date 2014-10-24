package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.MeetingDao;
import com.liu.newkepu.model.Meeting;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component("MeetingDao")
public class MeetingDaoImpl implements MeetingDao{

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Meeting meeting) {
        sessionFactory.getCurrentSession().save(meeting);
    }
}
