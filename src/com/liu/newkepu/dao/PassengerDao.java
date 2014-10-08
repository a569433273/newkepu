package com.liu.newkepu.dao;

import com.liu.newkepu.model.Passenger;

import java.util.List;

public interface PassengerDao {
    public void save(Passenger passenger);

    public List<Passenger> findByorder_id(String order_id);

    public List<Passenger> findByorder_idandpassenger_type(String order_id, int passenger_type);
}
