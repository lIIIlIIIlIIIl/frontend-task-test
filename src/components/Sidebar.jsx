import MenuItem from "./common/MenuItem";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <MenuItem bigMenuTitle="대메뉴" smallTitles={menu1} />
      <MenuItem bigMenuTitle="대메뉴" smallTitles={menu2} />
    </aside>
  );
};

export default Sidebar;

const menu1 = [
  { path: "/", name: "소메뉴" },
  { path: "/menu1", name: "소메뉴1" },
];
const menu2 = [
  { path: "/menu2", name: "소메뉴2" },
  { path: "/menu3", name: "소메뉴3" },
];
