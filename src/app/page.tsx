"use client";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Dashboard = () => {
  const currentDate = moment();
  const formattedDate = currentDate.format("dddd, [ngày] D/M/YYYY");
  const formattedDay = formattedDate.replace(/^./, (str) => str.toUpperCase());
  return (
    <html lang="en">
      <head>
        <meta name="GENERATOR" content="Microsoft SharePoint" />
        <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=8, IE=9, IE=10, chrome=1"
        />
        <meta httpEquiv="Expires" content="0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="DESCRIPTION"
          content="CỔNG THÔNG TIN ĐIỆN TỬ HUYỆN KRÔNG ANA"
        />
        <meta
          name="KEYWORDS"
          content="CỔNG THÔNG TIN ĐIỆN TỬ HUYỆN KRÔNG ANA"
        />
        <meta name="AUTHOR" content="CỔNG THÔNG TIN ĐIỆN TỬ HUYỆN KRÔNG ANA" />
        <meta
          name="keywords"
          content="CỔNG THÔNG TIN ĐIỆN TỬ HUYỆN KRÔNG ANA"
        />
        <meta name="msapplication-TileImage" />
        <meta name="msapplication-TileColor" content="#0072C6" />
        <title>CỔNG THÔNG TIN ĐIỆN TỬ HUYỆN KRÔNG ANA</title>
        <link
          rel="shortcut icon"
          href="./filesx/favicon.ico"
          type="image/vnd.microsoft.icon"
          id="favicon"
        />
        <link rel="stylesheet" type="text/css" href="./filesx/bootstrap.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="./filesx/portal-congtinh.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="./filesx/colorstyle1.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="./filesx/jquerynice-select.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.angiang.dcs.vn/Style%20Library/Angular/toastr.min.css"
        />
      </head>
      <div className="mas-portal v2" ng-app="ngAppSharepoint">
        <form method="post" action="" id="aspnetForm">
          <div
            id="suiteBar"
            className="ms-dialogHidden noindex"
            style={{ display: "none" }}
          >
            <div id="suiteBarLeft">
              <div className="ms-table ms-fullWidth">
                <div className="ms-tableRow">
                  <div className="ms-tableCell ms-verticalAlignMiddle"></div>
                  <div id="DeltaSuiteLinks" className="ms-core-deltaSuiteLinks">
                    <div id="suiteLinksBox"></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="suiteBarRight">
              <div
                id="DeltaSuiteBarRight"
                className="ms-core-deltaSuiteBarRight"
              >
                <div id="welcomeMenuBox">
                  <a
                    id="ctl00_IdWelcome_ExplicitLogin"
                    className="ms-signInLink"
                    href="#"
                    style={{ display: "inline-block" }}
                  >
                    Sign In
                  </a>
                </div>
                <div id="suiteBarButtons"></div>
              </div>
            </div>
          </div>
          <div id="ms-hcTest"></div>
          <div id="s4-ribbonrow" style={{ display: "none" }}>
            <div id="globalNavBox" className="noindex">
              <div id="ribbonBox">
                <div id="s4-ribboncont">
                  <div id="DeltaSPRibbon">
                    <input
                      id="RibbonContainer_activeTabId"
                      name="ctl00$ctl44"
                      type="hidden"
                      value=""
                    />
                    <div id="RibbonContainer">
                      <div
                        className="ms-cui-ribbon ms-cui-needIEFilter"
                        id="Ribbon"
                        unselectable="on"
                        aria-describedby="ribboninstructions"
                        role="toolbar"
                      >
                        <span
                          className="ms-cui-hidden"
                          id="ribboninstructions"
                          unselectable="on"
                        >
                          To navigate through the Ribbon, use standard browser
                          navigation keys. To skip between groups, use Ctrl+LEFT
                          or Ctrl+RIGHT. To jump to the first Ribbon tab use
                          Ctrl+[. To jump to the last selected command use
                          Ctrl+]. To activate a command, use Enter.
                        </span>
                        <div className="ms-cui-ribbonTopBars" unselectable="on">
                          <div
                            className="ms-cui-topBar1"
                            unselectable="on"
                            style={{ display: "none" }}
                          >
                            <div
                              className="ms-cui-qat-container"
                              unselectable="on"
                            ></div>
                          </div>
                          <div className="ms-cui-topBar2" unselectable="on">
                            <div
                              className="ms-cui-jewel-container"
                              id="jewelcontainer"
                              unselectable="on"
                              style={{ display: "none" }}
                            ></div>
                            <div
                              className="ms-cui-TabRowLeft ms-core-defaultFont ms-dialogHidden"
                              id="RibbonContainer-TabRowLeft"
                              unselectable="on"
                            ></div>
                            <ul
                              className="ms-cui-tts"
                              unselectable="on"
                              role="tablist"
                            >
                              <li
                                className="ms-cui-tt ms-browseTab ms-cui-tt-s"
                                id="Ribbon.Read-title"
                                unselectable="on"
                                role="tab"
                              >
                                <a
                                  className="ms-cui-tt-a"
                                  unselectable="on"
                                  href="#"
                                >
                                  <span
                                    className="ms-cui-tt-span"
                                    unselectable="on"
                                  >
                                    Browse
                                  </span>
                                  <span
                                    className="ms-cui-hidden"
                                    unselectable="on"
                                  >
                                    Tab 1 of 2.
                                  </span>
                                </a>
                              </li>
                              <li
                                className="ms-cui-tt"
                                id="Ribbon.WebPartPage-title"
                                unselectable="on"
                                role="tab"
                              >
                                <a
                                  className="ms-cui-tt-a"
                                  unselectable="on"
                                  href="#"
                                >
                                  <span
                                    className="ms-cui-tt-span"
                                    unselectable="on"
                                  >
                                    Page
                                  </span>
                                  <span
                                    className="ms-cui-hidden"
                                    unselectable="on"
                                  >
                                    Tab 2 of 2.
                                  </span>
                                </a>
                              </li>
                            </ul>
                            <div
                              className="ms-cui-TabRowRight s4-trc-container s4-notdlg ms-core-defaultFont"
                              id="RibbonContainer-TabRowRight"
                              unselectable="on"
                            >
                              <span
                                id="fullscreenmodebox"
                                className="ms-qatbutton"
                              >
                                <span id="fullscreenmode">
                                  <a
                                    id="ctl00_fullscreenmodeBtn"
                                    title="Focus on Content"
                                    href="#"
                                    style={{ display: "inline-block" }}
                                  >
                                    <span
                                      style={{
                                        display: "inline-block",
                                        overflow: "hidden",
                                        height: "16px",
                                        width: "16px",
                                        paddingLeft: "7px",
                                        paddingTop: "7px",
                                        paddingRight: "7px",
                                        paddingBottom: "7px",
                                      }}
                                    >
                                      <span
                                        style={{
                                          height: "16px",
                                          width: "16px",
                                          position: "relative",
                                          display: "inline-block",
                                          overflow: "hidden",
                                        }}
                                        className="s4-clust"
                                      >
                                        <img
                                          src="https://www.angiang.dcs.vn/_layouts/15/images/spcommon.png?rev=23"
                                          alt="Focus on Content"
                                          style={{
                                            border: 0,
                                            position: "absolute",
                                            left: "-143px",
                                            top: "-178px",
                                          }}
                                        />
                                      </span>
                                    </span>
                                  </a>
                                </span>
                                <span style={{ display: "none" }}>
                                  <a
                                    title="Focus on Content"
                                    href="#"
                                    style={{ display: "inline-block" }}
                                  >
                                    <span
                                      style={{
                                        display: "inline-block",
                                        overflow: "hidden",
                                        height: "16px",
                                        width: "16px",
                                        paddingLeft: "7px",
                                        paddingTop: "7px",
                                        paddingRight: "7px",
                                        paddingBottom: "7px",
                                      }}
                                    >
                                      <span
                                        style={{
                                          height: "16px",
                                          width: "16px",
                                          position: "relative",
                                          display: "inline-block",
                                          overflow: "hidden",
                                        }}
                                        className="s4-clust"
                                      >
                                        <img
                                          src="https://www.angiang.dcs.vn/_layouts/15/images/spcommon.png?rev=23"
                                          alt="Focus on Content"
                                          style={{
                                            border: 0,
                                            position: "absolute",
                                            left: "-107px",
                                            top: "-178px",
                                          }}
                                        />
                                      </span>
                                    </span>
                                  </a>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-core-webpartadder">
                <div id="WebPartAdderUpdatePanelContainer">
                  <div id="ctl00_WebPartAdderUpdatePanel">
                    <span id="ctl00_WebPartAdder"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="s4-workspace" className="ms-core-overlay">
            <div id="s4-bodyContainer">
              <div
                id="s4-titlerow"
                className="ms-dialogHidden s4-titlerowhidetitle"
              >
                <div
                  id="titleAreaBox"
                  className="ms-noList ms-table ms-core-tableNoSpace"
                >
                  <div id="titleAreaRow" className="ms-tableRow">
                    <div
                      id="siteIcon"
                      className="ms-tableCell ms-verticalAlignTop"
                    >
                      <div id="DeltaSiteLogo">
                        <a
                          id="ctl00_onetidProjectPropertyTitleGraphic"
                          title="Đảng bộ tỉnh An Giang"
                          className="ms-siteicon-a"
                          href="#"
                        >
                          <img
                            id="ctl00_onetidHeadbnnr2"
                            className="ms-siteicon-img"
                            src="https://www.angiang.dcs.vn/KhoHinhAnh/Color/logo.png"
                            alt="Đảng bộ tỉnh An Giang"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="ms-breadcrumb-box ms-tableCell ms-verticalAlignTop">
                      <div className="ms-breadcrumb-top">
                        <div
                          className="ms-breadcrumb-dropdownBox"
                          style={{ display: "none" }}
                        >
                          <span id="DeltaBreadcrumbDropdown"></span>
                        </div>
                        <div
                          id="DeltaTopNavigation"
                          className="ms-displayInline ms-core-navigation"
                          role="navigation"
                        >
                          <div
                            id="zz4_TopNavigationMenu"
                            className=" noindex ms-core-listMenu-horizontalBox"
                          >
                            <ul
                              id="zz5_RootAspMenu"
                              className="root ms-core-listMenu-root static"
                            >
                              <li className="static selected">
                                <a
                                  className="static selected menu-item ms-core-listMenu-item ms-displayInline ms-bold ms-core-listMenu-selected ms-navedit-linkNode"
                                  tabIndex={0}
                                  href="#"
                                  accessKey="1"
                                >
                                  <span className="additional-background ms-navedit-flyoutArrow">
                                    <span className="menu-item-text">
                                      Trang chủ
                                    </span>
                                    <span className="ms-hidden">
                                      Currently selected
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li className="static">
                                <a
                                  className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                  tabIndex={0}
                                  href="#"
                                >
                                  <span className="additional-background ms-navedit-flyoutArrow">
                                    <span className="menu-item-text">
                                      An Giang 190 năm
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h1 id="pageTitle" className="ms-core-pageTitle">
                        <span id="DeltaPlaceHolderPageTitleInTitleArea">
                          <label className="ms-hidden">
                            Đảng bộ tỉnh An Giang
                          </label>
                        </span>
                        <div
                          id="DeltaPlaceHolderPageDescription"
                          className="ms-displayInlineBlock ms-normalWrap"
                        >
                          <a
                            href="#"
                            id="ms-pageDescriptionDiv"
                            style={{ display: "none" }}
                          >
                            <span id="ms-pageDescriptionImage">&#160;</span>
                          </a>
                          <span
                            className="ms-accessible"
                            id="ms-pageDescription"
                          ></span>
                        </div>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div id="contentRow">
                <div
                  id="sideNavBox"
                  className="ms-dialogHidden ms-forceWrap ms-noList"
                  style={{ display: "none" }}
                >
                  <div
                    id="DeltaPlaceHolderLeftNavBar"
                    className="ms-core-navigation"
                    role="navigation"
                  >
                    <a id="startNavigation" tabIndex={-1}></a>
                    <div className="ms-core-sideNavBox-removeLeftMargin">
                      <div id="ctl00_PlaceHolderLeftNavBar_QuickLaunchNavigationManager">
                        <div
                          id="zz6_V4QuickLaunchMenu"
                          className=" noindex ms-core-listMenu-verticalBox"
                        >
                          <ul
                            id="zz7_RootAspMenu"
                            className="root ms-core-listMenu-root static"
                          >
                            <li className="static selected">
                              <a
                                className="static selected menu-item ms-core-listMenu-item ms-displayInline ms-bold ms-core-listMenu-selected ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">Home</span>
                                  <span className="ms-hidden">
                                    Currently selected
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static ms-quicklaunch-dropNode menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Documents
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <span
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">Recent</span>
                                </span>
                              </span>
                              <ul className="static">
                                <li className="static">
                                  <a
                                    className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                    tabIndex={0}
                                    href="#"
                                  >
                                    <span className="additional-background ms-navedit-flyoutArrow">
                                      <span className="menu-item-text">
                                        Test_Survey
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li className="static">
                                  <a
                                    className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                    tabIndex={0}
                                    href="#"
                                  >
                                    <span className="additional-background ms-navedit-flyoutArrow">
                                      <span className="menu-item-text">
                                        PhanLoai_KhoaGiao
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li className="static">
                                  <a
                                    className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                    tabIndex={0}
                                    href="#"
                                  >
                                    <span className="additional-background ms-navedit-flyoutArrow">
                                      <span className="menu-item-text">
                                        PhanLoai_QuocPhongAnNinh
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li className="static">
                                  <a
                                    className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                    tabIndex={0}
                                    href="#"
                                  >
                                    <span className="additional-background ms-navedit-flyoutArrow">
                                      <span className="menu-item-text">
                                        PhanLoai_TheThaoDuLich
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li className="static">
                                  <a
                                    className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                    tabIndex={0}
                                    href="#"
                                  >
                                    <span className="additional-background ms-navedit-flyoutArrow">
                                      <span className="menu-item-text">
                                        XaHoi_PostCategory
                                      </span>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Tin tức - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Quốc tế - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Bạn đọc - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Diễn đàn - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Tư liệu - Văn kiện - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Lĩnh vực
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Loại văn bản
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Cơ quan ban hành
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    thoisu01 - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Van-hoa - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Y tế - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    NhanSuMoi - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    CapUy - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    BanChapHanhDangBoTinh - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    TienToiDaiHoiDang - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    KinhTe - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    BaoVeNenTangCuaDang - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    GioiThieu - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    giaoducyte - Phân loại
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="static">
                              <a
                                className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode"
                                tabIndex={0}
                                href="#"
                              >
                                <span className="additional-background ms-navedit-flyoutArrow">
                                  <span className="menu-item-text">
                                    Site Contents
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="ms-core-listMenu-verticalBox"></div>
                    </div>
                  </div>
                </div>
                <div id="contentBox" aria-live="polite" aria-relevant="all">
                  <div id="notificationArea" className="ms-notif-box"></div>
                  <div id="DeltaPageStatusBar">
                    <div id="pageStatusBar"></div>
                  </div>
                  <div id="DeltaPlaceHolderMain">
                    <a id="mainContent" title="mainContent" tabIndex={-1}></a>
                    <nav
                      id="lv-navbar"
                      className="navbar navbar-default lv-navbar-no-submenu"
                      role="navigation"
                    >
                      <div className="banner-content">
                        <div className="portal-banner">
                          <div className="hidden-xs">
                            <a
                              className="logoPortal"
                              href="#"
                              style={{ display: "flex" }}
                            >
                              <img alt="" src="./filesx/logo.gif" />
                              <img
                                alt=""
                                src="./images/logo/logo1.png"
                                width={"60%"}
                              />
                            </a>
                          </div>
                          <div className="visible-xs">
                            <a
                              className="logoPortal-mb"
                              href="#"
                              style={{ display: "flex" }}
                            >
                              <img alt="" src="./filesx/logo-mb.gif" />
                              <img alt="" src="./filesx/logo2-mobile.png" />
                            </a>
                          </div>
                        </div>
                        <div className="slide-banner">
                          <div
                            id="jssor_1"
                            style={{
                              position: "relative",
                              margin: "0 auto",
                              top: "0px",
                              left: "0px",
                              width: "480px",
                              height: "104px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              data-u="loading"
                              className="jssorl-009-spin"
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "100%",
                                height: "100%",
                                textAlign: "center",
                                backgroundColor: "rgba(0,0,0,0.7)",
                              }}
                            >
                              <img
                                style={{
                                  marginTop: "-19px",
                                  position: "relative",
                                  top: "50%",
                                  width: "38px",
                                  height: "38px",
                                }}
                                src="./filesx/spin.svg"
                              />
                            </div>
                            <div
                              data-u="slides"
                              style={{
                                cursor: "default",
                                position: "relative",
                                top: "0px",
                                left: "0px",
                                width: "480px",
                                height: "104px",
                                overflow: "hidden",
                              }}
                            >
                              <div>
                                <img
                                  data-u="image"
                                  src="./filesx/bgBanner.png"
                                />
                              </div>
                              <div>
                                <img
                                  data-u="image"
                                  src="./filesx/bgBanner1.png"
                                />
                              </div>
                              <div>
                                <img
                                  data-u="image"
                                  src="./filesx/bgBanner2.png"
                                />
                              </div>
                              <div>
                                <img
                                  data-u="image"
                                  src="./filesx/bgBanner3.png"
                                />
                              </div>
                              <div>
                                <img
                                  data-u="image"
                                  src="./filesx/bgBanner4.png"
                                />
                              </div>
                              <div>
                                <img
                                  data-u="image"
                                  src="./filesx/bgBanner5.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lv-menu-top-full">
                        <div className="lv-menu-top">
                          <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                          >
                            {" "}
                            <span className="sr-only">
                              Toggle navigation
                            </span>{" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                          </button>
                          <div
                            className="navbar-collapse collapse"
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
                                    <li className="menutop menutop-index-1 menutop-LV1 Selected hasChildren hasChildrenLV1 ">
                                      <div className="content content-LV1 Selected hasChildren hasChildrenLV1 ">
                                        <div className=" hasChildren hasChildrenLV1 contenticon contenticon-LV1 Selected divnoicon noicon">
                                          <img
                                            src=""
                                            title="Trang Chủ"
                                            className=" hasChildren hasChildrenLV1 contenticonimg contenticonimg-LV1 Selected imgnoicon noicon"
                                          />
                                        </div>
                                        <a
                                          className="contentlink contentlink-LV1 Selected hasChildren hasChildrenLV1 "
                                          target="_self"
                                          href="#"
                                        >
                                          Trang Chủ
                                        </a>
                                      </div>
                                    </li>
                                    <li className="menutop menutop-index-2 menutop-LV1">
                                      <div className="content content-LV1">
                                        <div className="contenticon contenticon-LV1 divnoicon noicon">
                                          <img
                                            src=""
                                            title="Thời sự"
                                            className="contenticonimg contenticonimg-LV1 imgnoicon noicon"
                                          />
                                        </div>
                                        <a
                                          className="contentlink contentlink-LV1"
                                          target="_self"
                                          href="#"
                                        >
                                          Giới thiệu
                                        </a>
                                      </div>
                                      <div className="containerdiv containerdiv-LV2 nobackground showChildren">
                                        <ul className="nav nav-pills">
                                          <li
                                            role="presentation"
                                            className="dropdown"
                                          >
                                            <a
                                              className="dropdown-toggle"
                                              target="_self"
                                              href="#"
                                              role="button"
                                              aria-expanded="false"
                                              data-toggle=""
                                            >
                                              Lịch sử hình thành
                                            </a>
                                          </li>
                                          <li
                                            role="presentation"
                                            className="dropdown"
                                          >
                                            <a
                                              className="dropdown-toggle"
                                              target="_self"
                                              href="#"
                                              role="button"
                                              aria-expanded="false"
                                              data-toggle=""
                                            >
                                              Sơ đồ tổ chức
                                            </a>
                                          </li>
                                          <li
                                            role="presentation"
                                            className="dropdown"
                                          >
                                            <a
                                              className="dropdown-toggle"
                                              target="_self"
                                              href="#"
                                              role="button"
                                              aria-expanded="false"
                                              data-toggle=""
                                            >
                                              Đặc điểm tự nhiên
                                            </a>
                                          </li>
                                          <li
                                            role="presentation"
                                            className="dropdown"
                                          >
                                            <a
                                              className="dropdown-toggle"
                                              target="_self"
                                              href="#"
                                              role="button"
                                              aria-expanded="false"
                                              data-toggle=""
                                            >
                                              Đặc điểm kinh tế xã hội
                                            </a>
                                          </li>
                                          <li
                                            role="presentation"
                                            className="dropdown"
                                          >
                                            <a
                                              className="dropdown-toggle"
                                              target="_self"
                                              href="#"
                                              role="button"
                                              aria-expanded="false"
                                              data-toggle=""
                                            >
                                              Di sản văn hóa
                                            </a>
                                          </li>
                                          <li
                                            role="presentation"
                                            className="dropdown"
                                          >
                                            <a
                                              className="dropdown-toggle"
                                              target="_self"
                                              href="#"
                                              role="button"
                                              aria-expanded="false"
                                              data-toggle=""
                                            >
                                              Du lịch
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="menutop menutop-index-3 menutop-LV1 hasChildren hasChildrenLV1 ">
                                      <div className="content content-LV1 hasChildren hasChildrenLV1 ">
                                        <div className=" hasChildren hasChildrenLV1 contenticon contenticon-LV1 divnoicon noicon">
                                          <img
                                            src=""
                                            title="Xây dựng Đảng"
                                            className=" hasChildren hasChildrenLV1 contenticonimg contenticonimg-LV1 imgnoicon noicon"
                                          />
                                        </div>
                                        <a
                                          className="contentlink contentlink-LV1 hasChildren hasChildrenLV1 "
                                          target="_self"
                                          href="#"
                                        >
                                          Trao đổi hỏi đáp
                                        </a>
                                      </div>
                                    </li>
                                    <li className="menutop menutop-index-4 menutop-LV1">
                                      <div className="content content-LV1">
                                        <div className="contenticon contenticon-LV1 divnoicon noicon">
                                          <img
                                            src=""
                                            title="Bảo vệ nền tảng tư tưởng"
                                            className="contenticonimg contenticonimg-LV1 imgnoicon noicon"
                                          />
                                        </div>
                                        <a
                                          className="contentlink contentlink-LV1"
                                          target="_self"
                                          href="#"
                                        >
                                          Sơ đồ công
                                        </a>
                                      </div>
                                    </li>
                                    <li className="menutop menutop-index-5 menutop-LV1 hasChildren hasChildrenLV1 ">
                                      <div className="content content-LV1 hasChildren hasChildrenLV1 ">
                                        <div className=" hasChildren hasChildrenLV1 contenticon contenticon-LV1 divnoicon noicon">
                                          <img
                                            src=""
                                            title="Cấp ủy"
                                            className=" hasChildren hasChildrenLV1 contenticonimg contenticonimg-LV1 imgnoicon noicon"
                                          />
                                        </div>
                                        <a
                                          className="contentlink contentlink-LV1 hasChildren hasChildrenLV1 "
                                          target="_self"
                                          href="#"
                                        >
                                          Mời họp
                                        </a>
                                      </div>
                                    </li>
                                    <li className="menutop menutop-index-6 menutop-LV1">
                                      <div className="content content-LV1">
                                        <div className="contenticon contenticon-LV1 divnoicon noicon">
                                          <img
                                            src=""
                                            title="Kinh tế"
                                            className="contenticonimg contenticonimg-LV1 imgnoicon noicon"
                                          />
                                        </div>
                                        <a
                                          className="contentlink contentlink-LV1"
                                          target="_self"
                                          href="#"
                                        >
                                          Liên hệ
                                        </a>
                                      </div>
                                    </li>
                                    <li className="menutop menutop-index-7 menutop-LV1">
                                      <div className="content content-LV1">
                                        <div className="contenticon contenticon-LV1 divnoicon noicon">
                                          <img
                                            src=""
                                            title="Xã hội"
                                            className="contenticonimg contenticonimg-LV1 imgnoicon noicon"
                                          />
                                        </div>
                                        <a
                                          className="contentlink contentlink-LV1"
                                          target="_self"
                                          href="#"
                                        >
                                          Chuyển đổi sô
                                        </a>
                                      </div>
                                    </li>
                                    <li className="menutop menutop-index-8 menutop-LV1">
                                      <div className="content content-LV1">
                                        <div className="contenticon contenticon-LV1 divnoicon noicon">
                                          <img
                                            src=""
                                            title="Nhân sự mới"
                                            className="contenticonimg contenticonimg-LV1 imgnoicon noicon"
                                          />
                                        </div>
                                        <a
                                          className="contentlink contentlink-LV1"
                                          target="_self"
                                          href="#"
                                        >
                                          Nhân sự mới
                                        </a>
                                      </div>
                                    </li>
                                    <li className="menutop menutop-index-9 menutop-LV1 hasChildren hasChildrenLV1 ">
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
                                          href="#"
                                        >
                                          Tin tức - sự kiện
                                        </a>
                                      </div>
                                    </li>
                                    <li className="menutop menutop-index-10 menutop-LV1">
                                      <div className="content content-LV1">
                                        <div className="contenticon contenticon-LV1 divnoicon noicon">
                                          <img
                                            src=""
                                            title="Văn hóa"
                                            className="contenticonimg contenticonimg-LV1 imgnoicon noicon"
                                          />
                                        </div>
                                        <a
                                          className="contentlink contentlink-LV1"
                                          target="_self"
                                          href="#"
                                        >
                                          Hình ảnh
                                        </a>
                                      </div>
                                    </li>
                                    <li className="menutop menutop-index-11 menutop-LV1">
                                      <div className="content content-LV1">
                                        <div className="contenticon contenticon-LV1 divnoicon noicon">
                                          <img
                                            src=""
                                            title="Du lịch"
                                            className="contenticonimg contenticonimg-LV1 imgnoicon noicon"
                                          />
                                        </div>
                                        <a
                                          className="contentlink contentlink-LV1"
                                          target="_self"
                                          href="#"
                                        >
                                          Góp ý
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
                          <Marquee
                            className="customText_Blue"
                            pauseOnHover
                            speed={40}
                          >
                            Chào mừng quý vị đến với &nbsp;
                            <strong>
                              Cổng thông tin điện tử Huyện Ủy Krông Ana!
                            </strong>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                          </Marquee>
                        </div>
                        <div
                          className="col-md-3 search3"
                          style={{ display: "flex" }}
                        >
                          <input type="text" style={{ height: 30 }} />
                        </div>
                      </div>
                    </div>
                    <div id="contentRowMain">
                      <div className="portalMain homeMain">
                        <div className="portal-left">
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
                                          <div className="div-Main">
                                            <div className="nav-image">
                                              <div className="div-img">
                                                <img
                                                  className="Container-Image"
                                                  src="./filesx/ubnd.jpg"
                                                  style={{ opacity: 1 }}
                                                />
                                                &nbsp;
                                              </div>
                                              <a className="div-link" href="#">
                                                <div className="div-info">
                                                  Triển khai, thống nhất nội
                                                  dung, chương trình tổ chức Hội
                                                  thi Bí thư Chi bộ giỏi huyện
                                                  Krông Ana năm...
                                                </div>
                                              </a>
                                            </div>
                                            <div className="div-nav">
                                              <div className="div-item-title">
                                                <a
                                                  className="div-item-title-div-link"
                                                  href="#"
                                                >
                                                  <div className="div-info-main">
                                                    Triển khai, thống nhất nội
                                                    dung, chương trình tổ chức
                                                    Hội thi Bí thư Chi bộ giỏi
                                                    huyện Krông Ana năm...
                                                  </div>
                                                </a>
                                              </div>
                                              <div className="div-item-des"></div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="div-item-all">
                                          <ul style={{ listStyleType: "none" }}>
                                            <li
                                              style={{
                                                float: "left",
                                                marginRight: "10px",
                                              }}
                                            >
                                              <a className="button-TinNoiBat selected">
                                                Tin mới nhất
                                              </a>
                                            </li>
                                            <li
                                              style={{
                                                float: "left",
                                                display: "none",
                                              }}
                                            >
                                              <a className="button-TinMoiNhat">
                                                Tin mới nhất
                                              </a>
                                            </li>
                                          </ul>
                                          <div className="div-Tonghop">
                                            <div
                                              id="0"
                                              className="div-item selected"
                                              title="Đoàn đại biểu Quốc hội tỉnh khóa XV tiếp xúc cử tri trước kỳ họp thứ 5 tại huyện Krông Ana"
                                            >
                                              <li className="New-orders-li">
                                                <a href="#">
                                                  <img src="./filesx/Ptrinh-luagao-2.jpg" />
                                                  Đoàn đại biểu Quốc hội tỉnh
                                                  khóa XV tiếp xúc cử tri trước
                                                  kỳ họp thứ 5 tại huyện Krông
                                                  Ana
                                                </a>
                                              </li>
                                            </div>
                                            <div
                                              id="1"
                                              className="div-item"
                                              title="Lễ khởi công sửa chữa, nâng cấp Hồ chức nước buôn Pu Huch"
                                            >
                                              <li className="New-orders-li">
                                                <a href="#">
                                                  <img src="./filesx/AP-soket-nq35-5nam-1.jpg" />
                                                  Lễ khởi công sửa chữa, nâng
                                                  cấp Hồ chức nước buôn Pu Huch
                                                </a>
                                              </li>
                                            </div>
                                            <div
                                              id="2"
                                              className="div-item"
                                              title="Khởi công nhà tình thương cho hộ nghèo tại xã Băng Adrênh"
                                            >
                                              <li className="New-orders-li">
                                                <a href="#">
                                                  <img src="./filesx/CP-xa-ThanhMyTay-ntm-2.jpg" />
                                                  Khởi công nhà tình thương cho
                                                  hộ nghèo tại xã Băng Adrênh
                                                </a>
                                              </li>
                                            </div>
                                            <div
                                              id="3"
                                              className="div-item"
                                              title="Thường trực HĐND huyện họp liên tịch chuẩn bị kỳ họp thứ 6"
                                            >
                                              <li className="New-orders-li">
                                                <a href="#">
                                                  <img src="./filesx/Hoithao-phatgiaonamtong-1.jpg" />
                                                  Thường trực HĐND huyện họp
                                                  liên tịch chuẩn bị kỳ họp thứ
                                                  6
                                                </a>
                                              </li>
                                            </div>
                                            <div
                                              id="4"
                                              className="div-item"
                                              title="Triển khai, thống nhất nội dung, chương trình tổ chức Hội thi Bí thư Chi bộ giỏi huyện Krông Ana năm..."
                                            >
                                              <li className="New-orders-li">
                                                <a href="#">
                                                  <img src="./filesx/TS-nhiemvu-23-1.jpg" />
                                                  Triển khai, thống nhất nội
                                                  dung, chương trình tổ chức Hội
                                                  thi Bí thư Chi bộ giỏi huyện
                                                  Krông Ana năm...
                                                </a>
                                              </li>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ms-clear"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="home3">
                            <div className="COL1">
                              <div className="ms-webpart-zone ms-fullWidth">
                                <div
                                  id="MSOZoneCell_WebPartWPQ28"
                                  className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                                >
                                  <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                    <div
                                      id="WebPartWPQ28"
                                      style={{ width: "100%" }}
                                      className="ms-WPBody "
                                    >
                                      <div className="ms-rtestate-field">
                                        <div
                                          className="lv-box ng-scope"
                                          id="ThoiSu"
                                          ng-controller="ThoiSu"
                                        >
                                          <div className="category-title">
                                            <a href="#">Truyền thông cơ sở</a>
                                          </div>
                                          <div className="row">
                                            <div
                                              className="news-hot col-md-6 col-sm-12 col-xs-12 ng-scope"
                                              ng-repeat="dataItem in DataHtml track by $index"
                                              ng-if="$index==0"
                                            >
                                              <div className="news-img">
                                                _
                                                <img
                                                  alt="Đẩy mạnh cải cách thủ tục hành chính gắn với chuyển đổi số, phục vụ người dân, doanh nghiệp"
                                                  ng-src="./filesx/truso.jpg"
                                                  className="img-responsive"
                                                  src="./filesx/truso.jpg"
                                                />
                                              </div>
                                              <div className="news-title">
                                                <a
                                                  href="#"
                                                  title="Đẩy mạnh cải cách thủ tục hành chính gắn với chuyển đổi số, phục vụ người dân, doanh nghiệp"
                                                  ng-bind="dataItem.Title"
                                                  className="ng-binding"
                                                >
                                                  Đẩy mạnh cải cách thủ tục hành
                                                  chính gắn với chuyển đổi số,
                                                  phục vụ người dân, doanh
                                                  nghiệp
                                                </a>
                                              </div>
                                            </div>
                                            <div className="category-group col-md-6 col-sm-12 col-xs-12">
                                              <div
                                                className="news-item ng-scope"
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                ng-if="$index!=0"
                                              >
                                                <a
                                                  href="#"
                                                  title="Tuyên truyền đăng ký tham gia “Giải thưởng Chuyển đổi số Việt Nam 2023”"
                                                >
                                                  <div className="news-item-other">
                                                    <div className="news-item-title">
                                                      <span
                                                        ng-bind="dataItem.Title"
                                                        className="ng-binding"
                                                      >
                                                        Tuyên truyền đăng ký
                                                        tham gia “Giải thưởng
                                                        Chuyển đổi số Việt Nam
                                                        2023”
                                                      </span>
                                                      <span className="news-item-date ng-binding">
                                                        (29/04/2023)
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="news-item ng-scope"
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                ng-if="$index!=0"
                                              >
                                                <a
                                                  href="#"
                                                  title="Lễ công bố thành lập thị xã Tịnh Biên và các phường thuộc thị xã Tịnh Biên"
                                                >
                                                  <div className="news-item-other">
                                                    <div className="news-item-title">
                                                      <span
                                                        ng-bind="dataItem.Title"
                                                        className="ng-binding"
                                                      >
                                                        Tuyên truyền Cuộc thi
                                                        “Tìm kiếm giải pháp,
                                                        sáng kiến trong việc
                                                        thực hiện cơ cấu lại
                                                        ngành nông nghiệp tỉnh
                                                        Đắk Lắk giai đoạn 2020 –
                                                        2025, định hướng đến năm
                                                        2030”
                                                      </span>
                                                      <span className="news-item-date ng-binding">
                                                        (25/04/2023)
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="news-item ng-scope"
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                ng-if="$index!=0"
                                              >
                                                <a
                                                  href="#"
                                                  title="Lễ công bố thành lập thị xã Tịnh Biên, sự kiện đánh dấu một bước tiến quan trọng trong tiến trình phát triển đô thị của tỉnh An Giang "
                                                >
                                                  <div className="news-item-other">
                                                    <div className="news-item-title">
                                                      <span
                                                        ng-bind="dataItem.Title"
                                                        className="ng-binding"
                                                      >
                                                        Tuyên truyền về công tác
                                                        quản lý nhà nước trong
                                                        hoạt động đăng kiểm xe
                                                        cơ giới
                                                      </span>
                                                      <span className="news-item-date ng-binding">
                                                        (25/04/2023)
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="ms-clear"></div>
                                    </div>
                                  </div>
                                  <div className="ms-PartSpacingVertical"></div>
                                </div>
                                <div
                                  id="MSOZoneCell_WebPartWPQ30"
                                  className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                                >
                                  <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                    <div
                                      id="WebPartWPQ30"
                                      style={{ width: "100%" }}
                                      className="ms-WPBody "
                                    >
                                      <div className="ms-rtestate-field">
                                        <div
                                          className="lv-box ng-scope"
                                          id="AnGiang190Nam"
                                          ng-controller="AnGiang190Nam"
                                        >
                                          <div className="category-title">
                                            <a href="#">Kinh tế chính trị</a>
                                          </div>
                                          <div className="row">
                                            <div
                                              className="news-hot col-md-6 col-sm-12 col-xs-12 ng-scope"
                                              ng-repeat="dataItem in DataHtml track by $index"
                                              ng-if="$index==0"
                                            >
                                              <div className="news-img">
                                                _
                                                <img
                                                  alt="Tịnh Biên rực rỡ cờ hoa đón mừng ngày vui thành lập thị xã vùng biên"
                                                  ng-src="./filesx/ubnd.jpg"
                                                  className="img-responsive"
                                                  src="./filesx/ubnd.jpg"
                                                />
                                              </div>
                                              <div className="news-title">
                                                <a
                                                  href="#"
                                                  title="Tịnh Biên rực rỡ cờ hoa đón mừng ngày vui thành lập thị xã vùng biên"
                                                  ng-bind="dataItem.Title"
                                                  className="ng-binding"
                                                >
                                                  Tiến độ công tác chuẩn bị Đại
                                                  hội Hội nông dân huyện lần thứ
                                                  XI, nhiệm kỳ 2023 – 2028 và
                                                  Đại hội Công đoàn huyện lần
                                                  thứ XI, nhiệm kỳ 2023 - 2028
                                                </a>
                                              </div>
                                            </div>
                                            <div className="category-group col-md-6 col-sm-12 col-xs-12">
                                              <div
                                                className="news-item ng-scope"
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                ng-if="$index!=0"
                                              >
                                                <a
                                                  href="#"
                                                  title="Một thoáng An Giang"
                                                >
                                                  <div className="news-item-other">
                                                    <div className="news-item-title">
                                                      <span
                                                        ng-bind="dataItem.Title"
                                                        className="ng-binding"
                                                      >
                                                        Hội thi đánh giá, xếp
                                                        hạng sản phẩm OCOP năm
                                                        2022
                                                      </span>
                                                      <span className="news-item-date ng-binding">
                                                        (11/02/2023)
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="news-item ng-scope"
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                ng-if="$index!=0"
                                              >
                                                <a
                                                  href="#"
                                                  title="An Giang: Điểm sáng trong công tác “đền ơn đáp nghĩa”"
                                                >
                                                  <div className="news-item-other">
                                                    <div className="news-item-title">
                                                      <span
                                                        ng-bind="dataItem.Title"
                                                        className="ng-binding"
                                                      >
                                                        Huyện Krông Ana phát huy
                                                        Thế mạnh, tiềm năng kêu
                                                        gọi xúc tiến đầu tư
                                                      </span>
                                                      <span className="news-item-date ng-binding">
                                                        (09/02/2023)
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="news-item ng-scope"
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                ng-if="$index!=0"
                                              >
                                                <a
                                                  href="#"
                                                  title="An Giang đoàn kết, năng động, xây dựng  quê hương ngày càng giàu đẹp, văn minh"
                                                >
                                                  <div className="news-item-other">
                                                    <div className="news-item-title">
                                                      <span
                                                        ng-bind="dataItem.Title"
                                                        className="ng-binding"
                                                      >
                                                        Hội thảo đầu bờ trình
                                                        diễn 2 giống lúa TBR225
                                                        và BC15
                                                      </span>
                                                      <span className="news-item-date ng-binding">
                                                        (21/01/2023)
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                              <div
                                                className="news-item ng-scope"
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                ng-if="$index!=0"
                                              >
                                                <a
                                                  href="#"
                                                  title="Thành phố Long Xuyên  phấn đấu xứng tầm đô thị trung tâm của tỉnh"
                                                >
                                                  <div className="news-item-other">
                                                    <div className="news-item-title">
                                                      <span
                                                        ng-bind="dataItem.Title"
                                                        className="ng-binding"
                                                      >
                                                        Ngành Nông nghiệp kiểm
                                                        tra, hướng dẫn công tác
                                                        chăm sóc, phòng trừ sâu
                                                        bệnh hại cây trồng vụ
                                                        đông xuân 2021-2022
                                                      </span>
                                                      <span className="news-item-date ng-binding">
                                                        (22/12/2022)
                                                      </span>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="ms-clear"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lv-zone-2col">
                              <div className="row">
                                <div className="col-md-6 col-xs-12 col-sm-12">
                                  <div className="ms-webpart-zone ms-fullWidth">
                                    <div
                                      id="MSOZoneCell_WebPartWPQ27"
                                      className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                                    >
                                      <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                        <div
                                          id="WebPartWPQ27"
                                          style={{ width: "100%" }}
                                          className="ms-WPBody "
                                        >
                                          <div className="ms-rtestate-field">
                                            <div
                                              className="lv-box ng-scope"
                                              id="ChinhTri"
                                              ng-controller="ChinhTri"
                                            >
                                              <div className="category-title">
                                                <a href="#">Tin Hoạt Động</a>
                                              </div>
                                              <div className="row">
                                                <div
                                                  className="news-hot col-xs-12 ng-scope"
                                                  ng-repeat="dataItem in DataHtml track by $index"
                                                  ng-if="$index==0"
                                                >
                                                  <div className="news-img">
                                                    <img
                                                      alt="Công tác tư tưởng chính trị góp phần làm nên Chiến thắng Điện Biên Phủ "
                                                      ng-src="./filesx/Chien-thang-DBP-69nam-1.jpg"
                                                      className="img-responsive"
                                                      style={{ width: 365 }}
                                                      src="./filesx/Chien-thang-DBP-69nam-1.jpg"
                                                    />
                                                  </div>
                                                  <div className="news-title">
                                                    <a
                                                      href="#"
                                                      title="Công tác tư tưởng chính trị góp phần làm nên Chiến thắng Điện Biên Phủ "
                                                      ng-bind="dataItem.Title"
                                                      className="ng-binding"
                                                    >
                                                      Trung ương Đoàn Krông ANA
                                                      thực hiện các hoạt động an
                                                      sinh xã hội, chăm lo Tết
                                                    </a>
                                                  </div>
                                                </div>
                                                <div className="category-group col-xs-12">
                                                  <div
                                                    className="news-item ng-scope"
                                                    ng-repeat="dataItem in DataHtml track by $index"
                                                    ng-if="$index!=0"
                                                  >
                                                    <a
                                                      href="#"
                                                      title="An Giang: Những ngày tháng lịch sử không thể nào quên"
                                                    >
                                                      <div className="news-item-title">
                                                        <span
                                                          ng-bind="dataItem.Title"
                                                          className="ng-binding"
                                                        >
                                                          Tiến độ công tác chuẩn
                                                          bị Đại hội Hội nông
                                                          dân huyện lần thứ XI,
                                                          nhiệm kỳ 2023 – 2028
                                                          và Đại hội Công đoàn
                                                          huyện lần thứ XI,
                                                          nhiệm kỳ 2023 - 2028
                                                        </span>
                                                        <span className="news-item-date ng-binding">
                                                          (29/04/2023)
                                                        </span>
                                                      </div>
                                                    </a>
                                                  </div>
                                                  <div
                                                    className="news-item ng-scope"
                                                    ng-repeat="dataItem in DataHtml track by $index"
                                                    ng-if="$index!=0"
                                                  >
                                                    <a
                                                      href="#"
                                                      title="Lênin và vấn đề dân chủ"
                                                    >
                                                      <div className="news-item-title">
                                                        <span
                                                          ng-bind="dataItem.Title"
                                                          className="ng-binding"
                                                        >
                                                          Uỷ Ban MTTQVN thị trấn
                                                          Buôn Trấp Tổ chức bàn
                                                          giao hai ngôi nhà đại
                                                          đoàn kết cho hộ nghèo.
                                                        </span>
                                                        <span className="news-item-date ng-binding">
                                                          (17/04/2023)
                                                        </span>
                                                      </div>
                                                    </a>
                                                  </div>
                                                  <div
                                                    className="news-item ng-scope"
                                                    ng-repeat="dataItem in DataHtml track by $index"
                                                    ng-if="$index!=0"
                                                  >
                                                    <a
                                                      href="#"
                                                      title="Cuộc đời và sự nghiệp V.I.Lênin"
                                                    >
                                                      <div className="news-item-title">
                                                        <span
                                                          ng-bind="dataItem.Title"
                                                          className="ng-binding"
                                                        >
                                                          Hội Nông dân Huyện
                                                          Krông Ana tặng quà cho
                                                          Mẹ Việt Nam Anh hùng.
                                                        </span>
                                                        <span className="news-item-date ng-binding">
                                                          (13/04/2023)
                                                        </span>
                                                      </div>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="ms-clear"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xs-12 col-sm-12">
                                  <div className="ms-webpart-zone ms-fullWidth">
                                    <div
                                      id="MSOZoneCell_WebPartWPQ8"
                                      className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                                    >
                                      <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                        <div
                                          id="WebPartWPQ8"
                                          style={{ width: "100%" }}
                                          className="ms-WPBody "
                                        >
                                          <div className="ms-rtestate-field">
                                            <div
                                              className="lv-box ng-scope"
                                              id="XayDungDang"
                                              ng-controller="XayDungDang"
                                            >
                                              <div className="category-title">
                                                <a href="#">
                                                  Tin Tức - Sự Kiện
                                                </a>
                                              </div>
                                              <div className="row">
                                                <div
                                                  className="news-hot col-xs-12 ng-scope"
                                                  ng-repeat="dataItem in DataHtml track by $index"
                                                  ng-if="$index==0"
                                                >
                                                  <div className="news-img">
                                                    <img
                                                      className="img-responsive"
                                                      alt="Thoại Sơn công tác dân vận luôn hướng về cơ sở "
                                                      ng-src="./filesx/ss.jpg"
                                                      src="./filesx/ss.jpg"
                                                    />
                                                  </div>
                                                  <div className="news-title">
                                                    <a
                                                      href="#"
                                                      title="Thoại Sơn công tác dân vận luôn hướng về cơ sở "
                                                      ng-bind="dataItem.Title"
                                                      className="ng-binding"
                                                    >
                                                      Krông ANA tổ chức Đối
                                                      thoại với công nhân và
                                                      người nhận khoán trồng cà
                                                      phê ở Krông ANA
                                                    </a>
                                                  </div>
                                                </div>
                                                <div className="category-group col-xs-12">
                                                  <div
                                                    className="news-item ng-scope"
                                                    ng-repeat="dataItem in DataHtml track by $index"
                                                    ng-if="$index!=0"
                                                  >
                                                    <a
                                                      href="#"
                                                      title="An Giang phát động phong trào thi đua xây dựng “chi bộ bốn tốt”, “đảng bộ cơ sở bốn tốt” giai đoạn 2023-2025"
                                                    >
                                                      <div className="news-item-title">
                                                        <span
                                                          ng-bind="dataItem.Title"
                                                          className="ng-binding"
                                                        >
                                                          “ĐỀ CƯƠNG VỀ VĂN HÓA
                                                          VIỆT NAM NĂM 1943” GIÁ
                                                          TRỊ TRƯỜNG TỒN CÙNG
                                                          DÂN TỘC VIỆT NAM
                                                        </span>
                                                        <span className="news-item-date ng-binding">
                                                          (09/05/2023)
                                                        </span>
                                                      </div>
                                                    </a>
                                                  </div>
                                                  <div
                                                    className="news-item ng-scope"
                                                    ng-repeat="dataItem in DataHtml track by $index"
                                                    ng-if="$index!=0"
                                                  >
                                                    <a
                                                      href="#"
                                                      title="Châu Phú: Đảng bộ xã Thạnh Mỹ Tây tổ chức Hội thi kể chuyện học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh năm 2023 "
                                                    >
                                                      <div className="news-item-title">
                                                        <span
                                                          ng-bind="dataItem.Title"
                                                          className="ng-binding"
                                                        >
                                                          UBND huyện Krông Ana
                                                          tổ chức Hội nghị
                                                          chuyên đề về giải pháp
                                                          tăng cường công tác
                                                          quản lý thu thuế đối
                                                          với cá nhân, hộ kinh
                                                          doanh năm 2023.{" "}
                                                        </span>
                                                        <span className="news-item-date ng-binding">
                                                          (06/05/2023)
                                                        </span>
                                                      </div>
                                                    </a>
                                                  </div>
                                                  <div
                                                    className="news-item ng-scope"
                                                    ng-repeat="dataItem in DataHtml track by $index"
                                                    ng-if="$index!=0"
                                                  >
                                                    <a
                                                      href="#"
                                                      title="Chợ Mới: Giao ban công tác nội chính, phòng, chống tham nhũng, tiêu cực và cải cách tư pháp quý I/2023"
                                                    >
                                                      <div className="news-item-title">
                                                        <span
                                                          ng-bind="dataItem.Title"
                                                          className="ng-binding"
                                                        >
                                                          Lịch thi đấu Lân sư
                                                          rồng huyện Krông Ana
                                                          tỉnh Đắk Lắk mở rộng
                                                        </span>
                                                        <span className="news-item-date ng-binding">
                                                          (19/04/2023)
                                                        </span>
                                                      </div>
                                                    </a>
                                                  </div>
                                                </div>
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
                          </div>
                          <div
                            className="banner-full"
                            style={{ clear: "both" }}
                          >
                            <div className="ms-webpart-zone ms-fullWidth">
                              <div
                                id="MSOZoneCell_WebPartWPQ29"
                                className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                              >
                                <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                  <div
                                    id="WebPartWPQ29"
                                    style={{ width: "100%" }}
                                    className="ms-WPBody "
                                  >
                                    <div className="ms-rtestate-field">
                                      <div
                                        className="lv-box ng-scope"
                                        id="TienToiDaiHoiDang"
                                        ng-controller="TienToiDaiHoiDang"
                                      >
                                        <div className="category-title">
                                          <a href="#">
                                            Tin giáo dục và đào tạo
                                          </a>
                                        </div>
                                        <div className="row">
                                          <div
                                            className="news-hot col-md-6 col-sm-12 col-xs-12 ng-scope"
                                            ng-repeat="dataItem in DataHtml track by $index"
                                            ng-if="$index==0"
                                          >
                                            <div className="news-img">
                                              _
                                              <img
                                                alt="Người lao động An Giang kiến nghị giữ nguyên tuổi nghỉ hưu như hiện nay"
                                                ng-src="./filesx/aa.jpg"
                                                className="img-responsive"
                                                src="./filesx/aa.jpg"
                                              />
                                            </div>
                                            <div className="news-title">
                                              <a
                                                href="#"
                                                title="Người lao động An Giang kiến nghị giữ nguyên tuổi nghỉ hưu như hiện nay"
                                                ng-bind="dataItem.Title"
                                                className="ng-binding"
                                              >
                                                Thêm địa chỉ đỏ Krông ANA giáo
                                                dục truyền thống cho thế hệ trẻ
                                              </a>
                                            </div>
                                          </div>
                                          <div className="category-group col-md-6 col-sm-12 col-xs-12">
                                            <div
                                              className="news-item ng-scope"
                                              ng-repeat="dataItem in DataHtml track by $index"
                                              ng-if="$index!=0"
                                            >
                                              <a
                                                href="#"
                                                title="Ban Pháp chế HĐND tỉnh An Giang giám sát sở, ngành tỉnh về kết quả giải quyết kiến nghị cử tri"
                                              >
                                                <div className="news-item-other">
                                                  <div className="news-item-title">
                                                    <span
                                                      ng-bind="dataItem.Title"
                                                      className="ng-binding"
                                                    >
                                                      Kế hoạch Tổ chức Kỳ thi
                                                      Tốt nghiệp Trung học phổ
                                                      thông năm 2023 tại tỉnh
                                                      Đắk Lắk
                                                    </span>
                                                    <span className="news-item-date ng-binding">
                                                      (09/05/2023)
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                            <div
                                              className="news-item ng-scope"
                                              ng-repeat="dataItem in DataHtml track by $index"
                                              ng-if="$index!=0"
                                            >
                                              <a
                                                href="#"
                                                title="Đoàn giám sát của Thường trực HĐND tỉnh làm việc tại huyện Châu Thành"
                                              >
                                                <div className="news-item-other">
                                                  <div className="news-item-title">
                                                    <span
                                                      ng-bind="dataItem.Title"
                                                      className="ng-binding"
                                                    >
                                                      Đoàn giám sát của Thường
                                                      trực HĐND tỉnh làm việc
                                                      tại huyện Châu Thành
                                                    </span>
                                                    <span className="news-item-date ng-binding">
                                                      (29/04/2023)
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                            <div
                                              className="news-item ng-scope"
                                              ng-repeat="dataItem in DataHtml track by $index"
                                              ng-if="$index!=0"
                                            >
                                              <a
                                                href="#"
                                                title="Giám sát hoạt động Thường trực HĐND TP Long Xuyên"
                                              >
                                                <div className="news-item-other">
                                                  <div className="news-item-title">
                                                    <span
                                                      ng-bind="dataItem.Title"
                                                      className="ng-binding"
                                                    >
                                                      Giám sát hoạt động Thường
                                                      trực HĐND TP Long Xuyên
                                                    </span>
                                                    <span className="news-item-date ng-binding">
                                                      (27/04/2023)
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ms-clear"></div>
                                  </div>
                                </div>
                                <div className="ms-PartSpacingVertical"></div>
                              </div>
                              <div
                                id="MSOZoneCell_WebPartWPQ22"
                                className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                              >
                                <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                  <div
                                    id="WebPartWPQ22"
                                    style={{ width: "100%" }}
                                    className="ms-WPBody "
                                  >
                                    <div className="ms-rtestate-field">
                                      <div
                                        id="Logan"
                                        ng-controller="Logan"
                                        className="ng-scope"
                                      >
                                        <a
                                          ng-repeat="dataItem in DataHtml track by $index"
                                          href="#"
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
                            </div>
                          </div>
                          <div className="lv-zone-2col">
                            <div className="row">
                              <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="ms-webpart-zone ms-fullWidth">
                                  <div
                                    id="MSOZoneCell_WebPartWPQ9"
                                    className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                                  >
                                    <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                      <div
                                        id="WebPartWPQ9"
                                        style={{ width: "100%" }}
                                        className="ms-WPBody "
                                      >
                                        <div className="ms-rtestate-field">
                                          <div
                                            className="lv-box ng-scope"
                                            id="KinhTe"
                                            ng-controller="KinhTe"
                                          >
                                            <div className="category-title">
                                              <a href="#">KINH TẾ</a>
                                            </div>
                                            <div className="row">
                                              <div
                                                className="news-hot col-md-12 col-sm-12 col-xs-12 ng-scope"
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                ng-if="$index==0"
                                              >
                                                <div className="news-img">
                                                  <img
                                                    alt="Đoàn đại biểu Quốc hội tỉnh khóa XV tiếp xúc cử tri trước kỳ họp thứ 5 tại huyện Krông Ana"
                                                    ng-src="./filesx/Ptrinh-luagao-2.jpg"
                                                    className="img-responsive"
                                                    src="./filesx/Ptrinh-luagao-2.jpg"
                                                  />
                                                </div>
                                                <div className="news-title">
                                                  <a
                                                    href="#"
                                                    title="Đoàn đại biểu Quốc hội tỉnh khóa XV tiếp xúc cử tri trước kỳ họp thứ 5 tại huyện Krông Ana"
                                                    ng-bind="dataItem.Title"
                                                    className="ng-binding"
                                                  >
                                                    Đoàn đại biểu Quốc hội tỉnh
                                                    khóa XV tiếp xúc cử tri
                                                    trước kỳ họp thứ 5 tại huyện
                                                    Krông Ana
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="category-group col-md-12 col-sm-12 col-xs-12">
                                                <div
                                                  className="news-item ng-scope"
                                                  ng-repeat="dataItem in DataHtml track by $index"
                                                  ng-if="$index!=0"
                                                >
                                                  <a
                                                    href="#"
                                                    title="Triển khai, thống nhất nội dung, chương trình tổ chức Hội thi Bí thư Chi bộ giỏi huyện Krông Ana năm..."
                                                  >
                                                    <div className="news-item-other">
                                                      <div className="news-item-title">
                                                        <span
                                                          ng-bind="dataItem.Title"
                                                          className="ng-binding"
                                                        >
                                                          Triển khai, thống nhất
                                                          nội dung, chương trình
                                                          tổ chức Hội thi Bí thư
                                                          Chi bộ giỏi huyện
                                                          Krông Ana năm...
                                                        </span>
                                                        <span className="news-item-date ng-binding">
                                                          (09/05/2023)
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="ms-clear"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="ms-webpart-zone ms-fullWidth">
                                  <div
                                    id="MSOZoneCell_WebPartWPQ10"
                                    className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                                  >
                                    <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                      <div
                                        id="WebPartWPQ10"
                                        style={{ width: "100%" }}
                                        className="ms-WPBody "
                                      >
                                        <div className="ms-rtestate-field">
                                          <div
                                            className="lv-box ng-scope"
                                            id="XaHoi"
                                            ng-controller="XaHoi"
                                          >
                                            <div className="category-title">
                                              <a href="#">XÃ HỘI</a>
                                            </div>
                                            <div className="row">
                                              <div
                                                className="news-hot col-md-12 col-sm-12 col-xs-12 ng-scope"
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                ng-if="$index==0"
                                              >
                                                <div className="news-img">
                                                  -
                                                  <img
                                                    alt="Khởi công nhà tình thương cho hộ nghèo tại xã Băng Adrênh"
                                                    ng-src="./filesx/CP-xa-ThanhMyTay-ntm-2.jpg"
                                                    className="img-responsive"
                                                    src="./filesx/CP-xa-ThanhMyTay-ntm-2.jpg"
                                                  />
                                                </div>
                                                <div className="news-title">
                                                  <a
                                                    href="#"
                                                    title="Khởi công nhà tình thương cho hộ nghèo tại xã Băng Adrênh"
                                                    ng-bind="dataItem.Title"
                                                    className="ng-binding"
                                                  >
                                                    Khởi công nhà tình thương
                                                    cho hộ nghèo tại xã Băng
                                                    Adrênh
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="category-group col-md-12 col-sm-12 col-xs-12">
                                                <div
                                                  className="news-item ng-scope"
                                                  ng-repeat="dataItem in DataHtml track by $index"
                                                  ng-if="$index!=0"
                                                >
                                                  <a
                                                    href="#"
                                                    title="Kết nối công nhân,  xây dựng tổ chức Công đoàn"
                                                  >
                                                    <div className="news-item-other">
                                                      <div className="news-item-title">
                                                        <span
                                                          ng-bind="dataItem.Title"
                                                          className="ng-binding"
                                                        >
                                                          Kết nối công nhân, xây
                                                          dựng tổ chức Công đoàn
                                                        </span>
                                                        <span className="news-item-date ng-binding">
                                                          (07/05/2023)
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                                <div
                                                  className="news-item ng-scope"
                                                  ng-repeat="dataItem in DataHtml track by $index"
                                                  ng-if="$index!=0"
                                                >
                                                  <a
                                                    href="#"
                                                    title="“Kết nối công nhân, xây dựng tổ chức” "
                                                  >
                                                    <div className="news-item-other">
                                                      <div className="news-item-title">
                                                        <span
                                                          ng-bind="dataItem.Title"
                                                          className="ng-binding"
                                                        >
                                                          “Kết nối công nhân,
                                                          xây dựng tổ chức”{" "}
                                                        </span>
                                                        <span className="news-item-date ng-binding">
                                                          (22/04/2023)
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                                <div
                                                  className="news-item ng-scope"
                                                  ng-repeat="dataItem in DataHtml track by $index"
                                                  ng-if="$index!=0"
                                                >
                                                  <a
                                                    href="#"
                                                    title="Châu Thành: Xã Hòa Bình Thạnh đạt chuẩn xã nông thôn mới "
                                                  >
                                                    <div className="news-item-other">
                                                      <div className="news-item-title">
                                                        <span
                                                          ng-bind="dataItem.Title"
                                                          className="ng-binding"
                                                        >
                                                          Châu Thành: Xã Hòa
                                                          Bình Thạnh đạt chuẩn
                                                          xã nông thôn mới{" "}
                                                        </span>
                                                        <span className="news-item-date ng-binding">
                                                          (15/04/2023)
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                              </div>
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
                          <div className="COL1">
                            <div className="ms-webpart-zone ms-fullWidth">
                              <div
                                id="MSOZoneCell_WebPartWPQ26"
                                className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                              >
                                <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                  <div
                                    id="WebPartWPQ26"
                                    style={{ width: "100%" }}
                                    className="ms-WPBody "
                                  >
                                    <div className="ms-rtestate-field">
                                      <div
                                        className="lv-box ng-scope"
                                        id="TinQuocTe"
                                        ng-controller="TinQuocTe"
                                      >
                                        <div className="category-title">
                                          <a href="#">QUỐC TẾ</a>
                                        </div>
                                        <div className="row">
                                          <div
                                            className="news-hot col-md-6 col-sm-12 col-xs-12 ng-scope"
                                            ng-repeat="dataItem in DataHtml track by $index"
                                            ng-if="$index==0"
                                          >
                                            <div className="news-img">
                                              <img
                                                alt="ASEAN đánh giá cao đóng góp quan trọng, tích cực của Việt Nam"
                                                ng-src="./filesx/ttxvn_0805_kao_kim_hourn2.jpg"
                                                className="img-responsive"
                                                src="./filesx/ttxvn_0805_kao_kim_hourn2.jpg"
                                              />
                                            </div>
                                            <div className="news-title">
                                              <a
                                                href="#"
                                                title="ASEAN đánh giá cao đóng góp quan trọng, tích cực của Việt Nam"
                                                ng-bind="dataItem.Title"
                                                className="ng-binding"
                                              >
                                                ASEAN đánh giá cao đóng góp quan
                                                trọng, tích cực của Việt Nam
                                              </a>
                                            </div>
                                          </div>
                                          <div className="category-group col-md-6 col-sm-12 col-xs-12">
                                            <div
                                              className="news-item ng-scope"
                                              ng-repeat="dataItem in DataHtml track by $index"
                                              ng-if="$index!=0"
                                            >
                                              <a
                                                href="#"
                                                title="Phụ nữ Việt Nam có nhiều đóng góp xử lý các thách thức toàn cầu"
                                              >
                                                <div className="news-item-other">
                                                  <div className="news-item-title">
                                                    <span
                                                      ng-bind="dataItem.Title"
                                                      className="ng-binding"
                                                    >
                                                      Phụ nữ Việt Nam có nhiều
                                                      đóng góp xử lý các thách
                                                      thức toàn cầu
                                                    </span>
                                                    <span className="news-item-date ng-binding">
                                                      (05/05/2023)
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                            <div
                                              className="news-item ng-scope"
                                              ng-repeat="dataItem in DataHtml track by $index"
                                              ng-if="$index!=0"
                                            >
                                              <a
                                                href="#"
                                                title="Kết quả chuyến thăm chính thức nước Cộng hòa Dân chủ Nhân dân Lào của Chủ tịch nước Võ Văn Thưởng"
                                              >
                                                <div className="news-item-other">
                                                  <div className="news-item-title">
                                                    <span
                                                      ng-bind="dataItem.Title"
                                                      className="ng-binding"
                                                    >
                                                      Kết quả chuyến thăm chính
                                                      thức nước Cộng hòa Dân chủ
                                                      Nhân dân Lào của Chủ tịch
                                                      nước Võ Văn Thưởng
                                                    </span>
                                                    <span className="news-item-date ng-binding">
                                                      (03/05/2023)
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>

                                            <div
                                              className="news-item ng-scope"
                                              ng-repeat="dataItem in DataHtml track by $index"
                                              ng-if="$index!=0"
                                            >
                                              <a
                                                href="#"
                                                title="Tổng thư ký Liên hợp quốc cảnh báo về cuộc xung đột quân sự ở Sudan "
                                              >
                                                <div className="news-item-other">
                                                  <div className="news-item-title">
                                                    <span
                                                      ng-bind="dataItem.Title"
                                                      className="ng-binding"
                                                    >
                                                      Tổng thư ký Liên hợp quốc
                                                      cảnh báo về cuộc xung đột
                                                      quân sự ở Sudan
                                                    </span>
                                                    <span className="news-item-date ng-binding">
                                                      (25/04/2023)
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                            <div
                                              className="news-item ng-scope"
                                              ng-repeat="dataItem in DataHtml track by $index"
                                              ng-if="$index!=0"
                                            >
                                              <a
                                                href="#"
                                                title="Tình hình thế giới tuần qua với những bất ổn đan xen"
                                              >
                                                <div className="news-item-other">
                                                  <div className="news-item-title">
                                                    <span
                                                      ng-bind="dataItem.Title"
                                                      className="ng-binding"
                                                    >
                                                      Tình hình thế giới tuần
                                                      qua với những bất ổn đan
                                                      xen
                                                    </span>
                                                    <span className="news-item-date ng-binding">
                                                      (23/04/2023)
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ms-clear"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="COL1">
                            <div className="ms-webpart-zone ms-fullWidth">
                              <div
                                id="MSOZoneCell_WebPartWPQ25"
                                className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                              >
                                <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                  <div
                                    id="WebPartWPQ25"
                                    style={{ width: "100%" }}
                                    className="ms-WPBody "
                                  >
                                    <div className="ms-rtestate-field">
                                      <div className="lv-box">
                                        <div className="category-title">
                                          <a href="#">NÉT ĐẸP KRÔNG ANA</a>
                                        </div>

                                        <div
                                          id="jssor_pv111"
                                          style={{
                                            position: "relative",
                                            margin: "0 auto",
                                            top: "0px",
                                            left: "0px",
                                            width: "980px",
                                            height: "380px",
                                            overflow: "hidden",
                                            visibility: "hidden",
                                          }}
                                        >
                                          <div
                                            data-u="loading"
                                            className="jssorl-009-spin"
                                            style={{
                                              position: "absolute",
                                              top: "0px",
                                              left: "0px",
                                              width: "100%",
                                              height: "100%",
                                              textAlign: "center",
                                              backgroundColor:
                                                "rgba(0,0,0,0.7)",
                                            }}
                                          >
                                            <img
                                              style={{
                                                marginTop: "-19px",
                                                position: "relative",
                                                top: "50%",
                                                width: "38px",
                                                height: "38px",
                                              }}
                                              src="./filesx/spin.svg"
                                            />
                                          </div>
                                          <div
                                            data-u="slides"
                                            style={{
                                              cursor: "default",
                                              position: "relative",
                                              top: "0px",
                                              left: "0px",
                                              width: "980px",
                                              height: "380px",
                                              overflow: "hidden",
                                            }}
                                          >
                                            <div>
                                              <img
                                                data-u="image"
                                                src="./filesx/hinh1.jpg"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                data-u="image"
                                                src="./filesx/hinh2.jpg"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                data-u="image"
                                                src="./filesx/hinh3.jpg"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                data-u="image"
                                                src="./filesx/hinh4.jpg"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                data-u="image"
                                                src="./filesx/hinh5.jpg"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                data-u="image"
                                                src="./filesx/hinh6.jpg"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                data-u="image"
                                                src="./filesx/hinh7.jpg"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                data-u="image"
                                                src="./filesx/hinh8.jpg"
                                              />
                                            </div>
                                            <div>
                                              <img
                                                data-u="image"
                                                src="./filesx/hinh9.jpg"
                                              />
                                            </div>
                                          </div>
                                          <div
                                            data-u="navigator"
                                            className="jssorb051"
                                            style={{
                                              position: "absolute",
                                              bottom: "12px",
                                              right: "12px",
                                            }}
                                            data-autocenter="1"
                                            data-scale="0.5"
                                            data-scale-bottom="0.75"
                                          >
                                            <div
                                              data-u="prototype"
                                              className="i"
                                              style={{
                                                width: "16px",
                                                height: "16px",
                                              }}
                                            >
                                              <svg
                                                viewBox="0 0 16000 16000"
                                                style={{
                                                  position: "absolute",
                                                  top: 0,
                                                  left: 0,
                                                  width: "100%",
                                                  height: "100%",
                                                }}
                                              >
                                                <circle
                                                  className="b"
                                                  cx="8000"
                                                  cy="8000"
                                                  r="5800"
                                                ></circle>
                                              </svg>
                                            </div>
                                          </div>
                                          <div
                                            data-u="arrowleft"
                                            className="jssora051"
                                            style={{
                                              width: "65px",
                                              height: "65px",
                                              top: "0px",
                                              left: "35px",
                                            }}
                                            data-autocenter="2"
                                            data-scale="0.75"
                                            data-scale-left="0.75"
                                          >
                                            <svg
                                              viewBox="0 0 16000 16000"
                                              style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                              }}
                                            >
                                              <polyline
                                                className="a"
                                                points="11040,1920 4960,8000 11040,14080 "
                                              ></polyline>
                                            </svg>
                                          </div>
                                          <div
                                            data-u="arrowright"
                                            className="jssora051"
                                            style={{
                                              width: "65px",
                                              height: "65px",
                                              top: "0px",
                                              right: "35px",
                                            }}
                                            data-autocenter="2"
                                            data-scale="0.75"
                                            data-scale-right="0.75"
                                          >
                                            <svg
                                              viewBox="0 0 16000 16000"
                                              style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                              }}
                                            >
                                              <polyline
                                                className="a"
                                                points="4960,1920 11040,8000 4960,14080 "
                                              ></polyline>
                                            </svg>
                                          </div>
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
                        <div className="portal-right">
                          <div className="right1">
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
                                        <div className="lv-category">
                                          <a href="#">VỀ KRÔNG ANA</a>
                                        </div>
                                        <link
                                          rel="stylesheet"
                                          type="text/css"
                                          href="./filesx/flexisel-master.css"
                                        />
                                        <div className="nbs-flexisel-container">
                                          <div className="nbs-flexisel-inner">
                                            <ul
                                              id="flexiselDemo1"
                                              className="nbs-flexisel-ul"
                                              style={{
                                                left: "-249px",
                                                display: "block",
                                              }}
                                            >
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: "249px" }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi0"
                                                      className="img-responsive"
                                                      ng-src="./filesx/HN-TU-chuyende-23-3.jpg"
                                                      src="./filesx/HN-TU-chuyende-23-3.jpg"
                                                    />
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi1"
                                                      className="img-responsive"
                                                      ng-src="./filesx/CT-Bithuhuyen-du-hop-chibo-1.jpg"
                                                      src="./filesx/CT-Bithuhuyen-du-hop-chibo-1.jpg"
                                                    />
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi2"
                                                      className="img-responsive"
                                                      ng-src="./filesx/AP-hoinghi-BCH12-3.jpg"
                                                      src="./filesx/AP-hoinghi-BCH12-3.jpg"
                                                    />
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi3"
                                                      className="img-responsive"
                                                      ng-src="./filesx/CD-hoinghi-BCH13-2.jpg"
                                                      src="./filesx/CD-hoinghi-BCH13-2.jpg"
                                                    />
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi0"
                                                      className="img-responsive"
                                                      ng-src="./filesx/HN-TU-chuyende-23-3.jpg"
                                                      src="./filesx/HN-TU-chuyende-23-3.jpg"
                                                    />
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi1"
                                                      className="img-responsive"
                                                      ng-src="./filesx/CT-Bithuhuyen-du-hop-chibo-1.jpg"
                                                      src="./filesx/CT-Bithuhuyen-du-hop-chibo-1.jpg"
                                                    />
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi2"
                                                      className="img-responsive"
                                                      ng-src="./filesx/AP-hoinghi-BCH12-3.jpg"
                                                      src="./filesx/AP-hoinghi-BCH12-3.jpg"
                                                    />
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi3"
                                                      className="img-responsive"
                                                      ng-src="./filesx/CD-hoinghi-BCH13-2.jpg"
                                                      src="./filesx/CD-hoinghi-BCH13-2.jpg"
                                                    />
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div
                                            className="nbs-flexisel-nav-left"
                                            style={{
                                              visibility: "visible",
                                              top: 128,
                                            }}
                                          ></div>
                                          <div
                                            className="nbs-flexisel-nav-right"
                                            style={{
                                              visibility: "visible",
                                              top: 128,
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ms-clear"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="VanKien">
                            <div className="ms-webpart-zone ms-fullWidth">
                              <div
                                id="MSOZoneCell_WebPartWPQ11"
                                className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                              >
                                <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                  <div
                                    id="WebPartWPQ11"
                                    style={{ width: "100%" }}
                                    className="ms-WPBody "
                                  >
                                    <div id="ctl00_ctl33_g_e94ae538_c18b_45ce_bf79_ecdcc9cfcca7">
                                      <div className="lv-box-shadow lv-tulieu-vankien-full">
                                        <div className="category-title">
                                          <a className="lv-category-a" href="#">
                                            Tình Hình KT -XH
                                          </a>
                                        </div>
                                        <div className="lv-tulieu-vankien">
                                          <a
                                            href="#"
                                            title="C.Mác-Ănggen, Lênin, Hồ Chí Minh"
                                          >
                                            Báo cáo tháng 1
                                          </a>
                                          <a
                                            href="#"
                                            title="Lãnh đạo Đảng, nhà nước"
                                          >
                                            Báo cáo tháng 2
                                          </a>
                                          <a
                                            href="#"
                                            title="Ban chấp hành Trung ương"
                                          >
                                            Báo cáo quý 1
                                          </a>
                                          <a
                                            href="#"
                                            title="Các Ban Đảng Trung ương"
                                          >
                                            Báo cáo tháng 4
                                          </a>
                                          <a
                                            href="#"
                                            title="Các Đảng bộ thuộc Trung ương"
                                          >
                                            Báo cáo tháng 5
                                          </a>
                                          <a href="#" title="Văn kiện Đảng">
                                            Báo cáo tháng 6
                                          </a>
                                          <a href="#" title="Tư liệu về Đảng">
                                            Báo cáo tháng 7
                                          </a>
                                          <a href="#" title="Hệ thống văn bản">
                                            Báo cáo tháng 8
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ms-clear"></div>
                                  </div>
                                </div>
                                <div className="ms-PartSpacingVertical"></div>
                              </div>
                              <div
                                id="MSOZoneCell_WebPartWPQ13"
                                className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                              >
                                <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                  <div
                                    id="WebPartWPQ13"
                                    style={{ width: "100%" }}
                                    className="ms-WPBody "
                                  >
                                    <div className="ms-rtestate-field">
                                      <div
                                        className="post-category-slide ng-scope"
                                        id="TinAnh"
                                        ng-controller="TinAnh"
                                      >
                                        <div className="lv-category">
                                          <a href="#">TIN ẢNH</a>
                                        </div>
                                        <link
                                          rel="stylesheet"
                                          type="text/css"
                                          href="./filesx/flexisel-master.css"
                                        />
                                        <div className="nbs-flexisel-container">
                                          <div className="nbs-flexisel-inner">
                                            <ul
                                              id="flexiselDemo2"
                                              className="nbs-flexisel-ul"
                                              style={{
                                                left: -249,
                                                display: "block",
                                              }}
                                            >
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi0"
                                                      className="img-responsive"
                                                      ng-src="./filesx/Thang-TN23-1.jpg"
                                                      src="./filesx/Thang-TN23-1.jpg"
                                                    />
                                                  </div>
                                                  <div className="divlink">
                                                    <span className="ng-binding">
                                                      Công tác xây dựng đập
                                                    </span>
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi1"
                                                      className="img-responsive"
                                                      ng-src="./filesx/Psa-68-nam-thay-thuoc-g.jpg"
                                                      src="./filesx/Psa-68-nam-thay-thuoc-g.jpg"
                                                    />
                                                  </div>
                                                  <div className="divlink">
                                                    <span className="ng-binding">
                                                      Trường THPT Nguyễn Bỉnh
                                                      Khiêm
                                                    </span>
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi2"
                                                      className="img-responsive"
                                                      ng-src="./filesx/02-Langnghe-MHD.jpg"
                                                      src="./filesx/02-Langnghe-MHD.jpg"
                                                    />
                                                  </div>
                                                  <div className="divlink">
                                                    <span className="ng-binding">
                                                      Đập Krông Búk Hạ
                                                    </span>
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi3"
                                                      className="img-responsive"
                                                      ng-src="./filesx/10-Nho-on-liet-si.jpg"
                                                      src="./filesx/10-Nho-on-liet-si.jpg"
                                                    />
                                                  </div>
                                                  <div className="divlink">
                                                    <span className="ng-binding">
                                                      Thi đua - khen thưởng
                                                    </span>
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi4"
                                                      className="img-responsive"
                                                      ng-src="./filesx/01-nghedangio-nilon.jpg"
                                                      src="./filesx/01-nghedangio-nilon.jpg"
                                                    />
                                                  </div>
                                                  <div className="divlink">
                                                    <span className="ng-binding">
                                                      Phòng văn hóa thông tin
                                                    </span>
                                                  </div>
                                                </a>
                                              </li>
                                              <li
                                                ng-repeat="dataItem in DataHtml track by $index"
                                                className="nbs-flexisel-item ng-scope"
                                                style={{ width: 249 }}
                                              >
                                                <a href="#">
                                                  <div className="divimg">
                                                    <img
                                                      id="imgtinconduoi5"
                                                      className="img-responsive"
                                                      ng-src="./filesx/PSA-Thuongbinh-khongphe-1.jpg"
                                                      src="./filesx/PSA-Thuongbinh-khongphe-1.jpg"
                                                    />
                                                  </div>
                                                  <div className="divlink">
                                                    <span className="ng-binding">
                                                      Hội thi cán bộ duyên dáng
                                                    </span>
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div
                                            className="nbs-flexisel-nav-left"
                                            style={{
                                              visibility: "visible",
                                              top: 128,
                                            }}
                                          ></div>
                                          <div
                                            className="nbs-flexisel-nav-right"
                                            style={{
                                              visibility: "visible",
                                              top: 128,
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ms-clear"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="right2"></div>
                          <div className="right3">
                            <div className="ms-webpart-zone ms-fullWidth">
                              <div
                                id="MSOZoneCell_WebPartWPQ14"
                                className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                              >
                                <div className="ms-hide ">
                                  <div
                                    id="WebPartWPQ14"
                                    style={{ width: "100%" }}
                                    className="ms-WPBody "
                                  >
                                    <div id="ctl00_ctl33_g_134ca256_6048_4e08_b310_17aa61be06f1">
                                      <link
                                        rel="stylesheet"
                                        type="text/css"
                                        href="./filesx/VideoNoiBat.css"
                                      />
                                      <div id="div_TabVideo">
                                        <div
                                          id="divVideoContainer"
                                          className="div-video-container"
                                        >
                                          <div className="tabContainer">
                                            <div
                                              id="divTabVideo"
                                              className="tabitem tab-Video selected"
                                            >
                                              TRUYỀN HÌNH
                                            </div>
                                            <div
                                              id="divTabAudio"
                                              className="tabitem tab-Video"
                                            >
                                              PHÁT THANH
                                            </div>
                                          </div>
                                          <div className="div-image-xt">
                                            <a href="#">Xem thêm</a>&nbsp;
                                          </div>
                                          <div className="lv-v-noibat">
                                            <div className="lv-media-image">
                                              <div className="lv-media-thumb">
                                                <div
                                                  className="MainScreen"
                                                  id="idyoutube"
                                                  style={{
                                                    display: "none",
                                                    textAlign: "center",
                                                    width: "100%",
                                                    height: "100%",
                                                  }}
                                                >
                                                  <iframe
                                                    className="MainScreen-YouTube"
                                                    id="idiframe"
                                                    style={{
                                                      margin: " 0 auto",
                                                      height: "100%",
                                                      width: "100%",
                                                    }}
                                                    src="./filesx/saved_resource.html"
                                                  ></iframe>
                                                </div>
                                                <div
                                                  id="mpplay"
                                                  className="MainScreen"
                                                  style={{
                                                    display: "block",
                                                    textAlign: "center",
                                                    width: "100%",
                                                    height: "100%",
                                                  }}
                                                >
                                                  <div
                                                    id="idjwplayer"
                                                    className="MainScreen-Player"
                                                  >
                                                    <div id="djwplayer_wrapper">
                                                      <video
                                                        style={{
                                                          height: "150px",
                                                          width: "100%",
                                                          backgroundColor:
                                                            "#000",
                                                        }}
                                                      >
                                                        <source
                                                          src="./filesx/Du_Lich_DBSCL_An_Giang.mp4"
                                                          type="video/mp4"
                                                        />
                                                      </video>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="lv-media-more">
                                              <div className="lv-media-more-item">
                                                <i
                                                  className="fa fa-play-circle-o"
                                                  aria-hidden="true"
                                                >
                                                  <span
                                                    style={{ display: "none" }}
                                                  >
                                                    hidden
                                                  </span>
                                                </i>
                                                <a
                                                  href="#"
                                                  title="Tỉnh An Giang danh lam thắng cảnh - Mời bạn hãy đến thăm Tỉnh An Giang"
                                                >
                                                  &nbsp;Tỉnh An Giang danh lam
                                                  thắng cảnh - Mời bạn hãy đến
                                                  thăm Tỉnh An Giang
                                                </a>
                                              </div>
                                              <div className="lv-media-more-item">
                                                <i
                                                  className="fa fa-play-circle-o"
                                                  aria-hidden="true"
                                                >
                                                  <span
                                                    style={{ display: "none" }}
                                                  >
                                                    hidden
                                                  </span>
                                                </i>
                                                <a
                                                  href="#"
                                                  title="Giới thiệu An Giang - Mời bạn hãy đến thăm Tỉnh An Giang"
                                                >
                                                  &nbsp;Giới thiệu An Giang -
                                                  Mời bạn hãy đến thăm Tỉnh An
                                                  Giang
                                                </a>
                                              </div>
                                              <div className="lv-media-more-item">
                                                <i
                                                  className="fa fa-play-circle-o"
                                                  aria-hidden="true"
                                                >
                                                  <span
                                                    style={{ display: "none" }}
                                                  >
                                                    hidden
                                                  </span>
                                                </i>
                                                <a
                                                  href="#"
                                                  title="Du lịch An Giang - Mời bạn hãy đến thăm Tỉnh An Giang"
                                                >
                                                  &nbsp;Du lịch An Giang - Mời
                                                  bạn hãy đến thăm Tỉnh An Giang
                                                </a>
                                              </div>
                                            </div>
                                            <div className="media-body">
                                              <div
                                                className="playmedia noibat-active"
                                                id="noibat1"
                                                style={{ display: "none" }}
                                              >
                                                <div className="media-item">
                                                  <div className="media-item-image">
                                                    <img src="./filesx/defautmedia.jpg" />
                                                    &nbsp;
                                                  </div>
                                                  <div className="media-item-title">
                                                    <span className="item-tt">
                                                      Giới thiệu du lịch Tỉnh An
                                                      Giang - Mời bạn hãy đến
                                                      thăm Tỉnh An Giang&nbsp;
                                                    </span>
                                                    <span className="item-mt">
                                                      Video giới thiệu du lịch
                                                      của Tỉnh An Giang&nbsp;
                                                    </span>
                                                  </div>
                                                  <input
                                                    type="hidden"
                                                    id="hd_video1"
                                                    name="hd_video"
                                                    value='&lt;?xml version="1.0"?&gt;
                                            &lt;VideoFieldEntity xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"&gt;
                                            &lt;Url&gt;http://www.youtube.com/embed/lmrtiSDbWQg?rel=0&lt;/Url&gt;
                                            &lt;Type&gt;youtube&lt;/Type&gt;
                                            &lt;/VideoFieldEntity&gt;'
                                                  />
                                                  <input
                                                    type="hidden"
                                                    id="hd_img1"
                                                    name="hd_img"
                                                    value="/Style Library/Vebrary/CustomMedia/Images/defautmedia.jpg"
                                                  />
                                                  &nbsp;
                                                </div>
                                                &nbsp;
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ms-clear"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="right4">
                            <div className="ms-webpart-zone ms-fullWidth">
                              <div
                                id="MSOZoneCell_WebPartWPQ15"
                                className="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth "
                              >
                                <div className="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth ">
                                  <div
                                    id="WebPartWPQ15"
                                    style={{ width: "100%" }}
                                    className="ms-WPBody "
                                  >
                                    <div className="ms-rtestate-field">
                                      <div
                                        className="banner-group group1 row ng-scope"
                                        id="BannerRight2"
                                        ng-controller="BannerRight2"
                                      ></div>
                                    </div>
                                    <div className="ms-clear"></div>
                                  </div>
                                </div>
                                <div className="ms-PartSpacingVertical"></div>
                              </div>
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
                                          <a href="#" target="_self">
                                            <img
                                              className="img-responsive"
                                              alt=""
                                              ng-src="KhoHinhAnhBanner/Tu-tuong-Bac-Ho.jpg"
                                              src="./filesx/Tu-tuong-Bac-Ho.jpg"
                                            />
                                          </a>
                                        </div>
                                        <div
                                          className="banner-img ng-scope"
                                          ng-repeat="dataItem in DataHtml track by $index"
                                        >
                                          <a href="#" target="_blank">
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
                                          <a href="#" target="_self">
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
                                          <a href="#" target="_parent">
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
                                          <a href="#" target="_blank">
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
                                          <a href="#" target="_blank">
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
                      <div style={{ display: "none" }} id="hidZone"></div>
                    </div>
                    <div
                      className="pre-footer hidden-xs"
                      style={{ clear: "both" }}
                    >
                      <div className="pre-footer-content row">
                        <div className="col-md-8">
                          <div className="link-web-title">LIÊN KẾT</div>
                        </div>
                        <div className="col-md-4">
                          <div className="link-web-item">
                            <div className="ms-webpart-chrome ms-webpart-chrome-fullWidth ">
                              <div
                                id="WebPartWPQ2"
                                style={{ width: "100%" }}
                                className="ms-WPBody "
                              >
                                <div id="ctl00_g_a8f99d5c_832c_434f_bd19_70b85b4aa27c">
                                  <select
                                    id="Select_LienKetWebSite"
                                    className="wide"
                                  >
                                    <option
                                      value=""
                                      className="option selected"
                                    >
                                      Liên kết website
                                    </option>
                                    <option
                                      value="http://www.dangcongsan.vn"
                                      className="option"
                                    >
                                      Đảng Cộng sản Việt Nam
                                    </option>
                                    <option
                                      value="http://www.chinhphu.vn"
                                      className="option"
                                    >
                                      Cổng thông tin Chính phủ
                                    </option>
                                  </select>
                                </div>
                                <div className="ms-clear"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="topPage">
                      <a href="#" className="scrollup veb-ftop-a-f">
                        <i className="fa fa-angle-up"></i>
                      </a>
                    </div>
                    <div className="pre-footer-link-full hidden-xs">
                      <div className="pre-footer-link row">
                        <div className="col-md-3">
                          <div className="ms-webpart-chrome ms-webpart-chrome-fullWidth ">
                            <div
                              id="WebPartWPQ3"
                              style={{ width: "100%" }}
                              className="ms-WPBody "
                            >
                              <div id="ctl00_g_b412cecf_aaf2_49f7_8504_1b07cf3021fc">
                                <div className="lv-menu-footer">
                                  <a href="#" title="THỜI SỰ">
                                    TRAO ĐỔI HỎI ĐÁP
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a href="#" title="CHÍNH TRỊ">
                                    SƠ ĐỒ CÔNG
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a href="#" title="KINH TẾ">
                                    MỜI HỌP
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a href="#" title="XÃ HỘI">
                                    THÔNG BÁO
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a href="#" title="VĂN HÓA">
                                    LIÊN HỆ
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a href="#" title="NHÂN SỰ MỚI">
                                    CHUYỂN ĐỔI SỐ
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="ms-clear"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="ms-webpart-chrome ms-webpart-chrome-fullWidth ">
                            <div
                              id="WebPartWPQ4"
                              style={{ width: "100%" }}
                              className="ms-WPBody "
                            >
                              <div id="ctl00_g_f44851ba_c895_4f98_9749_aaaf9e519d9a">
                                <div className="lv-menu-footer">
                                  <a href="#" title="Y TẾ - SỨC KHỎE">
                                    TIN TỨC SỰ KIỆN
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a href="#" title="GIÁO DỤC - KHOA HỌC">
                                    CHUYÊN MỤC NÔNG THÔNG
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a href="#" title="DU LỊCH - THỂ THAO">
                                    THƯ VIỆN HÌNH ẢNH
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a href="#" title="QUỐC PHÒNG - AN NINH">
                                    CHƯƠNG TRÌNH TRUYỀN HÌNH
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a href="#" title="TƯ LIỆU - VĂN KIỆN">
                                    BAN BIÊN TẬP
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a href="#" title="QUỐC TẾ">
                                    GÓP Ý
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="ms-clear"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 last">
                          <div className="ms-webpart-chrome ms-webpart-chrome-fullWidth ">
                            <div
                              id="WebPartWPQ5"
                              style={{ width: "100%" }}
                              className="ms-WPBody "
                            >
                              <div id="ctl00_g_0442422b_d24e_43b9_b4e5_4a7035db4cc7">
                                <div className="lv-menu-footer">
                                  <a href="#" title="XÂY DỰNG ĐẢNG">
                                    GIỚI THIỆU
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    className="lv-menu-footer-level2"
                                    title="Công tác tổ chức"
                                  >
                                    Lịch sử hình thành
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    className="lv-menu-footer-level2"
                                    title="Công tác kiểm tra"
                                  >
                                    Sơ đồ tổ chức
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    className="lv-menu-footer-level2"
                                    title="Công tác tuyên giáo"
                                  >
                                    Đặc điểm tự nhiên
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    className="lv-menu-footer-level2"
                                    title="Công tác nội chính"
                                  >
                                    Đặc điểm kinh tế xã hội
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    className="lv-menu-footer-level2"
                                    title="Công tác dân vận"
                                  >
                                    Di sản văn hóa
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="ms-clear"></div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3 last">
                          <div className="ms-webpart-chrome ms-webpart-chrome-fullWidth ">
                            <div
                              id="WebPartWPQ6"
                              style={{ width: "100%" }}
                              className="ms-WPBody "
                            >
                              <div id="ctl00_g_56451890_e2e3_4b6c_843e_6fa1a8bcf6ea">
                                <div className="lv-menu-footer">
                                  <a href="#" title="CẤP ỦY">
                                    HỆ THỐNG CHÍNH TRỊ
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    className="lv-menu-footer-level2"
                                    title="Tin hoạt động"
                                  >
                                    Huyện ủy
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    className="lv-menu-footer-level2"
                                    title="Ban Chấp hành Đảng bộ tỉnh"
                                  >
                                    Hội đồng nhân dân huyện
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    className="lv-menu-footer-level2"
                                    title="Tiến tới Đại hội Đảng"
                                  >
                                    Ủy ban nhân dân huyện
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                  <a
                                    href="#"
                                    className="lv-menu-footer-level2"
                                    title="Bảo vệ nền tảng tư tưởng của Đảng"
                                  >
                                    Ủy ban nhân dân xã, thị trấn
                                    <span style={{ display: "none" }}>
                                      hidden
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="ms-clear"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="footer-content row">
                        <div id="ctl00_g_91ea13ce_902e_4f6e_b075_5bed268b3192">
                          <div>
                            <strong style={{ fontFamily: "tahoma" }}>
                              CỔNG THÔNG TIN ĐIỆN TỬ HUYỆN KRÔNG ANA
                            </strong>
                          </div>
                          <div>
                            <strong>Trụ sở&#58;</strong>&#160;UBND huyện Krông
                            Ana - 94 Nguyễn Tất Thành, Thị trấn Buôn Trấp, huyện
                            Krông Ana, tỉnh Đắk Lắk
                            <br />
                            <strong>Điện thoại&#58;</strong> 0262
                            3637026&#160;&#160;
                            <strong>
                              <br />
                            </strong>
                          </div>
                          <div>
                            <strong>Email&#58;</strong>{" "}
                            banbientap@krongana.daklak.gov.vn
                          </div>
                          Bản quyền thuộc Ủy Ban Nhân Dân Huyện Krông Ana.
                          <br />
                          Ghi rõ nguồn khi phát hành thông tin từ nguồn này. ​
                        </div>
                      </div>

                      <div className="ms-webpart-chrome ms-webpart-chrome-fullWidth ">
                        <div
                          id="WebPartWPQ7"
                          style={{ width: "100%" }}
                          className="ms-WPBody "
                        >
                          <div id="ctl00_g_b67c5a24_1109_4872_ba88_7972e17e1acf">
                            <div style={{ display: "none" }}>
                              <span id="ctl00_g_b67c5a24_1109_4872_ba88_7972e17e1acf_ctl00_Label_TruyCap">
                                1804975
                              </span>
                              <span id="ctl00_g_b67c5a24_1109_4872_ba88_7972e17e1acf_ctl00_Label_Count">
                                1
                              </span>
                            </div>
                            <div className="ThongKeSoLuot">
                              <div className="tieudethongke">
                                <div className="tieudethongke1">
                                  Thống kê truy cập
                                </div>
                              </div>
                              <div className="SoLuongOnline">
                                <span className="SoLuongOnline1">
                                  Đang online:{" "}
                                </span>
                                <div id="slol1">0</div>
                                <div id="slol2">0</div>
                                <div id="slol3">0</div>
                                <div id="slol4">0</div>
                                <div id="slol5">0</div>
                                <div id="slol6">0</div>
                                <div id="slol7">0</div>
                              </div>
                              <div className="SoLuongTruyCap">
                                <span className="SoLuongTruyCap1">
                                  Lượt truy cập:
                                </span>
                                <div id="sltc1">0</div>
                                <div id="sltc2">0</div>
                                <div id="sltc3">0</div>
                                <div id="sltc4">0</div>
                                <div id="sltc5">0</div>
                                <div id="sltc6">0</div>
                                <div id="sltc7">0</div>
                              </div>
                            </div>
                          </div>
                          <div className="ms-clear"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="scrollup visible-xs"
                    style={{
                      position: "fixed",
                      right: "40px",
                      bottom: "20px",
                      zIndex: 2000,
                      display: "none",
                    }}
                  >
                    <i className="fa fa-arrow-up"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </html>
  );
};

export default Dashboard;
