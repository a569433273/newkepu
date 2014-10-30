package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.MeetingrenDao;
import com.liu.newkepu.model.Meetingren;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("MeetingrenDao")
public class MeetingrenDaoImpl implements MeetingrenDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Meetingren meetingren) {
        sessionFactory.getCurrentSession().save(meetingren);
    }

    @Override
    public List<Meetingren> findBymeeting_id(String meeting_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Meetingren m where m.meeting_id='" + meeting_id + "'");
        return query.list();
    }
}
