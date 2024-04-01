"use client";
import { getAllBanner, getBannerList } from "@/app/redux-store/banner/slice";
import { getCategory, getCategoryList } from "@/app/redux-store/category/slice";
import { useAppDispatch, useAppSelector } from "@/app/redux-store/hook";
import { getAllLogo, getLogoList } from "@/app/redux-store/logo/slice";
import { getNewsByCategory, getNewsList } from "@/app/redux-store/news/slice";
import { getNewsRight, getRightList } from "@/app/redux-store/right/slice";
import { Typography } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import "./filesx/bootstrap.css";
import "./filesx/colorstyle1.css";
import "./filesx/jquerynice-select.css";
import "./filesx/portal-congtinh.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { updateNewsView } from "@/app/redux-store/update-view/slice";
interface HomeItem {
  TenDanhMuc: number;

  news?: {
    ID: number;
    TenDanhMuc: string;
    createBy: string;
    createDate: string;
    TieuDeChinh: string;
    TieuDePhu: string;
    TrangThai: string;
    NoiDung: string;
    LuotXem: number;
  };
}
interface NewItem {
  ID: number;
  TenDanhMuc: string;
  createBy: string;
  createDate: string;
  TieuDeChinh: string;
  TieuDePhu: string;
  TrangThai: string;
  NoiDung: string;
  LuotXem: number;
  HinhAnh: string;
}
interface LogoItem {
  ID: number;
  image: string;
}

interface BannerItem {
  ID: number;
  image: string;
}

interface LooseObject {
  [key: string]: any;
}

