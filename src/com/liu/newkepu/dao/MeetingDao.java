package com.liu.newkepu.dao;

import com.liu.newkepu.model.Meeting;

import java.util.List;

public interface MeetingDao {
    public void save(Meeting meeting);
    public void update(Meeting meeting);
    public List<Meeting> findbymeeting_id(String meeting_id);
}
