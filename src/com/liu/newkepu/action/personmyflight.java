package com.liu.newkepu.action;

import com.liu.newkepu.dao.FlightnameDao;
import com.liu.newkepu.dao.HangkonggsDao;
import com.liu.newkepu.dao.MyflightDao;
import com.liu.newkepu.model.Hangkonggs;
import com.liu.newkepu.model.Myflight;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Component("personmyflight")
public class personmyflight extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private MyflightDao myflightDao;

    @Resource
    private HangkonggsDao hangkonggsDao;

    @Resource
    private FlightnameDao flightnameDao;

    @Resource
    private SessionFactory sessionFactory;

    private List<Myflight> myflights;

    private List<String> zongfei;

    @Override
    public String execute() throws Exception {
        zongfei = new ArrayList<>();
        int zonglicheng = 0;
        int zongxiaoshi = 0;
        int zongfenzhong = 0;
        HttpServletRequest request = ServletActionContext.getRequest();
        myflights = myflightDao.findBymember_id(request.getSession().getAttribute("member_id").toString());
        List<Hangkonggs> hangkonggses = hangkonggsDao.findAll();
        for (Myflight myflight : myflights) {
            sessionFactory.getCurrentSession().evict(myflight);
            myflight.setMyflight_no(myflight.getMyflight_company() + myflight.getMyflight_no());
            myflight.setMyflight_from(flightnameDao.findBysanzima(myflight.getMyflight_from()).getD());
            myflight.setMyflight_arrivate(flightnameDao.findBysanzima(myflight.getMyflight_arrivate()).getD());
            zonglicheng = zonglicheng + Integer.valueOf(myflight.getMyflight_tpm());
            String ftime = myflight.getMyflight_from_time();
            String atime = myflight.getMyflight_arrivate_time();
            String[] aftime = ftime.split(":");
            int a = Integer.valueOf(aftime[0]);
            int b = Integer.valueOf(aftime[1]);
            int c =0;
            int d =0;
            if (atime.endsWith("+1")) {
                c = 0;
                d = Integer.valueOf(atime.substring(2,4));
                System.out.println(d);
            } else {
                String[] aatime = atime.split(":");
                c = Integer.valueOf(aatime[0]);
                d = Integer.valueOf(aatime[1]);
            }
            if (c < a) {
                c = c + 24;
            }
            int jieguo = (a * 60 + b) - (c * 60 + d);
            if (jieguo <= 0) {
                jieguo = -jieguo;
            }
            zongxiaoshi = jieguo / 60 + zongxiaoshi;
            zongfenzhong = jieguo % 60 + zongfenzhong;
            for (Hangkonggs hangkonggse : hangkonggses) {
                if (myflight.getMyflight_company().equals(hangkonggse.getCode())) {
                    myflight.setMyflight_company(hangkonggse.getJcname());
                    break;
                }
            }
        }
        zongxiaoshi = zongxiaoshi + zongfenzhong/60;
        zongfenzhong = zongfenzhong%60;
        zongfei.add(String.valueOf(zonglicheng));
        zongfei.add(String.valueOf(zongxiaoshi));
        zongfei.add(String.valueOf(zongfenzhong));
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Myflight> getMyflights() {
        return myflights;
    }

    public void setMyflights(List<Myflight> myflights) {
        this.myflights = myflights;
    }

    public List<String> getZongfei() {
        return zongfei;
    }

    public void setZongfei(List<String> zongfei) {
        this.zongfei = zongfei;
    }
}
