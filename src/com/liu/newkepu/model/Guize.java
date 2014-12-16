package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_gz")
public class Guize {
    private String gz_id;
    private String gz_name;
    private String gz_neirong;
    private String gz_date;

    @Id
    public String getGz_id() {
        return gz_id;
    }

    public void setGz_id(String gz_id) {
        this.gz_id = gz_id;
    }

    public String getGz_name() {
        return gz_name;
    }

    public void setGz_name(String gz_name) {
        this.gz_name = gz_name;
    }

    public String getGz_neirong() {
        return gz_neirong;
    }

    public void setGz_neirong(String gz_neirong) {
        this.gz_neirong = gz_neirong;
    }

    public String getGz_date() {
        return gz_date;
    }

    public void setGz_date(String gz_date) {
        this.gz_date = gz_date;
    }
}
