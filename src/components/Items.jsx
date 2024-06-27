import styled from "styled-components";
import Button from "./Button/Button";

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.75rem;
`

export default function Items({ active, onChange }) {
  return (
    <ItemsContainer>
      <Button isActive={active === 'home'} onClick={() => onChange('home')}>
        Главная
      </Button>
      <Button isActive={active === 'about'} onClick={() => onChange('about')}>
        О себе
      </Button>
      <Button isActive={active === 'portfolio'} onClick={() => onChange('portfolio')}>
        Портфолио
      </Button>
      <Button isActive={active === 'contacts'} onClick={() => onChange('contacts')}>
        Контакты
      </Button>
    </ItemsContainer>
  )
}