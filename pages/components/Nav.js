//tool imports
import Link from 'next/link';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Container>
      <h1>This is the nav</h1>
      <LinksUl>
        <Link href='/gallery'>
          <a>Gallery</a>
        </Link>
        <Link href='/services'>
          <a>Services</a>
        </Link>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </LinksUl>
    </Container>
  );
};

const Container = styled.div`
  height: 10vh;
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
`;
const Logo = styled.div``;
const LinksUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 2rem;
  list-style-type: none;
`;
// const Link = styled.li``;

export default Nav;
