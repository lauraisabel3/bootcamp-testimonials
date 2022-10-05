/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState} from 'react'
import { Container, BackgroundCurve,Carousel, Image, ContainerButtons, ButtonPrev, ButtonNext, Content, Name, TextContainer } from './styles'



const info = [
  {
    name: 'Tanya Sinclair',
    position: 'UX Engineer',
    src: '/static/media/image-tanya.f54c06576a4cdc261099.jpg',
    content: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."

  },
  {
    name: 'John Tarkpor',
    position: 'Junior Fonrt-end Developer',
    src: '/static/media/image-john.5253a557aa7d00d8466f.jpg',
    content: "If you want to lay the best foudation possible I'd recommend taking this course. The depth the instructors go into is incredible, I now feel so confident about starting up ad a professional developer."
  },
]

const Main = () => {
  const [position, setPosition] = useState(0)

  const handleLeft = () => {
    if(position === 0 ) {
      setPosition(info.length -1)
    } else {
      setPosition(position -1)
    }
  }

  const handleRight = () => {
    if( position === info.length - 1) {
      setPosition(0)
    } else {
      setPosition(position + 1)
    }
  }

  console.log(info[position].src)
  return(
    <Container>
      <BackgroundCurve />
      <Carousel>
        <Image  css={{backgroundImage:`url(${info[position].src})`}}/>
        <ContainerButtons>
          <ButtonPrev onClick={handleLeft} />
          <ButtonNext onClick={handleRight} />
        </ContainerButtons>
        <TextContainer>
          <Content>{info[position].content}</Content>
          <Name>
          {info[position].name}<br/>
          <span>{info[position].position}</span>
          </Name>
        </TextContainer>
      </Carousel>
    </Container>
  )
}

export default Main