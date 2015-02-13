package com.liu.newkepu.action;


import com.liu.newkepu.dao.TravellerDao;
import com.liu.newkepu.model.Traveller;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.UUID;

@Component("travllerchuli")
public class travllerchuli extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private TravellerDao travellerDao;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        if (searchInfo.getDeleteid().equals("1")) {
            //Id1为1，新增，有值就是update
            if (searchInfo.getId1().equals("1")) {
                SaveNewTravller(request);
            } else {
                UpdateTravller(request);
            }
        } else {
            Traveller traveller = travellerDao.load(searchInfo.getDeleteid());
            travellerDao.delete(traveller);
            searchInfo.setDeleteid("1");
        }
        return "success";
    }

    /**
     * 更新常旅客信息
     *
     * @author 刘健
     */
    private void UpdateTravller(HttpServletRequest request) {
        Traveller traveller = travellerDao.load(searchInfo.getId1());
        Savetravllermessage(request, traveller);
        travellerDao.update(traveller);
    }

    /**
     * 保存常旅客信息
     *
     * @author 刘健
     */
    private void SaveNewTravller(HttpServletRequest request) {
        Traveller traveller = new Traveller();
        traveller.setTraveller_id(UUID.randomUUID().toString());
        Savetravllermessage(request, traveller);
        travellerDao.save(traveller);
    }

    private void Savetravllermessage(HttpServletRequest request, Traveller traveller) {
        traveller.setTraveller_name(searchInfo.getNm1());
        traveller.setTraveller_type(String.valueOf(searchInfo.getPtype1()));
        traveller.setTraveller_papers_type(searchInfo.getCtype1());
        switch (Integer.valueOf(searchInfo.getCtype1())) {
            case 0:
                traveller.setTraveller_sf_num(searchInfo.getCrdNo1());
                break;
            case 1:
                traveller.setTraveller_hz_num(searchInfo.getCrdNo1());
                break;
            case 4:
                traveller.setTraveller_qt_num(searchInfo.getCrdNo1());
                break;
        }
        traveller.setTraveller_sex(searchInfo.getSex1());
        traveller.setTraveller_birth(searchInfo.getBdate1());
        traveller.setTraveller_member_id(request.getSession().getAttribute("member_id").toString());
//        traveller.setTraveller_phone(searchInfo.getPtel1());
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }
}
