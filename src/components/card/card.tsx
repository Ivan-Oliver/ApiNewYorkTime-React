import { FC } from 'react'
import { Props } from './types'
import Button from '../button'
import { Image, Title, Description, Divider, EnlaceAmazon, ButtonAmazon } from './style'
import { Container, Content} from '../../views/Home/style'


const Card: FC<Props> = ({ type = 'list', title, image, updatedDescription, newest_published_date, oldest_published_date,listName, onClick, bookUrl}) => {

    const handleClick = () => {
        if (onClick && listName) {
            onClick(listName)
        }
    }
    return (
        <Container>
        <Content>
            <Title>{title}</Title>
            <Divider />
            {image && <Image src={image} />}
            <Description>{updatedDescription}</Description>
            <Description>{newest_published_date}</Description>
            <Description>{oldest_published_date}</Description>
            {type ==="list" && <Button onClick={handleClick}/>}
            {type === "details" && <ButtonAmazon><EnlaceAmazon href={bookUrl} target="_blank" >Buy at Amazon</EnlaceAmazon></ButtonAmazon>}
         
       

        </Content>
        </Container>
    )
}

export default Card