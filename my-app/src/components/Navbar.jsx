const Navbar = () => {
    const menus = ["메일", "카페", "블로그", "쇼핑", "뉴스", "증권", "부동산", "지도"];
    return (
      <nav className="w-full bg-white shadow-md py-2">
        <ul className="flex justify-center space-x-6">
          {menus.map((menu, idx) => (
            <li key={idx} className="text-gray-700 font-medium cursor-pointer hover:text-green-600">
              {menu}
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;