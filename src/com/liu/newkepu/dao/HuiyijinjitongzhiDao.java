package com.liu.newkepu.dao;

import com.liu.newkepu.model.Huiyijinjitongzhi;

import java.util.List;

public interface HuiyijinjitongzhiDao {
    public List<Huiyijinjitongzhi> findBymeeting_id(String meeting_id);
}
