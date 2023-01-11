import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../Container/Container";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

const Header = () => {
  // const navigate = useNavigate();

  const [theme, setTheme] = useState("dark");

  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const HeaderElement = styled.div`
    background-color: var(--colors-bg);
    box-shadow: var(--shadow);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const LogoTitle = styled.a`
    color: var(--colors-text);
    font-size: var(--fs-m);
    text-decoration: none;
    line-height: 1.5rem;
    cursor: pointer;

    position: relative;
    &:hover {
      top: 2px;
    }
  `;

  const List = styled.ul`
    display: flex;
    justify-content: space-around;
    font-size: var(--fs-s);
    gap: 1.5rem;
  `;

  const ListItem = styled.li`
    list-style: none;
    cursor: pointer;

    position: relative;
    &:hover {
      top: 2px;
    }
  `;

  const ThemeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-m);
    cursor: pointer;

    position: relative;
    &:hover {
      top: 2px;
    }
  `;

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <LogoTitle>
            ALLIANCE
            <br />
            ELECTRONICS
          </LogoTitle>
          <List>
            <ListItem>О нас</ListItem>
            <ListItem>Наши услуги</ListItem>
            <ListItem>Доставка</ListItem>
            <ListItem>Гарантия</ListItem>
            <ListItem>Контакты</ListItem>
          </List>
          <ThemeSwitcher onClick={changeTheme}>
            {theme === "dark" ? (
              <IoMoon style={{ fontSize: "18px" }} />
            ) : (
              <IoMoonOutline style={{ fontSize: "18px" }} />
            )}
            <span style={{ margin: "0.75rem" }}>{theme} theme</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};

export default Header;
