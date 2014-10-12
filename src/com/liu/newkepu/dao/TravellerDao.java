package com.liu.newkepu.dao;


import com.liu.newkepu.model.Traveller;

import java.util.List;

public interface TravellerDao {
    public void save(Traveller traveller);
    public void update(Traveller traveller);
    public void delete(Traveller traveller);
    public List<Traveller> findBymember_id(String member_id);
    public Traveller load(String member_id);
}
