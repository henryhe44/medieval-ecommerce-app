import React from "react";
import styled from "styled-components";
import MenuItem from "../components/MenuItem";
import ArmorMenuImg from "../images/ArmorMenuImg.jpg";
import HelmetMenuImg from "../images/HelmetMenuImg.jpg";
import WeaponsMenuImg from "../images/WeaponsMenuImg.jpg";
import TrinketsMenuImg from "../images/TrinketsMenuImg.jpg";

const Container = styled.div`
  padding-top: ${(props) => props.theme.sizes.navHeight};
  padding-left: ${(props) => props.theme.sizes.xLarge};
  padding-right: ${(props) => props.theme.sizes.xLarge};
  display: flex;
  flex-wrap: wrap;
`;

const Homepage = () => {
  return (
    <Container>
      <MenuItem title={"ARMOR"} imageURL={ArmorMenuImg} />
      <MenuItem title={"HEAD"} imageURL={HelmetMenuImg}/>
      <MenuItem title={"ARMS"} imageURL={WeaponsMenuImg}/>
      <MenuItem title={"MISC."} imageURL={TrinketsMenuImg}/>
    </Container>
  );
};

export default Homepage;
