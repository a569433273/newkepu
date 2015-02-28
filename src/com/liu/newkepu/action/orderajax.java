package com.liu.newkepu.action;


import com.liu.newkepu.dao.LianxirenDao;
import com.liu.newkepu.dao.TravellerDao;
import com.liu.newkepu.model.Lianxiren;
import com.liu.newkepu.model.Traveller;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Component("orderajax")
public class orderajax extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private TravellerDao travellerDao;

    @Resource
    private LianxirenDao lianxirenDao;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        String tmember_id = request.getSession().getAttribute("member_id").toString();
        if (searchInfo.getChangyong() == 1) {
            List<Traveller> travellers = travellerDao.findBymember_id(tmember_id);
            Document document = DocumentHelper.createDocument();
            Element rootelement = document.addElement("Message");
            Element travllerselement = rootelement.addElement("Travllers");
            for (Traveller traveller : travellers) {
                Element travllerelement = travllerselement.addElement("Travller");
                Element nameelement = travllerelement.addElement("name");
                nameelement.addText(traveller.getTraveller_name());
                //注册帐号是否本人，0是，1否
                Element benrenelement = travllerelement.addElement("benren");
                benrenelement.addText(String.valueOf(traveller.getTraveller_isbenren()));
                //人类型，成人0儿童1
                Element typeelement = travllerelement.addElement("type");
                typeelement.addText(String.valueOf(traveller.getTraveller_type()));
                //证件类型，0 身份证 1 护照 4 其他
                Element zjtypeelement = travllerelement.addElement("zjtype");
                zjtypeelement.addText(String.valueOf(traveller.getTraveller_papers_type()));
                Element zjnumelement = travllerelement.addElement("zjnum");
                if (zjtypeelement.getText().equals("0")) {
                    zjnumelement.addText(traveller.getTraveller_sf_num());
                } else if (zjtypeelement.getText().equals("1")) {
                    zjnumelement.addText(traveller.getTraveller_hz_num());
                }else if(zjtypeelement.getText().equals("2")) {
                    zjnumelement.addText((traveller.getTraveller_jug_num()));
                }else {
                    zjnumelement.addText(traveller.getTraveller_qt_num());
                }
                Element sexelement = travllerelement.addElement("sex");
                sexelement.addText(traveller.getTraveller_sex());
                Element birthelement = travllerelement.addElement("birth");
                birthelement.addText(traveller.getTraveller_birth());
            }
            returnxml(document);
        } else {
            List<Lianxiren> lianxirens = lianxirenDao.findBymember_id(tmember_id);
            Document document = DocumentHelper.createDocument();
            Element rootelement = document.addElement("Message");
            Element travllerselement = rootelement.addElement("Travllers");
            for (Lianxiren lianxiren : lianxirens) {
                Element travllerelement = travllerselement.addElement("Travller");
                Element nameelement = travllerelement.addElement("name");
                nameelement.addText(lianxiren.getLianxiren_name());
                Element telelement = travllerelement.addElement("tel");
                telelement.addText(String.valueOf(lianxiren.getLianxiren_phone()));
                Element emailelement = travllerelement.addElement("mail");
                emailelement.addText(lianxiren.getLianxiren_email());
            }
            returnxml(document);
        }
        return null;
    }

    @Override
    public Object getModel() {
        return searchInfo;
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
