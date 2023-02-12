import {FC} from 'react'
import {Props} from './types'

const Button: FC<Props> = ({onClick}) => {
    return(
        <button className='seemore' onClick={onClick}>See More</button>
    )
}

export default Button