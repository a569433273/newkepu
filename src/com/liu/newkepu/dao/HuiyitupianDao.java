package com.liu.newkepu.dao;

import com.liu.newkepu.model.Huiyitupian;

import java.util.List;

public interface HuiyitupianDao {
    public void save(Huiyitupian huiyitupian);

    public List<Huiyitupian> findBymeeting_id(String meeting_id);
}
