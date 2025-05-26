import { useNavigate } from "react-router-dom";
import search from "../../assets/search.png";
import { Button, Container, Icon, Input } from "./styled";

export default function SearchBar() {
  const navigate = useNavigate();

  const onSearch = () => {
    navigate("/");
  };

  return (
    <Container>
      <Input />
      <Button onClick={onSearch}>
        <Icon src={search} />
      </Button>
    </Container>
  );
}
