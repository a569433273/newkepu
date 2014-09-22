package com.liu.newkepu.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.springframework.stereotype.Component;
import org.tempuri.Service;

import com.liu.newkepu.dao.FdpriceDao;
import com.liu.newkepu.dao.FlightnameDao;
import com.liu.newkepu.dao.HangbanDao;
import com.liu.newkepu.dao.TuigaiDao;
import com.liu.newkepu.model.Fdprice;
import com.liu.newkepu.model.Flightname;
import com.liu.newkepu.model.Tuigai;
import com.liu.newkepu.util.ZhengzeUtil;
import com.liu.newkepu.vo.searchInfo;
import com.liu.newkepu.model.Hangban;
import com.liu.newkepu.util.riqizhuan;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

@Component("searchplane")
public class searchplane extends ActionSupport implements ModelDriven<Object> {

	private searchInfo searchInfo = new searchInfo();

	@Resource
	private FlightnameDao flightnameDao;

	@Resource
	private FdpriceDao fdpriceDao;

	@Resource
	private HangbanDao hangbanDao;

	@Resource
	private TuigaiDao tuigaiDao;

	@Override
	public String execute() throws Exception {
		String from = getsanzima(searchInfo.getFrom());
		String arrival = getsanzima(searchInfo.getArrival());
		String resultsString = searchresult(from, arrival);

		List<Fdprice> fdprices = getFdprices(from, arrival);
		shihefdprice(fdprices);
		Document document = DocumentHelper.parseText(resultsString);
		Element rootElement = document.getRootElement();
		Iterator<?> iter = rootElement.elements("Item").iterator();
		while (iter.hasNext()) {
			Element item = (Element) iter.next();
			if (item.element("FlightType").getText().equals("S")) {
				rootElement.remove(item);
			} else {
				// savehangban(item);
				removeuseable(item);
				addpricetoXML(item, fdprices);
				addtuigai(item);
				addjichang(item);
			}
		}
		returnxml(document);
		return null;
	}

	@Override
	public Object getModel() {
		// TODO Auto-generated method stub
		return searchInfo;
	}

	/**
	 * 通过正则表达式格式化输入的城市，获得对应的三字码
	 * 
	 * @param fromandarrival
	 *            出发或到达的前台(WEB)输入信息
	 * @return 城市的三字码
	 * @author 刘健
	 */
	private String getsanzima(String fromandarrival) {
		ZhengzeUtil zhengzeUtil = new ZhengzeUtil();
		List<Flightname> list = new ArrayList<Flightname>();

		/*
		 * 针对格式为 北京(NAY)
		 */
		List<String> fromandarrivalList = zhengzeUtil.zhengze(fromandarrival,
				"[A-Z]{3}");

		if (fromandarrivalList.size() == 0) {

			/*
			 * 针对格式为 北京(beijing)
			 */
			fromandarrivalList = zhengzeUtil.zhengze(fromandarrival, ".*[(]");

			if (fromandarrivalList.size() != 0) {
				fromandarrivalList.set(
						0,
						fromandarrivalList.get(0).substring(0,
								fromandarrivalList.get(0).length() - 1));
				list = flightnameDao.findBychengshi(fromandarrivalList.get(0));
				fromandarrivalList.set(0, list.get(0).getSanzima());
			} else {
				/*
				 * 针对格式为 北京
				 */
				list = flightnameDao.findBychengshi(fromandarrival);
				if (fromandarrivalList.size() > 0) {
					fromandarrivalList.add(list.get(0).getSanzima());
				} else {
					return null;
				}
			}

			/*
			 * 当输入文本获得的城市为北京或上海时，调数据库查询返回的第一个结果分别是NAY和PVG
			 * 这两个三字码在下一步的查询中不能查到该地完全的航班信息所以要修改下
			 */
			if (fromandarrivalList.get(0).equals("NAY")) {
				fromandarrivalList.set(0, "PEK");
			}
			if (fromandarrivalList.get(0).equals("PVG")) {
				fromandarrivalList.set(0, "SHA");
			}
		}
		return fromandarrivalList.get(0);
	}

