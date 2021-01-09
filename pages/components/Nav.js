//tool imports
import styled from 'styled-components';
const Nav = () => {
  return (
    <Container>
      <h1>This is the nav</h1>
      <LinksUl>
        <Link>one</Link>
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
`;
const Logo = styled.div``;
const LinksUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 2rem;
  list-style-type: none;
`;
const Link = styled.li``;

export default Nav;
