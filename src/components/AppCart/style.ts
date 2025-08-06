import styled from 'styled-components';

export const Container = styled.div``;


export const TwoColumnGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 50px auto auto;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    grid-template-columns: 1fr 4fr;
    margin-top: 80px;
  }
`;

export const Side = styled.div`
  display: grid;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    align-content: baseline;
  }
`;

export const Main = styled.main``;

export const MainHeader = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: end;
    padding: 0 15px;
    font-size: 1.2rem;
`;

export const BackgroundCard=styled.div`
    display: flex;
    flex: 1;
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(244, 231, 225, 0.8);
    overflow: auto;
`;
export const Card=styled.div`
    background-color: #fff;
    max-width: 800px;
    width: 90%;
    padding: 30px;
    font-size: 1.3rem;
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    text-align: justify-all;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 1.5px 6px rgba(0, 0, 0, 0.08);
    display: flex;
    gap: 20px;
    flex-direction: column;
`;

export const CardButton=styled.button`
    display: flex;
    flex: 1;
    background-color: #a0715e;

    &:hover {
        background-color: #805746;
    }
    cursor: pointer;
    border: none;
    padding: 20px;
    font-size: 1.6rem;
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    color: #fff;
    text-align: center;
    justify-content: center;
`;
