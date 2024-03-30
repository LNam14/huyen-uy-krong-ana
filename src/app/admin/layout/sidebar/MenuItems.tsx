import {
  IconBoxMultiple,
  IconCircleDot,
  IconHome,
  IconInfoCircle,
  IconLayout,
  IconLayoutGrid,
  IconPhoto,
  IconPoint,
  IconStar,
  IconTable,
  IconUser,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Danh mục",
    icon: IconHome,
    href: "/admin/pages/category",
  },
  {
    id: uniqueId(),
    title: "Soạn tin",
    icon: IconHome,
    href: "/admin/pages/news",
  },
  {
    id: uniqueId(),
    title: "Quản lý layout",
    icon: IconCircleDot,
    href: "/admin/pages/layout",
  },
  // {
  //   id: uniqueId(),
  //   title: "Trang GIỚI THIỆU",
  //   icon: IconTable,
  //   href: "/admin/pages/introduce",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Alerts",
  //   icon: IconInfoCircle,
  //   href: "/admin/pages/alerts",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Ratings",
  //   icon: IconStar,
  //   href: "/admin/pages/ratings",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Images",
  //   icon: IconPhoto,
  //   href: "/admin/pages/images",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Pagination",
  //   icon: IconUser,
  //   href: "/admin/pages/pagination",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Tables",
  //   icon: IconLayoutGrid,
  //   href: "/admin/pages/table",
  // },
];

export default Menuitems;
