package com.liu.newkepu.dao;


import com.liu.newkepu.model.Yanzhengtemp;

import java.util.List;

public interface YanzhengtempDao {
    public void save(Yanzhengtemp yanzhengtemp);

    public void update(Yanzhengtemp yanzhengtemp);

    public void delete(Yanzhengtemp yanzhengtemp);

    public List<Yanzhengtemp> findByshoujihao(String shoujihao);

    public List<Yanzhengtemp> fingall();
}
