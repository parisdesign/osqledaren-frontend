import typedStyled from '../styles/styled';

export const ReadMoreButton = typedStyled.button`
  background: ${({ theme }) => theme.colors.black};
  margin-top: 32px;
  color: white;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  cursor: pointer;
  padding: 5px;
  width: 160px;
  height: 2vw;
  border-width: 0px;
  font-size: 0.8vw;
  text-transform: uppercase;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  hyphens: auto;
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
  letter-spacing: 1px;
  line-height: 12px;
  word-break: break-all;
`;
