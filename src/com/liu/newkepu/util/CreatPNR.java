package com.liu.newkepu.util;

import com.liu.newkepu.model.Order;
import com.liu.newkepu.model.Passenger;
import org.tempuri.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;


public class CreatPNR {
    public String CreatPnr(Order order, List<Passenger> passengers) {
        Calendar calendar = Calendar.getInstance();
        DateFormat riqiformat = new SimpleDateFormat("yyyy-MM-dd");
        DateFormat xiaoshiformat = new SimpleDateFormat("HHmm");
        calendar.add(Calendar.HOUR, 2);
        String TicketLimitDate = riqiformat.format(calendar.getTime());
        String TicketLimitTime = xiaoshiformat.format(calendar.getTime());
        String Telephone = order.getFlight_lxrdh();
        String Carrier = order.getFlight_company();
        String FlightNo = order.getFlight_id();
        String ClassCode = passengers.get(0).getPassenger_gocw();
        ;
        String DepartureDate = order.getFlight_from_date();
        String DepartureTime = order.getFlight_from_time().replaceAll(":", "");
        String BoardPoint = order.getFlight_from();
        String OffPoint = order.getFlight_arrival();
        String Name = "";
        String CardNo = "";
        String BirthDay = "";
        String MobilePhone = order.getFlight_lxrdh();

        String identity = "<?xml version='1.0' encoding='utf-8'?><Identity_1_0><ABEConnectionString>User=liujian;Password=123456;Server=119.161.188.35;Port=350;MaxPages=20;</ABEConnectionString></Identity_1_0>";
        String requestBase = "<?xml version=\"1.0\" encoding=\"gb2312\"?><ABE_CreatePNR_1_2><TicketLimitDate>"
                + TicketLimitDate
                + "</TicketLimitDate><TicketLimitTime>"
                + TicketLimitTime
                + "</TicketLimitTime><Office>PEK460</Office><Telephone>"
                + Telephone
                + "</Telephone><RMKS><RMK/></RMKS>";
        String requestFlight = "<Flights><Flight><Carrier>"
                + Carrier
                + "</Carrier><FlightNo>"
                + FlightNo
                + "</FlightNo><ClassCode>"
                + ClassCode
                + "</ClassCode><DepartureDate>"
                + DepartureDate
                + "</DepartureDate><DepartureTime>"
                + DepartureTime
                + "</DepartureTime><BoardPoint>"
                + BoardPoint
                + "</BoardPoint><OffPoint>"
                + OffPoint
                + "</OffPoint></Flight></Flights>";

        String passenger = "";
        for (int i = 0; i < passengers.size(); i++) {
            if (passengers.get(i).getPassenger_type() == 1) {
                Name = passengers.get(i).getPassenger_name() + "CHD";
            } else {
                Name = passengers.get(i).getPassenger_name();
            }
            CardNo = passengers.get(i).getPassenger_papernum();
            BirthDay = passengers.get(i).getPassenger_birth();
            if (BirthDay == null) {
                BirthDay = "";
            }

            passenger = passenger + "<Passenger><Name>"
                    + Name
                    + "</Name><CardNo>"
                    + CardNo
                    + "</CardNo><BirthDay>"
                    + BirthDay
                    + "</BirthDay><Country></Country><MobilePhone>"
                    + MobilePhone
                    + "</MobilePhone><CarrierCard></CarrierCard></Passenger>";
        }
        String requestPassenger = "<Passengers>" + passenger + "</Passengers>"
                + "<OtherSegments><OtherSegment></OtherSegment></OtherSegments></ABE_CreatePNR_1_2>";
        String filter = "";
        String request = requestBase + requestFlight + requestPassenger;
        Service service = new Service();
        String returnString = service.getServiceSoap().abeSubmit(identity, request, filter);
        return returnString;
    }
}
