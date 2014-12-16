package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_vmoney")
public class Xunizhanghu {
    private String vmoney_id;
    private double vmoney_number;
    private double vmoney_cardnum;
    private Double vmoney_totalspend;
    private int vmoney_state;
    private String vmoney_member_id;
    private int vmoney_paycardnum;
    private int vmoney_isgszh;
    private int vmoney_jifen;

    @Id
    public String getVmoney_id() {
        return vmoney_id;
    }

    public void setVmoney_id(String vmoney_id) {
        this.vmoney_id = vmoney_id;
    }

    public double getVmoney_number() {
        return vmoney_number;
    }

    public void setVmoney_number(double vmoney_number) {
        this.vmoney_number = vmoney_number;
    }

    public double getVmoney_cardnum() {
        return vmoney_cardnum;
    }

    public void setVmoney_cardnum(double vmoney_cardnum) {
        this.vmoney_cardnum = vmoney_cardnum;
    }

    public Double getVmoney_totalspend() {
        return vmoney_totalspend;
    }

    public void setVmoney_totalspend(Double vmoney_totalspend) {
        this.vmoney_totalspend = vmoney_totalspend;
    }

    public int getVmoney_state() {
        return vmoney_state;
    }

    public void setVmoney_state(int vmoney_state) {
        this.vmoney_state = vmoney_state;
    }

    public String getVmoney_member_id() {
        return vmoney_member_id;
    }

    public void setVmoney_member_id(String vmoney_member_id) {
        this.vmoney_member_id = vmoney_member_id;
    }

    public int getVmoney_paycardnum() {
        return vmoney_paycardnum;
    }

    public void setVmoney_paycardnum(int vmoney_paycardnum) {
        this.vmoney_paycardnum = vmoney_paycardnum;
    }

    public int getVmoney_isgszh() {
        return vmoney_isgszh;
    }

    public void setVmoney_isgszh(int vmoney_isgszh) {
        this.vmoney_isgszh = vmoney_isgszh;
    }

    public int getVmoney_jifen() {
        return vmoney_jifen;
    }

    public void setVmoney_jifen(int vmoney_jifen) {
        this.vmoney_jifen = vmoney_jifen;
    }
}
