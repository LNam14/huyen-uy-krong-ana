"use client";
import { getAllBanner, getBannerList } from "@/app/redux-store/banner/slice";
import { getAllNews, getHomeList } from "@/app/redux-store/home/slice";
import { useAppDispatch, useAppSelector } from "@/app/redux-store/hook";
import { getAllLogo, getLogoList } from "@/app/redux-store/logo/slice";
import { getNewsRight, getRightList } from "@/app/redux-store/right/slice";
import { AnyARecord } from "dns";
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
import { getNewsTop, getTopList } from "@/app/redux-store/top/slice";
import { getMenu, getMenuList } from "@/app/redux-store/menu/slice";
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
interface MenuItem {
  ID: number;
  TenDanhMuc: string;
  IsDanhMuc: string;
}
interface LooseObject {
  [key: string]: any;
}
const Home = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const logoList: LogoItem[] = useAppSelector(getLogoList);
  const [logoListState, setLogoListState] = useState<LogoItem[]>([]);

  const bannerList: BannerItem[] = useAppSelector(getBannerList);
  const [bannerListState, setBannerListState] = useState<BannerItem[]>([]);

  const topList: NewItem[] = useAppSelector(getTopList);
  const [topListState, setTopListState] = useState<any[]>([]);

  const rightList: HomeItem[] = useAppSelector(getRightList);
  const [rightListState, setRightListState] = useState<HomeItem[]>([]);

  const newsList: HomeItem[] = useAppSelector(getHomeList);
  const [newsListState, setNewsListState] = useState<HomeItem[]>([]);

  const menuList: MenuItem[] = useAppSelector(getMenuList);
  const [menuListState, setMenuListState] = useState<MenuItem[]>([]);
  useEffect(() => {
    const asyncCall = async () => {
      await dispatch(getAllNews());
      await dispatch(getAllLogo());
      await dispatch(getAllBanner());
      await dispatch(getNewsRight());
      await dispatch(getNewsTop());
      await dispatch(getMenu());
    };
    asyncCall();
  }, []);
  useEffect(() => {
    if (menuList) {
      setMenuListState(menuList);
    }
  }, [menuList]);
  useEffect(() => {
    if (newsList) {
      setNewsListState(newsList);
    }
  }, [newsList]);
  useEffect(() => {
    if (topList) {
      setTopListState(topList);
    }
  }, [topList]);
  useEffect(() => {
    if (rightList) {
      setRightListState(rightList);
    }
  }, [rightList]);
  useEffect(() => {
    if (logoList) {
      setLogoListState(logoList);
    }
  }, [logoList]);

  useEffect(() => {
    if (bannerList) {
      setBannerListState(bannerList);
    }
  }, [bannerList]);
  const currentDate = moment();
  const formattedDate = currentDate.format("dddd, [ngày] D/M/YYYY");
  const formattedDay = formattedDate.replace(/^./, (str) => str.toUpperCase());

  const handleDetailNews = (newsItems: []) => {
    localStorage.setItem("newsItems", JSON.stringify(newsItems));
    router.push(`/pages/details-news`);
  };
  const handleFeetBack = () => {
    window.location.href = `/pages/feetback`;
  };
  const handleCategories = (category: any) => {
    localStorage.setItem("category", JSON.stringify(category));
    localStorage.setItem("isCategory", JSON.stringify(category));
    router.push(`/pages/categories`);
  };
  const handleIsCategories = (category: any, isCategory: any) => {
    localStorage.setItem("category", JSON.stringify(category));
    localStorage.setItem("isCategory", JSON.stringify(isCategory));
    router.push(`/pages/categories`);
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let interval: any;

    if (topListState.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % topListState.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [topListState]);
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
            <div className="logo-reponsive">
              {logoListState ? logoListState.map((item: LogoItem, index: number) => (
                <img
                  className={`img-logo-hi ${index === 0 ? 'img-logo-hi-100' : 'img-logo-hi-80'}`}
                  src={item.image}
                  key={index}
                />
              )) : null}
            </div>

          </div>
          <nav
            id="lv-navbar"
            className="navbar navbar-default lv-navbar-no-submenu"
            style={{ backgroundColor: "#fff" }}
          >
            <div className="banner-content">
              <div className="portal-banner">
                <div className="hidden-xs">
                  <a className="logoPortal" style={{ display: "flex" }}>
                    {logoListState ?
                      logoListState.map((item: LogoItem, index: number) => (
                        <img
                          className={`img-logo-hi ${index === 0 ? 'img-logo-hi-100' : 'img-logo-hi-80'}`}
                          key={index}
                          alt=""
                          src={item.image}

                        />
                      )) : null}
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
                {menuOpen ? <div style={{ color: '#D9281C', fontSize: '24px', marginTop: -10 }} className="close-icon">X</div> : (
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

                                href="/"
                              >
                                TRANG CHỦ
                              </a>
                            </div>
                          </li>
                          {menuListState
                            ? [...menuListState]
                              .sort((a: any, b: any) => a.ID - b.ID)
                              .map((items: any, index: number) => (
                                <li className="menutop menutop-index-3 menutop-LV1" key={index}>
                                  <div className="content content-LV1">
                                    <a
                                      style={{ cursor: "pointer" }}
                                      className="contentlink contentlink-LV1"
                                      onClick={() => {
                                        handleCategories(items.TenDanhMuc);
                                      }}
                                    >
                                      {items.TenDanhMuc}
                                    </a>
                                  </div>
                                  <div className="containerdiv containerdiv-LV2 nobackground showChildren">
                                    <ul className="nav nav-pills">
                                      {items.sub
                                        .map((newsItem: any, subIndex: number) => (
                                          <li className="dropdown" key={subIndex}>
                                            <a
                                              className="dropdown-toggle"
                                              style={{ cursor: "pointer" }}
                                              onClick={() => {
                                                handleIsCategories(
                                                  newsItem.TenDanhMuc,
                                                  items.TenDanhMuc
                                                );
                                              }}
                                            >
                                              {newsItem.TenDanhMuc}
                                            </a>
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                </li>
                              ))
                            : null}
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
                  Chào mừng quý vị đến với &nbsp;
                  <strong>Cổng thông tin điện tử Huyện Ủy Krông Ana!</strong>
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
        <div className="portalMain homeMain">
          <div className="portal-left" style={{ minHeight: 1060 }}>
            <div className="home1">
              <div className="ms-webpart-zone ms-fullWidth">
                <div
                  id="MSOZoneCell_WebPartWPQ20"
                  className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                >
                  <div
                    className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth "
                    style={{ display: "block" }}
                  >
                    <div
                      id="WebPartWPQ20"
                      style={{ width: "100%" }}
                      className="ms-WPBody "
                    >
                      <div id="ctl00_ctl33_g_460334a6_c079_48c6_b32e_bdcded6b1079">
                        <div id="div-TinNoiBat">
                          <div className="div-Container">
                            <div
                              className="div-Main"
                              onClick={() => {
                                handleDetailNews(topListState[currentIndex]);
                              }}
                            >
                              <div className="nav-image">
                                <div className="div-img">
                                  <img
                                    className="Container-Image"
                                    src={
                                      hoveredIndex !== null
                                        ? topListState[hoveredIndex]?.HinhAnh
                                        : topListState[currentIndex]?.HinhAnh
                                    }
                                    style={{ opacity: 1 }}
                                  />
                                  &nbsp;
                                </div>
                              </div>
                              <div className="div-nav">
                                <div className="div-item-title">
                                  <a className="div-item-title-div-link">
                                    <div className="div-info-main">
                                      {hoveredIndex !== null
                                        ? topListState[hoveredIndex]
                                          ?.TieuDeChinh
                                        : topListState[currentIndex]
                                          ?.TieuDeChinh}
                                    </div>
                                  </a>
                                </div>
                                <div className="div-item-des"></div>
                              </div>
                            </div>
                          </div>
                          <div className="div-item-all">
                            <div className="div-Tonghop">
                              {topListState ? topListState.map((items: any, index: number) => (
                                <div
                                  onClick={() => {
                                    handleDetailNews(items);
                                  }}
                                  key={index}
                                  className={
                                    hoveredIndex === index
                                      ? `div-item selected`
                                      : `div-item`
                                  }
                                  onMouseEnter={() => handleMouseEnter(index)}
                                  onMouseLeave={handleMouseLeave}
                                >
                                  <li className="New-orders-li">
                                    <a>
                                      <img src={items.HinhAnh} />
                                      {items.TieuDeChinh}
                                    </a>
                                  </li>
                                </div>
                              )) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="MSOZoneCell_WebPartWPQ22"
              className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
            >
              <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                <div id="WebPartWPQ22" className="ms-WPBody ">
                  <div className="ms-rtestate-field">
                    <div id="Logan" ng-controller="Logan" className="ng-scope">
                      <a
                        ng-repeat="dataItem in DataHtml track by $index"
                        target="#"
                        className="ng-scope"
                      >
                        <img
                          alt=""
                          ng-src="KhoHinhAnhBanner/LoganHome3.jpg"
                          src="./filesx/LoganHome3.jpg"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ms-clear"></div>
                </div>
              </div>
            </div>
            <div className="home3">
              <div className="COL1">
                <div className="ms-webpart-zone ms-fullWidth">
                  {newsListState ? newsListState.map((items: any, index: number) => (
                    <div
                      key={index}
                      className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth"
                    >
                      <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth">
                        <div style={{ width: "100%" }} className="ms-WPBody">
                          <div className="ms-rtestate-field">
                            <div className="lv-box ng-scope">
                              <div className="category-title">
                                <a
                                  onClick={() => {
                                    handleCategories(items.TenDanhMuc);
                                  }}
                                  style={{ cursor: "pointer" }}
                                >
                                  {items.TenDanhMuc}
                                </a>
                              </div>
                              <div className="row">
                                {items.news
                                  .slice(0, 1)

                                  .map((newsItem: any) => (
                                    <div
                                      className="news-hot col-md-6 col-sm-12 col-xs-12 ng-scope"
                                      key={newsItem.ID}
                                    >
                                      <div className="news-img">
                                        <img
                                          src={newsItem.HinhAnh}
                                          className="img-responsive"
                                        />
                                      </div>
                                      <div className="news-title">
                                        <a
                                          className="ng-binding"
                                          style={{
                                            cursor: "pointer",
                                          }}
                                          onClick={() => {
                                            handleDetailNews(newsItem);
                                          }}
                                        >
                                          {newsItem.TieuDeChinh}
                                        </a>
                                      </div>
                                    </div>
                                  ))}
                                <div className="category-group col-md-6 col-sm-12 col-xs-12">
                                  {items.news
                                    .slice(1, 5)

                                    .map((newsItem: any) => (
                                      <div
                                        className="news-item ng-scope"
                                        key={newsItem.ID}
                                      >
                                        <a
                                          onClick={() => {
                                            handleDetailNews(newsItem);
                                          }}
                                          style={{
                                            cursor: "pointer",
                                          }}
                                        >
                                          <div className="news-item-other">
                                            <div className="news-item-title">
                                              <span
                                                className="ng-binding"
                                                style={{
                                                  fontSize: 13,
                                                  marginRight: 5,
                                                }}
                                              >
                                                {newsItem.TieuDeChinh}
                                              </span>
                                              <span className="news-item-date ng-binding">
                                                (
                                                {moment(
                                                  newsItem.createDate
                                                ).format("DD-MM-YYYY")}
                                                )
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ms-clear"></div>
                        </div>
                      </div>
                      <div className="ms-PartSpacingVertical"></div>
                    </div>
                  )) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="portal-right">
            {rightListState.map((items: any, index: number) => (
              <div className="right1" key={index}>
                <div className="ms-webpart-zone ms-fullWidth">
                  <div id="MSOZoneCell_WebPartWPQ12" className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth ">
                    <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                      <div id="WebPartWPQ12" style={{ width: "100%" }} className="ms-WPBody ">
                        <div className="ms-rtestate-field">
                          <div className="post-category-slide ng-scope" id="CapUy" ng-controller="CapUy">
                            <div className="lv-category">
                              <a>{items.TenDanhMuc}</a>
                            </div>
                            {items.news.length > 1 ? (
                              <Slider
                                ref={sliderRef}
                                className="nbs-flexisel-container"
                                dots={false}
                                infinite={true}
                                speed={500}
                                slidesToShow={1}
                                slidesToScroll={1}
                              >
                                {items.news.map((newsItem: any, newsIndex: number) => (
                                  <div key={newsIndex} className={`nbs-flexisel-item ${newsIndex > 0 ? "slide" : ""}`}
                                    onClick={() => { handleDetailNews(newsItem); }}
                                  >
                                    <a>
                                      <div className="divimg">
                                        <img className="img-responsive" src={newsItem.HinhAnh} alt={`Image ${newsIndex}`} />
                                      </div>
                                    </a>
                                    <div style={{ textAlign: "center", padding: 10 }}>
                                      <span>{newsItem.TieuDeChinh}</span>
                                    </div>
                                  </div>
                                ))}
                              </Slider>
                            ) : (
                              // Render single news item without slider
                              items.news.map((newsItem: any, newsIndex: number) => (
                                <div key={newsIndex} className="single-news-item"
                                  onClick={() => { handleDetailNews(newsItem); }}
                                >
                                  <a>
                                    <div className="divimg">
                                      <img className="img-responsive" src={newsItem.HinhAnh} alt={`Image ${newsIndex}`} />
                                    </div>
                                  </a>
                                  <div style={{ textAlign: "center", padding: 10 }}>
                                    <span>{newsItem.TieuDeChinh}</span>
                                  </div>
                                </div>
                              ))
                            )}
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
                          <div
                            className="banner-img ng-scope"
                            ng-repeat="dataItem in DataHtml track by $index"
                          >
                            <a target="_blank">
                              <img
                                className="img-responsive"
                                alt=""
                                ng-src="KhoHinhAnhBanner/Cuoc-thi-tren-VCnet.png"
                                src="./filesx/Cuoc-thi-tren-VCnet.png"
                              />
                            </a>
                          </div>
                          <div
                            className="banner-img ng-scope"
                            ng-repeat="dataItem in DataHtml track by $index"
                          >
                            <a >
                              <img
                                className="img-responsive"
                                alt=""
                                ng-src="KhoHinhAnhBanner/home-cen-2.png"
                                src="./filesx/home-cen-2.png"
                              />
                            </a>
                          </div>
                          <div
                            className="banner-img ng-scope"
                            ng-repeat="dataItem in DataHtml track by $index"
                          >
                            <a target="_parent">
                              <img
                                className="img-responsive"
                                alt=""
                                ng-src="KhoHinhAnhBanner/home-cen-3.png"
                                src="./filesx/home-cen-3.png"
                              />
                            </a>
                          </div>
                          <div
                            className="banner-img ng-scope"
                            ng-repeat="dataItem in DataHtml track by $index"
                          >
                            <a target="_blank">
                              <img
                                className="img-responsive"
                                alt=""
                                ng-src="KhoHinhAnhBanner/Banner-thi-dua-yeu-nuoc.jpg"
                                src="./filesx/Banner-thi-dua-yeu-nuoc.jpg"
                              />
                            </a>
                          </div>
                          <div
                            className="banner-img ng-scope"
                            ng-repeat="dataItem in DataHtml track by $index"
                          >
                            <a href="pages/login" target="_blank">
                              <img
                                className="img-responsive"
                                alt=""
                                ng-src="KhoHinhAnhBanner/home-bot-3.png"
                                src="./filesx/home-bot-3.png"
                              />
                            </a>
                          </div>
                          <div
                            className="banner-img ng-scope"
                            ng-repeat="dataItem in DataHtml track by $index"
                          >
                            <a target="_blank">
                              <img
                                className="img-responsive"
                                alt=""
                                ng-src="KhoHinhAnhBanner/banner-ht.jpg"
                                src="./filesx/banner-ht.jpg"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="ms-clear"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content row" style={{ width: "75%" }}>
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
              Ghi rõ nguồn khi phát hành thông tin từ nguồn này.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};
export default Home;
