import React from "react";
import styled from "styled-components";

const MenuItemContainer = styled.div`
  height: calc((100vh - ${(props) => props.theme.sizes.xxLarge}) / 2);
  margin: ${(props) => props.theme.sizes.tiny};
  flex: 1 0 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentText = styled.div`
    height: ${(props) => props.theme.sizes.xxLarge};
    width: ${(props) => props.theme.sizes.xxLarge};
    background: rgba(256, 256, 256, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContentTitle = styled.h1`
    font-family: Montserrat;
    font-size: ${(props) => props.theme.fonts.medium}
`;

const MenuItem = (props) => {
  const { title, imageURL } = props;

  return (
    <MenuItemContainer>
      <Content
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      > 
        <ContentText>
            <ContentTitle>{title}</ContentTitle>
        </ContentText>
      </Content>
    </MenuItemContainer>
  );
};

export default MenuItem;
