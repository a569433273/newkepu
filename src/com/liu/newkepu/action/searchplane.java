package com.liu.newkepu.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.liu.newkepu.dao.*;
import com.liu.newkepu.model.*;
import org.apache.struts2.ServletActionContext;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.springframework.stereotype.Component;
import org.tempuri.Service;

import com.liu.newkepu.util.ZhengzeUtil;
import com.liu.newkepu.vo.searchInfo;
import com.liu.newkepu.util.riqizhuan;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

@Component("searchplane")
public class searchplane extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private FlightnameDao flightnameDao;

    @Resource
    private HangbanDao hangbanDao;

    @Resource
    private TuigaiDao tuigaiDao;

    @Resource
    private FdDao fdDao;

    @Override
    public String execute() throws Exception {
        Calendar calendar = Calendar.getInstance();
        DateFormat timedf = new SimpleDateFormat("yyyy-MM-dd");
        String riqi = timedf.format(calendar.getTime());

        String from = getsanzima(searchInfo.getFrom());
        String arrival = getsanzima(searchInfo.getArrival());
        String resultsString = searchresult(from, arrival, riqi);
        System.out.println(resultsString);
        Document document = DocumentHelper.parseText(resultsString);
        Element rootElement = document.getRootElement();
        Iterator<?> iter = rootElement.elements("Item").iterator();
        while (iter.hasNext()) {
            Element item = (Element) iter.next();
            if (item.element("FlightType").getText().equals("S")) {
                rootElement.remove(item);
                continue;
            }
            Iterator<?> classiter = item.element("Classes").elements("Class").iterator();
            while (classiter.hasNext()) {
                Element cla = (Element) classiter.next();
                if (cla.attributeValue("Price").equals("0")) {
                    item.element("Classes").remove(cla);
                }
            }
//            if (!classiter.hasNext()) {
//                rootElement.remove(item);
//            }
            addtuigai(item);
            addjichang(item);

        }
        returnxml(document);

        return null;
    }


    @Override
    public Object getModel() {
        return searchInfo;
    }

    /**
     * 通过正则表达式格式化输入的城市，获得对应的三字码
     *
     * @param fromandarrival 出发或到达的前台(WEB)输入信息
     * @return 城市的三字码
     * @author 刘健
     */
    private String getsanzima(String fromandarrival) {
        ZhengzeUtil zhengzeUtil = new ZhengzeUtil();
        List<FD> list = new ArrayList<FD>();

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
                list = fdDao.findBychengshi(fromandarrivalList.get(0));
                fromandarrivalList.set(0, list.get(0).getFdszm1());
            } else {
                /*
                 * 针对格式为 北京
				 */
                list = fdDao.findBychengshi(fromandarrival);
                if (list.size() > 0) {
                    fromandarrivalList.add(list.get(0).getFdszm1());
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
     * @param from    出发地
     * @param arrival 目的地
     * @return 查询接口返回的XML
     * @author 刘健
     */
    private String searchresult(String from, String arrival, String riqi) {
        System.out.println("开始接口查询");
        String time = "0000";
        Calendar calendar = Calendar.getInstance();
        if (searchInfo.getFromdata().equals(riqi)) {
            DateFormat dateFormat = new SimpleDateFormat("HHmm");
            time = dateFormat.format(calendar.getTime());
        }
        String identity = "<?xml version='1.0' encoding='utf-8'?><Identity_1_0><ABEConnectionString>User=liujian;Password=123456;Server=58.132.171.39;Port=350;MaxPages=20;</ABEConnectionString></Identity_1_0>";
        String request = "<?xml version='1.0'?><ABE_AVDataset_1_4><From>"
                + from
                + "</From><Arrive>"
                + arrival
                + "</Arrive><Date>"
                + searchInfo.getFromdata()
                + "</Date><Carrier></Carrier><Time>"
                + time
                + "</Time><StopType>D</StopType><Option>;CP</Option><MaxNum/></ABE_AVDataset_1_4>";
        String filter = "";
        Service service = new Service();
        return service.getServiceSoap().abeSubmit(identity, request, filter);
    }


    /**
     * 给XML添加促销价格
     *
     * @param item     添加价格的节点
     *
     * @author 刘健
     */
//

    /**
     * 给舱位添加退改签规则
     *
     * @param item 添加退改签的节点
     * @author 刘健
     */
    private void addtuigai(Element item) {
        Element classes = item.element("Classes");
        List<Tuigai> tuigais = tuigaiDao.findByhangkonggongsi(item
                .elementText("Carrier"));
        for (Iterator<?> iterator = classes.elementIterator(); iterator
                .hasNext(); ) {
            Element tgq = (Element) iterator.next();
            tgq.addAttribute("tuipiao", "");
            tgq.addAttribute("gaiqi", "");
            tgq.addAttribute("qianzhuan", "");
            for (Tuigai tuigai : tuigais) {
                if (tgq.attributeValue("Code").equals(
                        tuigai.getCangwei())) {
                    tgq.setAttributeValue("tuipiao", tuigai.getTuipiao());
                    tgq.setAttributeValue("gaiqi", tuigai.getGaiqi());
                    tgq.setAttributeValue("qianzhuan", tuigai.getQianzhuan());
                }
            }
        }
    }

    /**
     * 给每条数据加上机场
     *
     * @param item 添加机场的节点
     * @author 刘健
     */
    private void addjichang(Element item) {
        Element Boardairport = item.addElement("Boardairport");
        String qifeijichang = flightnameDao.findBysanzima(
                item.elementText("BoardPoint")).getD();
        Boardairport.addText(qifeijichang);

        Element Offairport = item.addElement("Offairport");
        String daodajichang = flightnameDao.findBysanzima(
                item.elementText("OffPoint")).getD();
        Offairport.addText(daodajichang);
    }

    /**
     * 去掉XML中无用的元素和属性
     *
     * @param item 需要去除的元素的节点
     * @author 刘健
     */
    private void removeuseable(Element item) {
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
     * @param item 在XML的哪一级节点下取元素
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
     * @param document 需要返回给WEB的XML
     * @throws java.io.IOException
     * @author 刘健
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
