package com.liu.newkepu.dao;

import com.liu.newkepu.model.Hangkonggs;

import java.util.List;

public interface HangkonggsDao {
    public List<Hangkonggs> findBycode(String code);
    public List<Hangkonggs> findAll();
}
