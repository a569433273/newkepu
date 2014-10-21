package com.liu.newkepu.dao;


import com.liu.newkepu.model.Myflight;

import java.util.List;

public interface MyflightDao {
    public void save(Myflight myflight);

    public List<Myflight> findBymember_id(String member_id);
}
