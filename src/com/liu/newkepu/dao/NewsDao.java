package com.liu.newkepu.dao;

import com.liu.newkepu.model.News;

import java.util.List;

public interface NewsDao {
    public List<News> findBytype(String new_type);
}
