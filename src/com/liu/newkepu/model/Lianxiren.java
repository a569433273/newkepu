package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_lianxiren")
public class Lianxiren {
    private String lianxiren_id;
    private String lianxiren_name;
    private String lianxiren_phone;
    private String lianxiren_email;
    private String lianxiren_member_id;

    @Id
    public String getLianxiren_id() {
        return lianxiren_id;
    }

    public void setLianxiren_id(String lianxiren_id) {
        this.lianxiren_id = lianxiren_id;
    }

    public String getLianxiren_name() {
        return lianxiren_name;
    }

    public void setLianxiren_name(String lianxiren_name) {
        this.lianxiren_name = lianxiren_name;
    }

    public String getLianxiren_phone() {
        return lianxiren_phone;
    }

    public void setLianxiren_phone(String lianxiren_phone) {
        this.lianxiren_phone = lianxiren_phone;
    }

    public String getLianxiren_email() {
        return lianxiren_email;
    }

    public void setLianxiren_email(String lianxiren_email) {
        this.lianxiren_email = lianxiren_email;
    }

    public String getLianxiren_member_id() {
        return lianxiren_member_id;
    }

    public void setLianxiren_member_id(String lianxiren_member_id) {
        this.lianxiren_member_id = lianxiren_member_id;
    }
}
