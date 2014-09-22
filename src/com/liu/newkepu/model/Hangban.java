package com.liu.newkepu.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Hangban {
	private int id;
	private String carrier;
	private String flightno;
	private String boardpoint;
	private String offpoint;
	private String departuredate;
	private String departuretime;
	private String arrivaldate;
	private String arrivaltime;
	private String aircraft;
	private String viaport;
	private String usableclass;
	private String yclassprice;
	private String tpm;
	private String boardpointat;
	private String offpointat;
	private String flighttime;
	private Date savetime;

	@Id
	@GeneratedValue
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCarrier() {
		return carrier;
	}

	public void setCarrier(String carrier) {
		this.carrier = carrier;
	}

	public String getFlightno() {
		return flightno;
	}

	public void setFlightno(String flightno) {
		this.flightno = flightno;
	}

	public String getBoardpoint() {
		return boardpoint;
	}

	public void setBoardpoint(String boardpoint) {
		this.boardpoint = boardpoint;
	}

	public String getOffpoint() {
		return offpoint;
	}

	public void setOffpoint(String offpoint) {
		this.offpoint = offpoint;
	}

	public String getDeparturedate() {
		return departuredate;
	}

	public void setDeparturedate(String departuredate) {
		this.departuredate = departuredate;
	}

	public String getDeparturetime() {
		return departuretime;
	}

	public void setDeparturetime(String departuretime) {
		this.departuretime = departuretime;
	}

	public String getArrivaldate() {
		return arrivaldate;
	}

	public void setArrivaldate(String arrivaldate) {
		this.arrivaldate = arrivaldate;
	}

	public String getArrivaltime() {
		return arrivaltime;
	}

	public void setArrivaltime(String arrivaltime) {
		this.arrivaltime = arrivaltime;
	}

	public String getAircraft() {
		return aircraft;
	}

	public void setAircraft(String aircraft) {
		this.aircraft = aircraft;
	}

	public String getViaport() {
		return viaport;
	}

	public void setViaport(String viaport) {
		this.viaport = viaport;
	}

	public String getUsableclass() {
		return usableclass;
	}

	public void setUsableclass(String usableclass) {
		this.usableclass = usableclass;
	}

	public String getYclassprice() {
		return yclassprice;
	}

	public void setYclassprice(String yclassprice) {
		this.yclassprice = yclassprice;
	}

	public String getTpm() {
		return tpm;
	}

	public void setTpm(String tpm) {
		this.tpm = tpm;
	}

	public String getBoardpointat() {
		return boardpointat;
	}

	public void setBoardpointat(String boardpointat) {
		this.boardpointat = boardpointat;
	}

	public String getOffpointat() {
		return offpointat;
	}

	public void setOffpointat(String offpointat) {
		this.offpointat = offpointat;
	}

	public String getFlighttime() {
		return flighttime;
	}

	public void setFlighttime(String flighttime) {
		this.flighttime = flighttime;
	}

	public Date getSavetime() {
		return savetime;
	}

	public void setSavetime(Date savetime) {
		this.savetime = savetime;
	}

}
