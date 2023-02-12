import { FC } from 'react'
import { Props } from './types'
import './style.css'
import { CustomButton } from './style'

const Button: FC<Props> = ({onClick}) => {
    return(
        <CustomButton className='seemore' onClick={onClick}>See More</CustomButton>
    )
}

export default Button