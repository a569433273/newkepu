package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.MeetingDao;
import com.liu.newkepu.model.Meeting;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("MeetingDao")
public class MeetingDaoImpl implements MeetingDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Meeting meeting) {
        sessionFactory.getCurrentSession().save(meeting);
    }

    @Override
    public void update(Meeting meeting) {
        sessionFactory.getCurrentSession().update(meeting);
    }

    @Override
    public List<Meeting> findbymeeting_id(String meeting_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Meeting m where m.meeting_id='" + meeting_id + "'");
        return query.list();
    }
}
