package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Tuigai {

	private int id;
	private String hangkonggongsi;
	private String cangwei;
	private String qifei;
	private String daoda;
	private String tuipiao;
	private String gaiqi;
	private String qianzhuan;
	private String cxzc_id;

	@Id
	@GeneratedValue
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getHangkonggongsi() {
		return hangkonggongsi;
	}

	public void setHangkonggongsi(String hangkonggongsi) {
		this.hangkonggongsi = hangkonggongsi;
	}

	public String getCangwei() {
		return cangwei;
	}

	public void setCangwei(String cangwei) {
		this.cangwei = cangwei;
	}

	public String getQifei() {
		return qifei;
	}

	public void setQifei(String qifei) {
		this.qifei = qifei;
	}

	public String getDaoda() {
		return daoda;
	}

	public void setDaoda(String daoda) {
		this.daoda = daoda;
	}

	public String getTuipiao() {
		return tuipiao;
	}

	public void setTuipiao(String tuipiao) {
		this.tuipiao = tuipiao;
	}

	public String getGaiqi() {
		return gaiqi;
	}

	public void setGaiqi(String gaiqi) {
		this.gaiqi = gaiqi;
	}

	public String getQianzhuan() {
		return qianzhuan;
	}

	public void setQianzhuan(String qianzhuan) {
		this.qianzhuan = qianzhuan;
	}

	public String getCxzc_id() {
		return cxzc_id;
	}

	public void setCxzc_id(String cxzc_id) {
		this.cxzc_id = cxzc_id;
	}

}
