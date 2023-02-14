import { FC, useState, useEffect, useCallback, memo } from "react"
import Card from '../../components/card/card'
import { bookDetails, getListDetails } from "../../services/api"
import { useParams, useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/card/style'
import { MainContainer} from '../Details/style'


const Details: FC = () => {
    const { listName } = useParams<{ listName: string }>()
    const [dataDetails, setDataDetails] = useState<bookDetails[]>([])
    const navigate = useNavigate()

    const callListDetails = useCallback(async (name: string) => {
        const data = await getListDetails(name)
        setDataDetails(data)
    }, [])

    const goToBack = useCallback(() => {
        navigate('/')
    }, [navigate])

    useEffect(() => {
        if (listName) {
            callListDetails(listName)
        }
    }, [listName, callListDetails])

    return (
            <MainContainer>
                <BackButton onClick={goToBack}>Back</BackButton>
                {
                    dataDetails?.map(listDetails => (
                        <Card
                            title={listDetails.title}
                            image={listDetails.book_image}
                            updatedDescription={listDetails.description}
                            bookUrl={listDetails.amazon_product_url}
                            onClick={callListDetails}
                            type="details"
                        />
                    ))}
            </MainContainer>
    )
}

export default memo(Details)
