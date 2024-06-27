import styled from 'styled-components';
import Actualdate from './ActualDate';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  color: white;
  border-bottom: 3px;
  border-bottom-color: white;
  border-bottom-style: dashed;
`

const Avatar = styled.img`
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Avatar src='https://avatars.githubusercontent.com/u/166122531?v=4' alt='Avatar'/>
      <Actualdate />
    </HeaderContainer>
  )
}