const DetailNews = () => {
  const dispatch = useAppDispatch();
  const newsList: NewItem[] = useAppSelector(getNewsList);
  const [newsListState, setNewsListState] = useState<NewItem[]>([]);

  const rightList: HomeItem[] = useAppSelector(getRightList);
  const [rightListState, setRightListState] = useState<HomeItem[]>([]);

  const [selectedNewsItem, setSelectedNewsItem] = useState<any>(null);
  const [data, setData] = useState<LooseObject>({
    TenDanhMuc: "",
    ID: 0,
  });

  const logoList: LogoItem[] = useAppSelector(getLogoList);
  const [logoListState, setLogoListState] = useState<LogoItem[]>([]);

  const bannerList: BannerItem[] = useAppSelector(getBannerList);
  const [bannerListState, setBannerListState] = useState<BannerItem[]>([]);

  useEffect(() => {
    const asyncCall = async () => {
      await dispatch(getAllLogo());
      await dispatch(getAllBanner());
      await dispatch(getNewsRight());
    };
    asyncCall();
  }, []);
  useEffect(() => {
    if (rightList) {
      setRightListState(rightList);
    }
  }, [rightList]);
  useEffect(() => {
    if (bannerList) {
      setBannerListState(bannerList);
    }
  }, [bannerList]);
  useEffect(() => {
    if (logoList) {
      setLogoListState(logoList);
    }
  }, [logoList]);

  useEffect(() => {
    const storedNewsItem = localStorage.getItem("newsItems");
    if (storedNewsItem) {
      setSelectedNewsItem(JSON.parse(storedNewsItem));
    }
  }, []);

  useEffect(() => {
    if (selectedNewsItem) {
      setData((prevData) => ({
        ...prevData,
        TenDanhMuc: selectedNewsItem.TenDanhMuc,
        ID: selectedNewsItem.ID,
      }));
    }
  }, [selectedNewsItem]);

  useEffect(() => {
    const asyncCall = async () => {
      if (data.TenDanhMuc !== "") {
        await dispatch(getNewsByCategory({ data }));
      }
    };

    asyncCall();
  }, [data, dispatch]);

  useEffect(() => {
    const asyncCall = async () => {
      if (data.ID !== 0) {
        // Đảm bảo data.ID không rỗng
        try {
          await dispatch(updateNewsView(data)); // Dispatch action updateNewsView với data
        } catch (error) {
          console.error("Error updating news view:", error);
        }
      }
    };

    asyncCall();
  }, [data, dispatch]);

  useEffect(() => {
    if (newsList) {
      setNewsListState(newsList);
    }
  }, [newsList]);

  const currentDate = moment();
  const formattedDate = currentDate.format("dddd, [ngày] D/M/YYYY");
  const formattedDay = formattedDate.replace(/^./, (str) => str.toUpperCase());
  const router = useRouter();
  const handleDetailNews = (newsItems: []) => {
    localStorage.setItem("newsItems", JSON.stringify(newsItems));
    window.location.reload();
  };
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const handleCategories = (category: any) => {
    localStorage.setItem("category", JSON.stringify(category));
    router.push(`/pages/categories`);
  };
 const handleFeetBack = () => {
   window.location.href = `/pages/feetback`;
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <html lang="en">
      <head>
        <title>CỔNG THÔNG TIN ĐIỆN TỬ BAN TUYÊN GIÁO HUYỆN ỦY KRÔNG ANA</title>
      </head>
      <body className="mas-portal v2">
     <header>
        <div className="logo-reponsive">
        {logoListState &&
                      logoListState.map((item: LogoItem, index: number) => (
                        <img
                        className={`img-logo-hi ${index === 0 ? 'img-logo-hi-100' : 'img-logo-hi-80'}`}
                          key={index}
                         
                          src={item.image}
                          
                        />
                      ))}
        </div>
          <nav
            id="lv-navbar"
            className="navbar navbar-default lv-navbar-no-submenu"
            role="navigation"
            style={{ backgroundColor: "#fff" }}
          >
            <div className="banner-content">
              <div className="portal-banner">
                <div className="hidden-xs">
                  <a className="logoPortal" style={{ display: "flex" }}>
                    {logoListState &&
                      logoListState.map((item: LogoItem, index: number) => (
                        <img
                        className={`img-logo-hi ${index === 0 ? 'img-logo-hi-100' : 'img-logo-hi-80'}`}
                          key={index}
                          alt=""
                          src={item.image}
                          
                        />
                      ))}
                  </a>
                </div>
              </div>
              <div className="slide-banner">
                {bannerListState &&
                  bannerListState.map((item: LogoItem, index: number) => (
                    <div key={index}>
                      <img src={item.image} />
                    </div>
                  ))}
              </div>
            </div>
            <div className="lv-menu-top-full">
            <button type="button" className={`navbar-toggle ${menuOpen ? '' : 'collapsed'}`} onClick={toggleMenu}>
            {menuOpen ? <div style={{ color: '#D9281C', fontSize: '24px', marginTop: -10}} className="close-icon">X</div> : (
          <>
            <span className="icon-bar"></span> 
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </>
        )}</button>
                        
              <div className="lv-menu-top">
                <div
                 className={`navbar-collapse collapse ${menuOpen ? 'in' : ''}`}
                  id="bs-example-navbar-collapse-1"
                >
                  <div id="ctl00_g_c5efd52c_bd0f_47a3_a92f_799f15324153">
                    <link
                      rel="stylesheet"
                      href="https://www.angiang.dcs.vn/Style%20Library/en-us/Core%20Styles/QuanTriMenu.css"
                    />
                    <div
                      id="MenuTopMain"
                      className="menu-top"
                      style={{ display: "block" }}
                    >
                      <div className="containerdiv containerdiv-LV1 nobackground hasChildren">
                       <ul className="container container-LV1">
                         
                          <li className="menutop menutop-index-2 menutop-LV1 hasChildren hasChildrenLV1 ">
                            <div className="content content-LV1 hasChildren hasChildrenLV1 ">
                              <div className=" hasChildren hasChildrenLV1 contenticon contenticon-LV1 divnoicon noicon">
                                <img
                                  src=""
                                  title="Khoa giáo"
                                  className=" hasChildren hasChildrenLV1 contenticonimg contenticonimg-LV1 imgnoicon noicon"
                                />
                              </div>
                              <a
                                className="contentlink contentlink-LV1 hasChildren hasChildrenLV1 "
                                target="_self"
                                href="/"
                              >
                                TRANG CHỦ
                              </a>
                            </div>
                          </li>
                          <li className="menutop menutop-index-3 menutop-LV1">
                                <div className="content content-LV1">
                                  <div className="contenticon contenticon-LV1 divnoicon noicon"><img src="" title="Thời sự"
                                      className="contenticonimg contenticonimg-LV1 imgnoicon noicon" /></div><a
                                    className="contentlink contentlink-LV1" target="_self" href="#">Giới thiệu</a>
                                </div>
                                <div className="containerdiv containerdiv-LV2 nobackground showChildren" >
                                  <ul className="nav nav-pills">
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">Lãnh đạo Ban Tuyên giáo</a></li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">Chức năng – Nhiệm vụ</a>
                                    </li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">Lãnh đạo Ban tuyên giáo qua các thời kỳ</a></li>
                                   
                                  </ul>
                                </div>
                              </li>
                          <li className="menutop menutop-index-4 menutop-LV1 hasChildren hasChildrenLV1 ">
                            <div
                              className="content content-LV1 hasChildren hasChildrenLV1 "
                              style={{ cursor: "pointer" }}
                            >
                              <a
                                className="contentlink contentlink-LV1 hasChildren hasChildrenLV1 "
                                target="_self"
                                onClick={() => {
                                  handleCategories("TIN TỨC - SỰ KIỆN");
                                }}
                              >
                                TIN TỨC - SỰ KIỆN
                              </a>
                            </div>
                            
                          </li>
                          <li className="menutop menutop-index-5 menutop-LV1">
                            <div
                              className="content content-LV1"
                              style={{ cursor: "pointer" }}
                            >
                              <a
                                className="contentlink contentlink-LV1"
                                target="_self"
                                onClick={() => {
                                  handleCategories("HOẠT ĐỘNG TUYÊN GIÁO");
                                }}
                              >
                                HOẠT ĐỘNG TUYÊN GIÁO
                              </a>
                            </div>
                            <div className="containerdiv containerdiv-LV2 nobackground showChildren" >
                                  <ul className="nav nav-pills">
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">TUYÊN TRUYỀN – BÁO CHÍ – XUẤT BẢN</a></li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">NGHIÊN CỨU DƯ LUẬN XÃ HỘI</a>
                                    </li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">LÝ LUẬN CHÍNH TRỊ</a></li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">LỊCH SỬ ĐẢNG</a></li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">KHOA GIÁO</a>
                                    </li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">VĂN HÓA - VĂN NGHỆ</a></li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">THƯ VIỆN ẢNH</a></li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">VIDEO - CLIP</a>
                                    </li>
                                  </ul>
                            </div>
                          </li>
                          <li className="menutop menutop-index-6 menutop-LV1 hasChildren hasChildrenLV1 ">
                            <div
                              className="content content-LV1 hasChildren hasChildrenLV1 "
                              style={{ cursor: "pointer" }}
                            >
                              <a
                                className="contentlink contentlink-LV1 hasChildren hasChildrenLV1 "
                                target="_self"
                                onClick={() => {
                                  handleCategories("THÔNG TIN TƯ LIỆU");
                                }}
                              >
                                THÔNG TIN TƯ LIỆU
                              </a>
                            </div>
                            <div className="containerdiv containerdiv-LV2 nobackground showChildren" >
                                  <ul className="nav nav-pills">
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">KỸ NĂNG</a></li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">NGHIỆP VỤ</a>
                                    </li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">TÀI LIỆU TUYÊN TRUYỀN</a></li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">TƯ LIỆU NGÀNH TUYÊN GIÁO</a></li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">ẤN PHẨM DO BAN TUYÊN GIÁO TỈNH ĐẮK LẮK XUẤT BẢN</a>
                                    </li>
                                  </ul>
                            </div>
                          </li>
                          <li className="menutop menutop-index-7 menutop-LV1">
                            <div
                              className="content content-LV1"
                              style={{ cursor: "pointer" }}
                            >
                              <a
                                className="contentlink contentlink-LV1"
                                target="_self"
                                onClick={() => {
                                  handleCategories("TRUNG TÂM CHÍNH TRỊ");
                                }}
                              >
                                TRUNG TÂM CHÍNH TRỊ
                              </a>
                            </div>
                            <div className="containerdiv containerdiv-LV2 nobackground showChildren" >
                                  <ul className="nav nav-pills">
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">LỊCH KHAI GIẢNG</a></li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">LỊCH BẾ GIẢNG</a>
                                    </li>
                                    <li role="presentation" className="dropdown"><a className="dropdown-toggle" target="_self"
                                        href="#" role="button" aria-expanded="false" data-toggle="">TÀI LIỆU</a></li>
                                  </ul>
                            </div>
                          </li>
                          <li className="menutop menutop-index-8 menutop-LV1">
                            <div
                              className="content content-LV1"
                              style={{ cursor: "pointer" }}
                            >
                              <a
                                className="contentlink contentlink-LV1"
                                href="pages/feetback"
                              >
                                VỀ KRÔNG ANA
                              </a>
                            </div>
                          </li>
                          <li className="menutop menutop-index-9 menutop-LV1">
                            <div
                              className="content content-LV1"
                              style={{ cursor: "pointer" }}
                            >
                              <a
                                className="contentlink contentlink-LV1"
                                href="pages/feetback"
                              >
                                TIN ẢNH
                              </a>
                            </div>
                          </li>
                          <li className="menutop menutop-index-8 menutop-LV1">
                            <div
                              className="content content-LV1"
                              style={{ cursor: "pointer" }}
                            >
                              <a
                                className="contentlink contentlink-LV1"
                                href="pages/feetback"
                              >
                                GÓP Ý
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
          </nav>
          <div className="search-tool">
            <div className="row">
              <div className="col-md-3 search1">
                <div id="currentdate" className="time">
                  {formattedDay}
                </div>
              </div>
              <div className="col-md-6 search2">
                <Marquee className="customText_Blue" pauseOnHover speed={40}>
                  Chào mừng Quý vị đến với &nbsp;
                  <strong>Cổng thông tin điện tử Ban Tuyên giáo Huyện ủy Krông Ana!</strong>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                </Marquee>
              </div>
              <div className="col-md-3 search3" style={{ display: "flex" }}>
                <input type="text" style={{ height: 30 }} />
              </div>
            </div>
          </div>
        </header>

        <div className="portalMain homeMain" style={{ minHeight: 1155 }}>
          <div className="portal-left">
            <Typography
              sx={{
                fontSize: 22,
                fontWeight: 600,
                borderBottom: "2px solid #d9d9d9",
                marginBottom: 1,
                marginLeft: 0.2,
                color: "#000",
                lineHeight: 2,
                fontFamily: "Roboto, sans-serif",
                cursor: "pointer",
              }}
              onClick={() => {
                handleCategories(selectedNewsItem.TenDanhMuc);
              }}
            >
              {selectedNewsItem ? selectedNewsItem.TenDanhMuc : ""}
            </Typography>
            <Typography
              sx={{
                fontSize: 22,
                fontWeight: 300,
                color: "#14456f",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              {selectedNewsItem ? selectedNewsItem.TieuDeChinh : ""}
            </Typography>
            <Typography
              sx={{
                marginTop: 1,
                fontSize: 13,
                color: "#898989",
                display: "flex",
                alignItems: "center",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              {selectedNewsItem
                ? moment(selectedNewsItem.createDate).format("DD-MM-YYYY")
                : ""}{" "}
              | {selectedNewsItem ? selectedNewsItem.createBy : ""}
            </Typography>

            <Typography
              sx={{
                marginTop: 4,
                fontSize: 16,
                fontWeight: "600",
                fontStyle: "italic",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              {selectedNewsItem ? selectedNewsItem.TieuDePhu : ""}
            </Typography>
            <Typography
              className="ql-align-center"
              sx={{
                fontFamily: "Roboto, sans-serif",
                color: "#333",
                fontSize: 16,
                marginTop: 2,
              }}
              dangerouslySetInnerHTML={{
                __html: selectedNewsItem ? selectedNewsItem.NoiDung : "",
              }}
            />
            <Typography
              sx={{
                fontSize: 16,
                textAlign: "right",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "bold",
              }}
            >
              {selectedNewsItem ? selectedNewsItem.createBy : ""}
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                textAlign: "left",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Lượt người xem: {selectedNewsItem ? selectedNewsItem.LuotXem : ""}
            </Typography>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 600,
                borderBottom: "2px solid #d9d9d9",
                marginTop: 2,
                color: "#000",
                lineHeight: 2,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              TIN KHÁC
            </Typography>
            <ul
              style={{
                paddingLeft: 0,
              }}
            >
              {newsListState.slice(0, 10).map((items: any, i: number) => (
                <li style={{ position: "relative", marginTop: 20 }} key={i}>
                  <span>&gt;</span>
                  <a
                    onClick={() => {
                      handleDetailNews(items);
                    }}
                    style={{ marginLeft: 7, cursor: "pointer" }}
                  >
                    {items.TieuDeChinh}
                  </a>
                  <span className="ShowDate">
                    {" "}
                    ({moment(items.createDate).format("DD-MM")})
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="portal-right">
            {rightListState.map((items: any, index: number) => (
              <div className="right1" key={index}>
                <div className="ms-webpart-zone ms-fullWidth">
                  <div
                    id="MSOZoneCell_WebPartWPQ12"
                    className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                  >
                    <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                      <div
                        id="WebPartWPQ12"
                        style={{ width: "100%" }}
                        className="ms-WPBody "
                      >
                        <div className="ms-rtestate-field">
                          <div
                            className="post-category-slide ng-scope"
                            id="CapUy"
                            ng-controller="CapUy"
                          >
                            <div
                              className="lv-category"
                              onClick={() => {
                                handleCategories(items.TenDanhMuc);
                              }}
                            >
                              <a href="#">{items.TenDanhMuc}</a>
                            </div>
                            <Slider
                              ref={sliderRef}
                              className="nbs-flexisel-container"
                              dots={false}
                              infinite={true}
                              speed={500}
                              slidesToShow={1}
                              slidesToScroll={1}
                            >
                              {items.news.map(
                                (newsItem: any, newsIndex: number) => (
                                  <div
                                    key={newsIndex}
                                    className={`nbs-flexisel-item ${
                                      newsIndex > 0 ? "slide" : ""
                                    }`}
                                    onClick={() => {
                                      handleDetailNews(newsItem);
                                    }}
                                  >
                                    <a href="#">
                                      <div className="divimg">
                                        <img
                                          className="img-responsive"
                                          src={newsItem.HinhAnh}
                                          alt={`Image ${newsIndex}`}
                                        />
                                      </div>
                                    </a>
                                    <div
                                      style={{
                                        textAlign: "center",
                                        padding: 10,
                                      }}
                                    >
                                      <span>{newsItem.TieuDeChinh}</span>
                                    </div>
                                  </div>
                                )
                              )}
                            </Slider>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="right4">
              <div className="ms-webpart-zone ms-fullWidth">
                <div
                  id="MSOZoneCell_WebPartWPQ16"
                  className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                >
                  <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                    <div
                      id="WebPartWPQ16"
                      style={{ width: "100%" }}
                      className="ms-WPBody "
                    >
                      <div className="ms-rtestate-field">
                        <div
                          className="banner-group group1 ng-scope"
                          id="BannerRight3"
                          ng-controller="BannerRight3"
                        >
                          <div className="banner-img ng-scope">
                            <a href="#">
                              <img
                                className="img-responsive"
                                alt=""
                                src="/images/home-cen-3.png"
                              />
                            </a>
                          </div>
                          <div className="banner-img ng-scope">
                            <a href="#">
                              <img
                                className="img-responsive"
                                alt=""
                                src="/images/Cuoc-thi-tren-VCnet.png"
                              />
                            </a>
                          </div>
                          <div className="banner-img ng-scope">
                            <a href="#">
                              <img
                                className="img-responsive"
                                alt=""
                                src="/images/home-cen-2.png"
                              />
                            </a>
                          </div>
                          <div className="banner-img ng-scope">
                            <a href="#">
                              <img
                                className="img-responsive"
                                alt=""
                                src="/images/home-cen-3.png"
                              />
                            </a>
                          </div>
                          <div className="banner-img ng-scope">
                            <a href="#">
                              <img
                                className="img-responsive"
                                alt=""
                                src="/images/Banner-thi-dua-yeu-nuoc.jpg"
                              />
                            </a>
                          </div>
                          <div className="banner-img ng-scope">
                            <a href="pages/login">
                              <img
                                className="img-responsive"
                                alt=""
                                src="/images/home-bot-3.png"
                              />
                            </a>
                          </div>
                          <div className="banner-img ng-scope">
                            <a href="#">
                              <img
                                className="img-responsive"
                                alt=""
                                src="/images/banner-ht.jpg"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer">
            <div className="footer-content row">
              <div id="ctl00_g_91ea13ce_902e_4f6e_b075_5bed268b3192">
                <div>
                  <strong style={{ fontFamily: "tahoma" }}>
                    CỔNG THÔNG TIN ĐIỆN TỬ BAN TUYÊN GIÁO HUYỆN ỦY KRÔNG ANA
                  </strong>
                </div>
                <div>
                  <strong>Trụ sở&#58;</strong>&#160;UBND huyện Krông Ana - 94
                  Nguyễn Tất Thành, Thị trấn Buôn Trấp, huyện Krông Ana, tỉnh
                  Đắk Lắk
                  <br />
                  <strong>Điện thoại&#58;</strong> 0262 3637026&#160;&#160;
                  <strong>
                    <br />
                  </strong>
                </div>
                <div>
                  <strong>Email&#58;</strong> banbientap@krongana.daklak.gov.vn
                </div>
                Bản quyền thuộc Ủy Ban Nhân Dân Huyện Krông Ana.
                <br />
                Ghi rõ nguồn khi phát hành thông tin từ nguồn này. ​
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};
export default DetailNews;
