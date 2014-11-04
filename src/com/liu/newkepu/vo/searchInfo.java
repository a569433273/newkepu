package com.liu.newkepu.vo;

@SuppressWarnings("ALL")
public class searchInfo {

    /* 登陆页面传来的值 */
    private String username;
    private String password;

    /* 查询页面传来的值 */
    private String from;
    private String arrival;
    private String fromdata;

    /* 预订页面传来的值 */
    private String air_Name_1;
    private String tkoff_Name;
    private String tkoff_Time;
    private String land_Name;
    private String land_Time;
    private String Viaport_1;
    private String Saled_1;
    private String Price_1;
    private String Return_1;
    private String net_Price_1;
    private String mach_oil;
    private String Tmp_nm;
    private String type_aircft;
    private String tkoff_Id;
    private String land_Id;
    private String pasge_info;
    private String ck_name;
    private String check_tel;
    private String p_email;
    private String Kid_price;
    private int changyong;
    private int lianxi;
    private int benren;
    private String feixingtime;


    /*常用成绩人编辑和添加页面传来的值*/
    private String Nm1;
    private String Ptel1;
    private int Ctype1;
    private String CrdNo1;
    private String Bdate1;
    private int Ptype1;
    private String Sex1;
    private String Id1;
    private String deleteid;

    //注册页面传来的值
    private String u_name;
    private String u_pwd;
    private String u_tel;
    private String u_msg;
    private String u_weck;

    //我的资料页面传来的值
    private String pu_name;
    private String pu_ztel;
    private String pu_card;
    private String pu_tsex;
    private int pu_crdtp;
    private String pu_date;
    private String pu_resu;

    //会议搜索页面传来的值
    private String Mt_nm;

    //会议编辑页面传来的值
    private String Mdet_depart;
    private String Mdet_name;
    private String Mdet_city;
    private String Mdet_where;
    private int Mdet_pnum;
    private String Mdet_report;
    private int Mdet_partnum;
    private int Mdet_money;
    private int chuliid;

    //订单管理页面传来的值
    private String theorder;

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

    /**
     * 获得的数据格式为：
     * <p>
     * 1.北京(beijing)
     * </p>
     * <p>
     * 2.北京(NAY)
     * </p>
     * <p>
     * 3.北京
     * </p>
     *
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
     * <p>
     * 1.北京(beijing)
     * </p>
     * <p>
     * 2.北京(NAY)或黄岩(台州)(HYN)
     * </p>
     * <p>
     * 3.北京
     * </p>
     *
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
     * <p>
     * 2014-09-10
     * </p>
     *
     * @author 刘健
     */
    public String getFromdata() {
        return fromdata;
    }

    public void setFromdata(String fromdata) {
        this.fromdata = fromdata;
    }

    public String getAir_Name_1() {
        return air_Name_1;
    }

    public void setAir_Name_1(String air_Name_1) {
        this.air_Name_1 = air_Name_1;
    }

    public String getTkoff_Name() {
        return tkoff_Name;
    }

    public void setTkoff_Name(String tkoff_Name) {
        this.tkoff_Name = tkoff_Name;
    }

    public String getTkoff_Time() {
        return tkoff_Time;
    }

    public void setTkoff_Time(String tkoff_Time) {
        this.tkoff_Time = tkoff_Time;
    }

    public String getLand_Name() {
        return land_Name;
    }

    public void setLand_Name(String land_Name) {
        this.land_Name = land_Name;
    }

    public String getLand_Time() {
        return land_Time;
    }

    public void setLand_Time(String land_Time) {
        this.land_Time = land_Time;
    }

    public String getViaport_1() {
        return Viaport_1;
    }

    public void setViaport_1(String viaport_1) {
        Viaport_1 = viaport_1;
    }

    public String getSaled_1() {
        return Saled_1;
    }

    public void setSaled_1(String saled_1) {
        Saled_1 = saled_1;
    }

    public String getPrice_1() {
        return Price_1;
    }

    public void setPrice_1(String price_1) {
        Price_1 = price_1;
    }

    public String getReturn_1() {
        return Return_1;
    }

    public void setReturn_1(String return_1) {
        Return_1 = return_1;
    }

    public String getNet_Price_1() {
        return net_Price_1;
    }

    public void setNet_Price_1(String net_Price_1) {
        this.net_Price_1 = net_Price_1;
    }

    public String getMach_oil() {
        return mach_oil;
    }

    public void setMach_oil(String mach_oil) {
        this.mach_oil = mach_oil;
    }

    public String getTmp_nm() {
        return Tmp_nm;
    }

    public void setTmp_nm(String tmp_nm) {
        Tmp_nm = tmp_nm;
    }

    public String getType_aircft() {
        return type_aircft;
    }

    public void setType_aircft(String type_aircft) {
        this.type_aircft = type_aircft;
    }

    public String getTkoff_Id() {
        return tkoff_Id;
    }

    public void setTkoff_Id(String tkoff_Id) {
        this.tkoff_Id = tkoff_Id;
    }

    public String getLand_Id() {
        return land_Id;
    }

    public void setLand_Id(String land_Id) {
        this.land_Id = land_Id;
    }

    public String getPasge_info() {
        return pasge_info;
    }

    public void setPasge_info(String pasge_info) {
        this.pasge_info = pasge_info;
    }

    public String getCk_name() {
        return ck_name;
    }

    public void setCk_name(String ck_name) {
        this.ck_name = ck_name;
    }

    public String getCheck_tel() {
        return check_tel;
    }

    public void setCheck_tel(String check_tel) {
        this.check_tel = check_tel;
    }

