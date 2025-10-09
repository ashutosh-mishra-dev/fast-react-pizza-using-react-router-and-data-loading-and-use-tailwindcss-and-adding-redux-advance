import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast react Pizza Co.</Link>
      <SearchOrder />
      <p> Ashutosh Mishra</p>
    </header>
  );
}

export default Header;