	/**
	 * 调用接口获得航线信息
	 * 
	 * @param from
	 *            出发地
	 * @param arrival
	 *            目的地
	 * 
	 * @return 查询接口返回的XML
	 * @author 刘健
	 */
	private String searchresult(String from, String arrival) {
		String identity = "<?xml version='1.0' encoding='utf-8'?><Identity_1_0><ABEConnectionString>User=liujian;Password=123456;Server=119.161.188.35;Port=350;MaxPages=20;</ABEConnectionString></Identity_1_0>";
		String request = "<?xml version='1.0'?><ABE_AVDataset_1_2><From>"
				+ from
				+ "</From><Arrive>"
				+ arrival
				+ "</Arrive><Date>"
				+ searchInfo.getFromdata()
				+ "</Date><Carrier></Carrier><Time>0000</Time><StopType>D</StopType><Option>;CP</Option><MaxNum/></ABE_AVDataset_1_2>";
		String filter = "";
		Service service = new Service();
		return service.getServiceSoap().abeSubmit(identity, request, filter);
	}

	/**
	 * 调用数据库获取FD价格
	 * 
	 * @param from
	 *            起飞地
	 * 
	 * @param arrival
	 *            目的地
	 * 
	 * @return 各航空公司该航段的FD价格
	 * @author 刘健
	 */
	private List<Fdprice> getFdprices(String from, String arrival) {
		List<Fdprice> fdprices = fdpriceDao.findByqifeianddaoda(from, arrival);
		// 在查询PEK北京首都机场出发的时候，一般是要加上NAY北京南苑出发的，SHA上海虹桥出发的，也是一般加上PVG上海浦东
		if (from.equals("PEK")) {
			fdprices.addAll(getFdprices("NAY", arrival));
		} else if (from.equals("SHA")) {
			fdprices.addAll(getFdprices("PVG", arrival));
		}
		if (arrival.equals("PEK")) {
			fdprices.addAll(getFdprices(from, "NAY"));
		} else if (arrival.equals("SHA")) {
			fdprices.addAll(getFdprices(from, "PVG"));
		}
		return fdprices;
	}

	/**
	 * 根据WEB传来的查询日期，去掉价格中不符合该日期的价格
	 * 
	 * @param fdprices
	 *            需要处理的价格List
	 * 
	 * @author 刘健
	 */
	private void shihefdprice(List<Fdprice> fdprices) {
		riqizhuan riqizhuan = new riqizhuan();
		String kaishi;
		String jieshu;
		String data = searchInfo.getFromdata();
		for (int i = 0; i < fdprices.size(); i++) {
			kaishi = fdprices.get(i).getKaishi();
			jieshu = fdprices.get(i).getJieshu();
			// 比较查询日期和价格中的开始日期和结束日期的关系
			if (!jieshu.equals("")) {
				if (Integer.valueOf(riqizhuan.switchriqi(kaishi).replaceAll(
						"-", "")) <= Integer.valueOf(data.replaceAll("-", ""))
						& Integer.valueOf(data.replaceAll("-", "")) <= Integer
								.valueOf(riqizhuan.switchriqi(jieshu)
										.replaceAll("-", ""))) {
				} else {
					fdprices.remove(i);
					i--;
				}
			} else {
				if (Integer.valueOf(riqizhuan.switchriqi(kaishi).replaceAll(
						"-", "")) >= Integer.valueOf(data.replaceAll("-", ""))) {
					fdprices.remove(i);
					i--;
				}
			}
		}
	}

	/**
	 * 给XML添加fdprice价格
	 * 
	 * @param item
	 *            添加价格的节点
	 * 
	 * @param fdprices
	 *            添加进XML的价格
	 * 
	 * @author 刘健
	 */
	private void addpricetoXML(Element item, List<Fdprice> fdprices) {
		String UsableClass[] = item.elementText("UsableClass").split(" ");
		Element classesElement = item.addElement("Classes");
		for (int i = 0; i < fdprices.size(); i++) {
			// 根据航空公司，起飞地，目的地，添加价格
			if (fdprices.get(i).getHangkonggongsi()
					.equals(item.element("Carrier").getText())
					& fdprices.get(i).getQifei()
							.equals(item.element("BoardPoint").getText())
					& fdprices.get(i).getDaoda()
							.equals(item.element("OffPoint").getText())) {
				for (int j = 0; j < UsableClass.length; j++) {
					String string = UsableClass[j];
					if (string != null || string != "") {
						if (string.substring(0, 1).equals(
								fdprices.get(i).getCangwei())) {
							Element classElement = classesElement
									.addElement("Class");
							classElement.addAttribute("Code",
									string.substring(0, 1));
							classElement.addAttribute("Seat",
									string.substring(1, 2));
							classElement.addAttribute("Price", fdprices.get(i)
									.getPrice());
							classElement.addAttribute("Ext", "");
						}
					}
				}
			}
			item.remove(item.element("UsableClass"));
		}
	}

