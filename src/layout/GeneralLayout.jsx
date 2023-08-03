import Sidebar from "../components/Sidebar";

// 페이지의 레이아웃을 관리하는 컴포넌트입니다.
const GeneralLayout = ({ children }) => {
  return (
    <div className="App">
      <Sidebar />
      {children}
    </div>
  );
};

export default GeneralLayout;