    public String getP_email() {
        return p_email;
    }

    public void setP_email(String p_email) {
        this.p_email = p_email;
    }

    public String getKid_price() {
        return Kid_price;
    }

    public void setKid_price(String kid_price) {
        Kid_price = kid_price;
    }

    public int getChangyong() {
        return changyong;
    }

    public void setChangyong(int changyong) {
        this.changyong = changyong;
    }

    public int getLianxi() {
        return lianxi;
    }

    public void setLianxi(int lianxi) {
        this.lianxi = lianxi;
    }

    public int getBenren() {
        return benren;
    }

    public void setBenren(int benren) {
        this.benren = benren;
    }

    public String getFeixingtime() {
        return feixingtime;
    }

    public void setFeixingtime(String feixingtime) {
        this.feixingtime = feixingtime;
    }

    public String getNm1() {
        return Nm1;
    }

    public void setNm1(String nm1) {
        Nm1 = nm1;
    }

    public String getPtel1() {
        return Ptel1;
    }

    public void setPtel1(String ptel1) {
        Ptel1 = ptel1;
    }

    public int getCtype1() {
        return Ctype1;
    }

    public void setCtype1(int ctype1) {
        Ctype1 = ctype1;
    }

    public String getCrdNo1() {
        return CrdNo1;
    }

    public void setCrdNo1(String crdNo1) {
        CrdNo1 = crdNo1;
    }

    public String getBdate1() {
        return Bdate1;
    }

    public void setBdate1(String bdate1) {
        Bdate1 = bdate1;
    }

    public int getPtype1() {
        return Ptype1;
    }

    public void setPtype1(int ptype1) {
        Ptype1 = ptype1;
    }

    public String getSex1() {
        return Sex1;
    }

    public void setSex1(String sex1) {
        Sex1 = sex1;
    }

    public String getId1() {
        return Id1;
    }

    public void setId1(String id1) {
        Id1 = id1;
    }

    public String getDeleteid() {
        return deleteid;
    }

    public void setDeleteid(String deleteid) {
        this.deleteid = deleteid;
    }

    public String getU_name() {
        return u_name;
    }

    public void setU_name(String u_name) {
        this.u_name = u_name;
    }

    public String getU_pwd() {
        return u_pwd;
    }

    public void setU_pwd(String u_pwd) {
        this.u_pwd = u_pwd;
    }

    public String getU_tel() {
        return u_tel;
    }

    public void setU_tel(String u_tel) {
        this.u_tel = u_tel;
    }

    public String getU_msg() {
        return u_msg;
    }

    public void setU_msg(String u_msg) {
        this.u_msg = u_msg;
    }

    public String getU_weck() {
        return u_weck;
    }

    public void setU_weck(String u_weck) {
        this.u_weck = u_weck;
    }

    public String getPu_name() {
        return pu_name;
    }

    public void setPu_name(String pu_name) {
        this.pu_name = pu_name;
    }

    public String getPu_ztel() {
        return pu_ztel;
    }

    public void setPu_ztel(String pu_ztel) {
        this.pu_ztel = pu_ztel;
    }

    public String getPu_card() {
        return pu_card;
    }

    public void setPu_card(String pu_card) {
        this.pu_card = pu_card;
    }

    public String getPu_tsex() {
        return pu_tsex;
    }

    public void setPu_tsex(String pu_tsex) {
        this.pu_tsex = pu_tsex;
    }

    public int getPu_crdtp() {
        return pu_crdtp;
    }

    public void setPu_crdtp(int pu_crdtp) {
        this.pu_crdtp = pu_crdtp;
    }

    public String getPu_date() {
        return pu_date;
    }

    public void setPu_date(String pu_date) {
        this.pu_date = pu_date;
    }

    public String getPu_resu() {
        return pu_resu;
    }

    public void setPu_resu(String pu_resu) {
        this.pu_resu = pu_resu;
    }

    public String getMt_nm() {
        return Mt_nm;
    }

    public void setMt_nm(String mt_nm) {
        Mt_nm = mt_nm;
    }

    public String getMdet_depart() {
        return Mdet_depart;
    }

    public void setMdet_depart(String mdet_depart) {
        Mdet_depart = mdet_depart;
    }

    public String getMdet_name() {
        return Mdet_name;
    }

    public void setMdet_name(String mdet_name) {
        Mdet_name = mdet_name;
    }

    public String getMdet_city() {
        return Mdet_city;
    }

    public void setMdet_city(String mdet_city) {
        Mdet_city = mdet_city;
    }

    public String getMdet_where() {
        return Mdet_where;
    }

    public void setMdet_where(String mdet_where) {
        Mdet_where = mdet_where;
    }

    public int getMdet_pnum() {
        return Mdet_pnum;
    }

    public void setMdet_pnum(int mdet_pnum) {
        Mdet_pnum = mdet_pnum;
    }

    public String getMdet_report() {
        return Mdet_report;
    }

    public void setMdet_report(String mdet_report) {
        Mdet_report = mdet_report;
    }

    public int getMdet_partnum() {
        return Mdet_partnum;
    }

    public void setMdet_partnum(int mdet_partnum) {
        Mdet_partnum = mdet_partnum;
    }

    public int getMdet_money() {
        return Mdet_money;
    }

    public void setMdet_money(int mdet_money) {
        Mdet_money = mdet_money;
    }

    public int getChuliid() {
        return chuliid;
    }

    public void setChuliid(int chuliid) {
        this.chuliid = chuliid;
    }

    public String getTheorder() {
        return theorder;
    }

    public void setTheorder(String theorder) {
        this.theorder = theorder;
    }
}