	/**
	 * 给舱位添加退改签规则
	 * 
	 * @param item
	 *            添加退改签的节点
	 * 
	 * @author 刘健
	 */
	private void addtuigai(Element item) {
		Element classes = item.element("Classes");
		List<Tuigai> tuigais = tuigaiDao.findByhangkonggongsi(item
				.elementText("Carrier"));
		for (Iterator<?> iterator = classes.elementIterator(); iterator
				.hasNext();) {
			Element tgq = (Element) iterator.next();
			tgq.addAttribute("tuipiao", "");
			tgq.addAttribute("gaiqi", "");
			tgq.addAttribute("qianzhuan", "");
			for (int i = 0; i < tuigais.size(); i++) {
				if (tgq.attributeValue("Code").equals(
						tuigais.get(i).getCangwei())) {
					tgq.addAttribute("tuipiao", tuigais.get(i).getTuipiao());
					tgq.addAttribute("gaiqi", tuigais.get(i).getGaiqi());
					tgq.addAttribute("qianzhuan", tuigais.get(i).getQianzhuan());
				}
			}
		}
	}

	/**
	 * 给每条数据加上机场
	 * 
	 * @param item
	 *            添加机场的节点
	 * 
	 * @author 刘健
	 */
	private void addjichang(Element item) {
		Element Boardairport = item.addElement("Boardairport");
		String qifeijichang = flightnameDao.findBysanzima(
				item.elementText("BoardPoint")).getJichang();
		Boardairport.addText(qifeijichang);

		Element Offairport = item.addElement("Offairport");
		String daodajichang = flightnameDao.findBysanzima(
				item.elementText("OffPoint")).getJichang();
		Offairport.addText(daodajichang);
	}

	/**
	 * 去掉XML中无用的元素和属性
	 * 
	 * @param item
	 *            需要去除的元素的节点
	 * 
	 * @author 刘健
	 */
	private void removeuseable(Element item) {
		item.remove(item.element("Class"));
		item.remove(item.element("ElementNo"));
		item.remove(item.element("ShareCarrier"));
		item.remove(item.element("ShareFlight"));
		item.remove(item.element("Meal"));
		item.remove(item.element("ETicket"));
		item.remove(item.element("ASR"));
		item.remove(item.element("LinkLevel"));
		item.remove(item.element("ClassEx"));
		item.remove(item.element("AirportTax"));
		item.remove(item.element("FuelSurTax"));
	}

	/**
	 * 存储最新的航班情况
	 * 
	 * @param item
	 *            在XML的哪一级节点下取元素
	 * 
	 * @author 刘健
	 */
	@SuppressWarnings("unused")
	private void savehangban(Element item) {
		Hangban hangban = new Hangban();
		hangban.setCarrier(item.elementText("Carrier"));
		hangban.setFlightno(item.elementText("FlightNo"));
		hangban.setBoardpoint(item.elementText("BoardPoint"));
		hangban.setOffpoint(item.elementText("OffPoint"));
		hangban.setDeparturedate(item.elementText("DepartureDate"));
		hangban.setDeparturetime(item.elementText("DepartureTime"));
		hangban.setArrivaldate(item.elementText("ArrivalDate"));
		hangban.setArrivaltime(item.elementText("ArrivalTime"));
		hangban.setAircraft(item.elementText("Aircraft"));
		hangban.setViaport(item.elementText("ViaPort"));
		hangban.setUsableclass(item.elementText("UsableClass"));
		hangban.setYclassprice(item.elementText("YClassPrice"));
		hangban.setBoardpointat(item.elementText("BoardPointAT"));
		hangban.setOffpointat(item.elementText("OffPointAT"));
		hangban.setFlighttime(item.elementText("FlightTime"));
		hangban.setTpm(item.elementText("TPM"));
		hangban.setSavetime(new Date());
		hangbanDao.save(hangban);
	}

	/**
	 * 返回结果XML给WEB
	 * 
	 * @param document
	 *            需要返回给WEB的XML
	 * 
	 * @author 刘健
	 * @throws IOException
	 */
	private void returnxml(Document document) throws IOException {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/xml;charset=gbk"); // （1）一定要在（2）的前面，不然会乱码
		response.setCharacterEncoding("GBK"); // （2）
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter out = response.getWriter(); // （3）一定要在（1）（2）的后面
		out.print(document.asXML());
		out.flush();
		out.close();
	}
}