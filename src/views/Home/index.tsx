import React, { FC, useState, useEffect, useCallback  } from 'react'
import { booklist, fetchData } from '../../services/api'
import { ThemeProvider } from 'styled-components'
import { EnlaceAmazon} from '../../components/card/style'
import { MaxContenedor} from '../Home/style'

import theme from '../../styles/theme'
import Card from '../../components/card/card'
import { useNavigate, useParams } from 'react-router-dom'

const Home: FC = () => {

    const [data, setData] = useState<booklist[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchData().then(data => {
        if (data) {
          setData(data)
        }
      })
    }, [])

   const goToDetails = useCallback((listName:string) => {
    navigate(`/details/${listName}`)
  }, [navigate])

    return (
        <ThemeProvider theme={theme}>
            <MaxContenedor>
                {data?.map(bookList => (
                    <Card
                        title={bookList.display_name}
                        description={bookList.updated}
                        newest_published_date={bookList.newest_published_date}
                        oldest_published_date={bookList.oldest_published_date}
                        listName={bookList.list_name_encoded}
                        onClick={goToDetails}
                    />
                ))}
                </MaxContenedor>
                </ThemeProvider>
               
    )
}

export default React.memo(Home);