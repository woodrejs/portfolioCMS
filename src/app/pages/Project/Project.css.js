import styled from "styled-components";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

export const StyledBck = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.colors.dark};
  padding: 0 3vw;
  :first-child {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const StyledSection = styled.section`
  max-width: 1366px;
  background: ${(props) => props.theme.colors.dark};
`;
export const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 50vh 1fr auto;
  margin-bottom: 3em;

  @media screen and (orientation: portrait) {
    grid-template-rows: 30vh 1fr auto;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-template-rows: 70vh 1fr auto;
  }
`;
export const StyledTitle = styled(Title)`
  grid-area: 1/1/2/13;
  margin-top: 0.5em;
`;
export const StyledButton = styled(Button)`
  grid-area: 2/1/3/13;
  margin-bottom: 1em;
`;
export const StyledMobileLayoutPhotoBox = styled.div`
  grid-area: 3/10/4/13;
  align-self: start;
  overflow: hidden;
`;
export const StyledDeskopLayoutPhotoBox = styled.div`
  grid-area: 3/1/4/9;
  align-self: start;
  overflow: hidden;
`;
export const StyledFooter = styled(Footer)`
  grid-area: 3/1/4/13;

  @media screen and (orientation: landscape) {
    grid-area: 3/1/4/13;
  }
`;
