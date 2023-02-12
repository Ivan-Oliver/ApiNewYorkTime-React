import { useState, useEffect } from 'react';
import { booklist, fetchData, getListDetails } from "../src/services/api"
import Card from './components/card/card';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <div className='cards'>
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
          <header><button className="back" onClick={() => setShowList(true)}>Back</button></header>
          {!showList && dataDetails?.map(listDetails => (
            <>
            <div className='main-content'>
            <div className="container-details">
                <p>{listDetails.title}</p>
               <img src={listDetails.book_image} ></img>
                <p>{listDetails.description}</p>
                <div><a className='buttonAmazon' href={listDetails.amazon_product_url}>Amazon</a></div>
              </div>
            </div>
             </>
            

          ))}
        </div>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;