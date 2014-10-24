package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_hytz")
public class Huiyitongzhi {
    private String hytz_id;
    private String hytz_bt;
    private String hytz_nr;
    private String hytz_date;
    private String hytz_meeting_id;

    @Id
    public String getHytz_id() {
        return hytz_id;
    }

    public void setHytz_id(String hytz_id) {
        this.hytz_id = hytz_id;
    }

    public String getHytz_bt() {
        return hytz_bt;
    }

    public void setHytz_bt(String hytz_bt) {
        this.hytz_bt = hytz_bt;
    }

    public String getHytz_nr() {
        return hytz_nr;
    }

    public void setHytz_nr(String hytz_nr) {
        this.hytz_nr = hytz_nr;
    }

    public String getHytz_date() {
        return hytz_date;
    }

    public void setHytz_date(String hytz_date) {
        this.hytz_date = hytz_date;
    }

    public String getHytz_meeting_id() {
        return hytz_meeting_id;
    }

    public void setHytz_meeting_id(String hytz_meeting_id) {
        this.hytz_meeting_id = hytz_meeting_id;
    }
}
