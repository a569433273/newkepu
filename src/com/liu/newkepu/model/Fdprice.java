package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Fdprice {

	private int id;
	private String hangkonggongsi;
	private String qifei;
	private String daoda;
	private String cangwei;
	private String price;
	private String kaishi;
	private String jieshu;

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

	public String getCangwei() {
		return cangwei;
	}

	public void setCangwei(String cangwei) {
		this.cangwei = cangwei;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getKaishi() {
		return kaishi;
	}

	public void setKaishi(String kaishi) {
		this.kaishi = kaishi;
	}

	public String getJieshu() {
		return jieshu;
	}

	public void setJieshu(String jieshu) {
		this.jieshu = jieshu;
	}

}
