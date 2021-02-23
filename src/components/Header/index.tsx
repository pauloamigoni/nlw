import React, { useContext} from "react";
import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa';
import  Switch  from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";



import { Container } from './styles';

interface Props{
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
const { colors, title } = useContext(ThemeContext);

  return (<Container>
   <FaRegLightbulb />  &nbsp;  <Switch
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={20}
      width={50}
      handleDiameter={20}
      offColor={shade(0.1, colors.primary)}
      onColor={colors.secundary}
      /> &nbsp; <FaLightbulb />
  </Container>);
}
export default Header;