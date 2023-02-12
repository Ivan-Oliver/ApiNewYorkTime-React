import { FC } from 'react'
import { Props } from './types'
import Button from '../button'
import './styles.css'

const Card: FC<Props> = ({ title, description, newest_published_date, oldest_published_date,listName, onClick}) => {
    return (
        <div className='card'>
            <p>{title}</p>
            <hr />
            <p>{description}</p>
            <p>{newest_published_date}</p>
            <p>{oldest_published_date}</p>
            <Button onClick={()=>onClick(listName)}/>

        </div>
    )
}

export default Card