import { FC } from 'react'
import { Props } from './types'
import { CustomButton } from './styles'

const Button: FC<Props> = ({onClick}) => {
    return(
        <CustomButton onClick={onClick}>See More</CustomButton>
    )
}

export default Button