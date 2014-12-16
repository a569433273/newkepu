package com.liu.newkepu.dao;

import com.liu.newkepu.model.Guize;

import java.util.List;

public interface GuizeDao {
    public List<Guize> findBygzid(String gzid);
}
