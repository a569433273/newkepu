package com.liu.newkepu.dao;

import com.liu.newkepu.model.Hangkonggs;

import java.util.List;

public interface ssDao {
    public List<Hangkonggs> findBycode(String code);
}
