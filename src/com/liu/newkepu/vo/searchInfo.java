package com.liu.newkepu.vo;

public class searchInfo {
	/* 登陆页面传来的值 */
	private String username;
	private String password;
	private String status;

	/* 查询页面传来的值 */
	private String from;
	private String arrival;
	private String fromdata;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * 获得的数据格式为：
	 * <p>1.北京(beijing)</p>
	 * <p>2.北京(NAY)</p>
	 * <p>3.北京</p>
	 * @author 刘健
	 */
	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	/**
	 * 获得的数据格式为：
	 * <p>1.北京(beijing)</p>
	 * <p>2.北京(NAY)</p>
	 * <p>3.北京</p>
	 * @author 刘健
	 */
	public String getArrival() {
		return arrival;
	}

	public void setArrival(String arrival) {
		this.arrival = arrival;
	}

	/**
	 * 获得的数据格式为：
	 * <p>2014-09-10</p>
	 * @author 刘健
	 */
	public String getFromdata() {
		return fromdata;
	}

	public void setFromdata(String fromdata) {
		this.fromdata = fromdata;
	}

}
