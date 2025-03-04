const Sidebar = () => {
    return (
      <aside className="w-1/3 bg-white p-4 border-l">
        <div className="mb-4">
          <h2 className="font-bold text-lg">날씨</h2>
          <p>7.8°C, 비</p>
        </div>
        <div className="mb-4">
          <h2 className="font-bold text-lg">증시</h2>
          <p>코스피 2,532.89</p>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;