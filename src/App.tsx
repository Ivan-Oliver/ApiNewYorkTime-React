import { useState, useEffect } from 'react';
import { booklist, fetchData, getListDetails } from "../src/services/api"
import Card from './components/card/card';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { MaxContenedor, MainContainer, ContainerDetails, Title, ButtonAmazon, EnlaceAmazon, Image, Description, BackButton } from './components/card/style'

function App() {
  const [data, setData] = useState<booklist[]>([])
  const [dataDetails, setDataDetails] = useState<any[]>([])
  const [showList, setShowList] = useState<boolean>(true)
  useEffect(() => {
    fetchData().then(data => {
      if (data) {
        setData(data)
      }
    })
  }, [])

  const callListDetails = async (listName: string) => {
    const data = await getListDetails(listName)
    setDataDetails(data)
    setShowList(false)
  }

  return (
    <ThemeProvider theme={theme}>
        <MaxContenedor>
          {showList && data?.map(bookList => (
            <Card 
            title={bookList.display_name} 
            description={bookList.updated} 
            newest_published_date={bookList.newest_published_date} 
            oldest_published_date={bookList.oldest_published_date} 
            listName={bookList.list_name_encoded} 
            onClick={callListDetails}
            />
          ))}
          <header><BackButton className="back" onClick={() => setShowList(true)}>Back</BackButton></header>
          {!showList && dataDetails?.map(listDetails => (
            <>
            <MainContainer>
            <ContainerDetails>
                <Title>{listDetails.title}</Title>
               <Image src={listDetails.book_image} ></Image>
                <Description>{listDetails.description}</Description>
                <ButtonAmazon><EnlaceAmazon href={listDetails.amazon_product_url}>Amazon</EnlaceAmazon></ButtonAmazon>
              </ContainerDetails>
            </MainContainer>
             </>
            

          ))}
        </MaxContenedor>
    </ThemeProvider>
  );
}

export default App;