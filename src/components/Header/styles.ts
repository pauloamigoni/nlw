import  styled  from "styled-components";

export const Container = styled.div`
  height: 60px;
  background ${props => props.theme.colors.primary};
  color: '#FFF';
  display: flex;
  align-items: center;
  width: 8%;
  padding: 10px 10px 10px 10px;
  position: absolute;
  bottom: 0;
  left: 1em;
  height: 40px;
  margin: 0 0 1em;
  border-radius: 25px;
`;