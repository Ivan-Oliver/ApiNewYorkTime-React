import type { booklist } from "./api"

const localStorageKeyBooks = 'books'


export const getData = () => {
    const data = localStorage.getItem(localStorageKeyBooks)
    return data ? JSON.parse(data) : []
}

export const setData = (result: Array<Record<string, unknown>>) => {
    localStorage.setItem(localStorageKeyBooks, JSON.stringify(result))

}

export const getSavedListDetails = (listName: string): any => {
    const localStorageBooks = localStorage.getItem(listName);
    return localStorageBooks ? JSON.parse(localStorageBooks) : [];

}

export const setListDetails = (listName: string, results: any) => {
    localStorage.setItem(listName, JSON.stringify(results))
}

export const getAuthenticatedToken = () => {
    const token = window.localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
}

export const setAuthenticatedToken = (token: string) => {
    window.localStorage.setItem('token', JSON.stringify(token))
    console.log(token)
}