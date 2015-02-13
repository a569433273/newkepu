package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_vmrecord")
public class Caiwu {
    private String vmrecord_id;
    private String vmrecord_type;
    private String vmrecord_time;
    private int vmrecord_money;
    private int vmrecord_number;
    private String vmrecord_orderid;
    private String vmrecord_beizhu;
    private String vmrecord_member_id;
    private String vmrecord_caozuoren;
    private String vmrecord_remark;
    private String vmrecord_order_type;
    private String vmrecord_pay_type;

    @Id
    public String getVmrecord_id() {
        return vmrecord_id;
    }

    public void setVmrecord_id(String vmrecord_id) {
        this.vmrecord_id = vmrecord_id;
    }

    public String getVmrecord_type() {
        return vmrecord_type;
    }

    public void setVmrecord_type(String vmrecord_type) {
        this.vmrecord_type = vmrecord_type;
    }

    public int getVmrecord_money() {
        return vmrecord_money;
    }

    public void setVmrecord_money(int vmrecord_money) {
        this.vmrecord_money = vmrecord_money;
    }

    public String getVmrecord_time() {
        return vmrecord_time;
    }

    public void setVmrecord_time(String vmrecord_time) {
        this.vmrecord_time = vmrecord_time;
    }

    public int getVmrecord_number() {
        return vmrecord_number;
    }

    public void setVmrecord_number(int vmrecord_number) {
        this.vmrecord_number = vmrecord_number;
    }

    public String getVmrecord_orderid() {
        return vmrecord_orderid;
    }

    public void setVmrecord_orderid(String vmrecord_orderid) {
        this.vmrecord_orderid = vmrecord_orderid;
    }

    public String getVmrecord_beizhu() {
        return vmrecord_beizhu;
    }

    public void setVmrecord_beizhu(String vmrecord_beizhu) {
        this.vmrecord_beizhu = vmrecord_beizhu;
    }

    public String getVmrecord_member_id() {
        return vmrecord_member_id;
    }

    public void setVmrecord_member_id(String vmrecord_member_id) {
        this.vmrecord_member_id = vmrecord_member_id;
    }

    public String getVmrecord_caozuoren() {
        return vmrecord_caozuoren;
    }

    public void setVmrecord_caozuoren(String vmrecord_caozuoren) {
        this.vmrecord_caozuoren = vmrecord_caozuoren;
    }

    public String getVmrecord_remark() {
        return vmrecord_remark;
    }

    public void setVmrecord_remark(String vmrecord_remark) {
        this.vmrecord_remark = vmrecord_remark;
    }

    public String getVmrecord_order_type() {
        return vmrecord_order_type;
    }

    public void setVmrecord_order_type(String vmrecord_order_type) {
        this.vmrecord_order_type = vmrecord_order_type;
    }

    public String getVmrecord_pay_type() {
        return vmrecord_pay_type;
    }

    public void setVmrecord_pay_type(String vmrecord_pay_type) {
        this.vmrecord_pay_type = vmrecord_pay_type;
    }
}
