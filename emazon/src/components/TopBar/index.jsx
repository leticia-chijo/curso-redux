import SearchBar from "../SearchBar";
import CartButton from "../CartButton";
import { BarBackground, Logo } from "./styled";
import logo from "../../assets/logoContrast.png";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <BarBackground>
      <Logo src={logo} onClick={() => navigate("/")} />
      <SearchBar />
      <CartButton />
    </BarBackground>
  );
}
