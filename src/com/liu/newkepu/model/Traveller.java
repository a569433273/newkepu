package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_traveller")
public class Traveller {
    private String traveller_id;
    private String traveller_name;
    private int traveller_type;
    private int traveller_papers_type;
    private String traveller_sf_num;
    private String traveller_hz_num;
    private String traveller_ga_num;
    private String traveller_jug_num;
    private String traveller_jingu_num;
    private String traveller_qt_num;
    private int traveller_isbenren;
    private String traveller_sex;
    private String traveller_birth;
    private String traveller_member_id;
    private String traveller_phone;

    @Id
    public String getTraveller_id() {
        return traveller_id;
    }

    public void setTraveller_id(String traveller_id) {
        this.traveller_id = traveller_id;
    }

    public String getTraveller_name() {
        return traveller_name;
    }

    public void setTraveller_name(String traveller_name) {
        this.traveller_name = traveller_name;
    }

    public int getTraveller_type() {
        return traveller_type;
    }

    public void setTraveller_type(int traveller_type) {
        this.traveller_type = traveller_type;
    }

    public int getTraveller_papers_type() {
        return traveller_papers_type;
    }

    public void setTraveller_papers_type(int traveller_papers_type) {
        this.traveller_papers_type = traveller_papers_type;
    }

    public String getTraveller_sf_num() {
        return traveller_sf_num;
    }

    public void setTraveller_sf_num(String traveller_sf_num) {
        this.traveller_sf_num = traveller_sf_num;
    }

    public String getTraveller_hz_num() {
        return traveller_hz_num;
    }

    public void setTraveller_hz_num(String traveller_hz_num) {
        this.traveller_hz_num = traveller_hz_num;
    }

    public String getTraveller_ga_num() {
        return traveller_ga_num;
    }

    public void setTraveller_ga_num(String traveller_ga_num) {
        this.traveller_ga_num = traveller_ga_num;
    }

    public String getTraveller_jug_num() {

        return traveller_jug_num;
    }

    public void setTraveller_jug_num(String traveller_jug_num) {
        this.traveller_jug_num = traveller_jug_num;
    }

    public String getTraveller_jingu_num() {
        return traveller_jingu_num;
    }

    public void setTraveller_jingu_num(String traveller_jingu_num) {
        this.traveller_jingu_num = traveller_jingu_num;
    }

    public String getTraveller_qt_num() {
        return traveller_qt_num;
    }

    public void setTraveller_qt_num(String traveller_qt_num) {
        this.traveller_qt_num = traveller_qt_num;
    }

    public int getTraveller_isbenren() {
        return traveller_isbenren;
    }

    public void setTraveller_isbenren(int traveller_isbenren) {
        this.traveller_isbenren = traveller_isbenren;
    }

    public String getTraveller_sex() {
        return traveller_sex;
    }

    public void setTraveller_sex(String traveller_sex) {
        this.traveller_sex = traveller_sex;
    }

    public String getTraveller_birth() {
        return traveller_birth;
    }

    public void setTraveller_birth(String traveller_birth) {
        this.traveller_birth = traveller_birth;
    }

    public String getTraveller_member_id() {
        return traveller_member_id;
    }

    public void setTraveller_member_id(String traveller_member_id) {
        this.traveller_member_id = traveller_member_id;
    }

    public String getTraveller_phone() {
        return traveller_phone;
    }

    public void setTraveller_phone(String traveller_phone) {
        this.traveller_phone = traveller_phone;
    }
}
