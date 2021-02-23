import  styled  from "styled-components";

export const Container = styled.div`
  height: 60px;
  background ${props => props.theme.colors.primary};
  color: '#FFF';
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30px;
`;