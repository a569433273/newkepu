package com.liu.newkepu.action;

import com.liu.newkepu.dao.TravellerDao;
import com.liu.newkepu.dao.YanzhengtempDao;
import com.liu.newkepu.model.Traveller;
import com.liu.newkepu.model.Yanzhengtemp;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

@Component("yanzhentask")
public class yanzhentask {

    @Resource
    private YanzhengtempDao yanzhengtempDao;

    @Scheduled(cron = "0 0/5 * * * ?")
    public void yanzhengtask() {
        Calendar calendar = Calendar.getInstance();
        DateFormat fenzhongformat = new SimpleDateFormat("mm");
        int timenow = Integer.valueOf(fenzhongformat.format(calendar.getTime()));
        List<Yanzhengtemp> yanzhengtemps = yanzhengtempDao.fingall();
        int shijiancha = 0;
        for (Yanzhengtemp yanzhengtemp : yanzhengtemps) {
            int yanzhengmatime = yanzhengtemp.getFenzhong();
            if (yanzhengmatime > timenow) {
                shijiancha = (timenow + 60) - yanzhengmatime;
            } else {
                shijiancha = timenow - yanzhengmatime;
            }
            if (shijiancha > 5) {
                yanzhengtempDao.delete(yanzhengtemp);
            }
        }
    }
}
