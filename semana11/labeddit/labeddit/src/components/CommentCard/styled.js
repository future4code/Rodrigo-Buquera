import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { secundaryColor } from '../../constants/colors';

export const StyledCard = styled(Card)`
    width: 80%;
`
export const RedArrowHover = styled.div`
  &:hover {
    cursor: pointer;
    color: red;
  }
`
export const GreenArrowHover = styled.div`
  &:hover {
    cursor: pointer;
    color: green;
  }
`
export const VertDiv = styled.div`
display:flex;
flex-direction:column;
`