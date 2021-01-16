import Link from 'next/link';
import styled from 'styled-components';
const Nav = () => {
  return (
    <Container>
      <Logo>This is the nav</Logo>
      <LinksUl>
        <Link>
          <a>About me</a>
        </Link>
        <Link>two</Link>
        <Link>three</Link>
        <Link>four</Link>
      </LinksUl>
    </Container>
  );
};

const Container = styled.div`
  height: 10vh;
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  padding: 2rem;
`;
const Logo = styled.div`
  margin: 2rem;
`;
const LinksUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 2rem;
  list-style-type: none;
`;

export default Nav;
