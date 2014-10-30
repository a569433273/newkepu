package com.liu.newkepu.dao;

import com.liu.newkepu.model.Meetingren;

import java.util.List;

public interface MeetingrenDao {
    public void save(Meetingren meetingren);

    public List<Meetingren> findBymeeting_id(String meeting_id);
}
