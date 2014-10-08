package com.liu.newkepu.dao;

import java.util.List;

import com.liu.newkepu.model.Tuigai;

public interface TuigaiDao {
    public List<Tuigai> findByhangkonggongsi(String hangkonggongsi);
}
