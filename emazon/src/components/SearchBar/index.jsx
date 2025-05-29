import { useNavigate } from "react-router-dom";
import search from "../../assets/search.png";
import { Button, Container, Icon, Input } from "./styled";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../redux/filterSlice";
import { useState } from "react";

export default function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSearch = () => {
    navigate("/");
    dispatch(setSearchText(text));
  };

  return (
    <Container>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <Button onClick={handleSearch}>
        <Icon src={search} />
      </Button>
    </Container>
  );
}
