import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import MenuOne from "./page/MenuOne";
import MenuThree from "./page/MenuThree";
import MenuTwo from "./page/MenuTwo";
import GeneralLayout from "./layout/GeneralLayout";

// 페이지 라우터를 관리합니다.
const reouterData = [
  { id: 0, path: "/", element: <Home /> },
  { id: 1, path: "/menu1", element: <MenuOne /> },
  { id: 2, path: "/menu2", element: <MenuTwo /> },
  { id: 3, path: "/menu3", element: <MenuThree /> },
];

export const routers = createBrowserRouter(
  reouterData.map((router) => {
    return {
      path: router.path,
      element: <GeneralLayout>{router.element}</GeneralLayout>,
    };
  })
);
