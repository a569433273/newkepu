package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_new")
public class News {
    private String new_id;
    private String new_biaoti;
    private String new_neirong;
    private String new_date;
    private String new_type;

    @Id
    public String getNew_id() {
        return new_id;
    }

    public void setNew_id(String new_id) {
        this.new_id = new_id;
    }

    public String getNew_biaoti() {
        return new_biaoti;
    }

    public void setNew_biaoti(String new_biaoti) {
        this.new_biaoti = new_biaoti;
    }

    public String getNew_neirong() {
        return new_neirong;
    }

    public void setNew_neirong(String new_neirong) {
        this.new_neirong = new_neirong;
    }

    public String getNew_date() {
        return new_date;
    }

    public void setNew_date(String new_date) {
        this.new_date = new_date;
    }

    public String getNew_type() {
        return new_type;
    }

    public void setNew_type(String new_type) {
        this.new_type = new_type;
    }
}
