package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_passenger")
public class Passenger {

    private String passenger_id;
    private String passenger_name;
    private int passenger_type;
    private int passenger_paperstype;
    private String passenger_papernum;
//    private int passenger_ishangyixian;
//    private int passenger_hangyixian;
//    private int passenger_isyanwuxian;
//    private int passenger_yanwuxian;
    private int passenger_isbaoxian;
    private String passenger_ticketnum;
    private String passenger_order_id;
    private String passenger_birth;
    private String passenger_tuipiao_message;
//    private String passenger_hangyixianhao;
//    private String passenger_yanwuxianhao;
    private String passenger_baoxianhao;
    private String passenger_sex;
    private int passenger_goxiaofei;
    private int passenger_backxiaofei;
    private int passenger_ranyou;
    private int passenger_jijian;
    private int passenger_pirce;
    private int passenger_backranyou;
    private int passenger_backjijian;
    private int passenger_backpirce;
    private String passenger_gocw;
    private String passenger_backcw;
    private int passenger_isbenren;

    @Id
    public String getPassenger_id() {
        return passenger_id;
    }

    public void setPassenger_id(String passenger_id) {
        this.passenger_id = passenger_id;
    }

    public String getPassenger_name() {
        return passenger_name;
    }

    public void setPassenger_name(String passenger_name) {
        this.passenger_name = passenger_name;
    }

    public int getPassenger_type() {
        return passenger_type;
    }

    public void setPassenger_type(int passenger_type) {
        this.passenger_type = passenger_type;
    }

    public int getPassenger_paperstype() {
        return passenger_paperstype;
    }

    public void setPassenger_paperstype(int passenger_paperstype) {
        this.passenger_paperstype = passenger_paperstype;
    }

    public String getPassenger_papernum() {
        return passenger_papernum;
    }

    public void setPassenger_papernum(String passenger_papernum) {
        this.passenger_papernum = passenger_papernum;
    }

    public int getPassenger_isbaoxian() {
        return passenger_isbaoxian;
    }

    public void setPassenger_isbaoxian(int passenger_isbaoxian) {
        this.passenger_isbaoxian = passenger_isbaoxian;
    }

    public String getPassenger_ticketnum() {
        return passenger_ticketnum;
    }

    public void setPassenger_ticketnum(String passenger_ticketnum) {
        this.passenger_ticketnum = passenger_ticketnum;
    }

    public String getPassenger_order_id() {
        return passenger_order_id;
    }

    public void setPassenger_order_id(String passenger_order_id) {
        this.passenger_order_id = passenger_order_id;
    }

    public String getPassenger_birth() {
        return passenger_birth;
    }

    public void setPassenger_birth(String passenger_birth) {
        this.passenger_birth = passenger_birth;
    }

    public String getPassenger_tuipiao_message() {
        return passenger_tuipiao_message;
    }

    public void setPassenger_tuipiao_message(String passenger_tuipiao_message) {
        this.passenger_tuipiao_message = passenger_tuipiao_message;
    }


    public String getPassenger_sex() {
        return passenger_sex;
    }

    public void setPassenger_sex(String passenger_sex) {
        this.passenger_sex = passenger_sex;
    }

    public int getPassenger_goxiaofei() {
        return passenger_goxiaofei;
    }

    public void setPassenger_goxiaofei(int passenger_gaoxiaofei) {
        this.passenger_goxiaofei = passenger_gaoxiaofei;
    }

    public int getPassenger_backxiaofei() {
        return passenger_backxiaofei;
    }

    public void setPassenger_backxiaofei(int passenger_backxiaofei) {
        this.passenger_backxiaofei = passenger_backxiaofei;
    }

    public int getPassenger_ranyou() {
        return passenger_ranyou;
    }

    public void setPassenger_ranyou(int passenger_ranyou) {
        this.passenger_ranyou = passenger_ranyou;
    }

    public int getPassenger_jijian() {
        return passenger_jijian;
    }

    public void setPassenger_jijian(int passenger_jijian) {
        this.passenger_jijian = passenger_jijian;
    }

    public int getPassenger_backranyou() {
        return passenger_backranyou;
    }

    public void setPassenger_backranyou(int passenger_backranyou) {
        this.passenger_backranyou = passenger_backranyou;
    }

    public int getPassenger_backjijian() {
        return passenger_backjijian;
    }

    public void setPassenger_backjijian(int passenger_backjijian) {
        this.passenger_backjijian = passenger_backjijian;
    }

    public String getPassenger_gocw() {
        return passenger_gocw;
    }

    public void setPassenger_gocw(String passenger_gocw) {
        this.passenger_gocw = passenger_gocw;
    }

    public String getPassenger_backcw() {
        return passenger_backcw;
    }

    public void setPassenger_backcw(String passenger_backcw) {
        this.passenger_backcw = passenger_backcw;
    }

    public int getPassenger_isbenren() {
        return passenger_isbenren;
    }

    public void setPassenger_isbenren(int passenger_isbenren) {
        this.passenger_isbenren = passenger_isbenren;
    }

    public String getPassenger_baoxianhao() {
        return passenger_baoxianhao;
    }

    public void setPassenger_baoxianhao(String passenger_baoxianhao) {
        this.passenger_baoxianhao = passenger_baoxianhao;
    }

    public int getPassenger_pirce() {
        return passenger_pirce;
    }

    public void setPassenger_pirce(int passenger_pirce) {
        this.passenger_pirce = passenger_pirce;
    }

    public int getPassenger_backpirce() {
        return passenger_backpirce;
    }

    public void setPassenger_backpirce(int passenger_backpirce) {
        this.passenger_backpirce = passenger_backpirce;
    }
}
