import styled from '@emotion/styled';

export const Button = styled.button`
  background: black;
  color: white;
  margin: 20px 0px;
  cursor: pointer;
  padding: 5px;
  width: 200px;
  height: 60px;
  font-size: 0.8vw;
  text-transform: uppercase;
  font-weight: bold;
  :hover {
    -moz-transition: scale 0.35s;
    -ms-transition: scale 0.35s;
    -o-transition: scale 0.35s;
    -webkit-transition: scale 0.35s;
    transition: scale 0.35s;
    scale: 1.08;
    overflow: hidden;
  }
`;
