import { getData, setData, getSavedListDetails, setListDetails } from "./storage";

export type booklist = {
    display_name: string,
    list_name: string,
    list_name_encoded: string,
    newest_published_date: string,
    oldest_published_date: string,
    updated: string

}


export const fetchData = async () => {
    let books: booklist[] = getData()

    if (!books || books.length === 0) {
    try {
        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB')
        console.log({ response})
        const data = await response.json()
        console.log({ data })
        const results: booklist[] = data.results

        if (results && results.length >0){
            setData(results)
            books = results
        }
    }
    catch (error) {
        console.log('Hubo un error')
    }
}
return books
}

export const getListDetails = async (listName: string) => {
    let values = getSavedListDetails(listName)
    if (!values || values.length === 0) {
    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${listName}.json?api-key=FZi6T0tvXiCmPowsTGjVWaT4r0XgcVnw`)
        const data = await response.json()
        console.log(data)
        const results = data.results.books
        setListDetails(listName, results)
        return results
    }
    catch (error) {
        console.log('Hubo un error')
    }
}

    return values
}