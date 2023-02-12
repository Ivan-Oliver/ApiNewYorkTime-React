import { FC } from 'react'
import { Props } from './types'
import Button from '../button'
import {Container,  Content, Title, Description, Divider } from './style'


const Card: FC<Props> = ({ title, description, newest_published_date, oldest_published_date,listName, onClick}) => {
    return (
        <Container>
        <Content>
            <Title>{title}</Title>
            <Divider />
            <Description>{description}</Description>
            <Description>{newest_published_date}</Description>
            <Description>{oldest_published_date}</Description>
            <Button onClick={()=>onClick(listName)}/>

        </Content>
        </Container>
    )
}

export default Card