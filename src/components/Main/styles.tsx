import styled from "@emotion/styled";
import { breakPoints as bp } from "../../styles/breakPoints";
import background from '../../assets/pattern-bg.svg'
import backgroundCurve from '../../assets/pattern-curve.svg'
import iconPrev from '../../assets/icon-prev.svg'
import iconNext from '../../assets/icon-next.svg'

const Container = styled.div `
  height: 100%;
  padding: 40px 40px 80px;
  position: relative;
  background-image: url(${background});
  background-size: 400px 300px;
  background-position: top center;
  background-repeat: no-repeat;

  ${bp.desktop} {
    width: 1000px;
    height: 600px;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 50%;
    background-position: center right;
  }
`

const BackgroundCurve = styled.span `
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    left:0;
    background-image: url(${backgroundCurve});
    background-size: cover;

    ${bp.desktop} {
      height: 120px;
    }
`

const Carousel = styled.div `
  width: 100%
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${bp.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    position: relative;
  }
`

const Image = styled.span`
  width: 100%;
  max-width: 400px;
  height: 400px;
  object-fit: cover;
  background-repeat: no-repeat;

  ${bp.desktop} {
    grid-column: 2;
    grid-row: 1;
  }
`
const TextContainer = styled.div `
  ${bp.desktop} {
    width: 100%;
    height: auto;
    grid-column: 1;
    grid-row: 1;
  }
`
const Content = styled.p `
  margin: 40px 0;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: blue;
  text-align: center;

  ${bp.desktop} {
    font-size: 2rem;
    line-height: 2.8rem;
    text-align: left;
  }
`

const Name = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--blue);
  text-align: center;
  line-height: 2.2rem;

  span {
    font-weight: 400;
    color: var(--grayish-blue);
  }

  ${bp.desktop} {
    font-size: 1.6rem;
    text-align: left;
  }
`

const ContainerButtons = styled.div `
  width: auto;
  height: auto;
  margin-top: -20px;

  ${bp.desktop} {
    grid-column: 2;
    grid-row: 1;
    position: absolute;
    left: 15%;
    bottom: -20px;
  }
`

const ButtonPrev = styled.button `
  width: 40px;
  height: 40px;
  border-radius: 50% 0 0 50%;
  background-image: url(${iconPrev});
  background-size: 30%;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
`

const ButtonNext = styled(ButtonPrev) `
  border-radius: 0 50% 50% 0;
  background-image: url(${iconNext});
`
export { Container, BackgroundCurve, Carousel, Image, Content, Name, ContainerButtons, ButtonPrev, ButtonNext, TextContainer }