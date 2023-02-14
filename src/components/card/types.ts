import { ReactNode } from "react"

export type Props = {
    title: string
    updatedDescription?: string
    oldestDescription?: string
    newestDescription?: string
    listName?: string
    oldest_published_date?: string
    newest_published_date?: string
    description?: string
    image?: string
    bookUrl?: string
    onClick?: (listName:string) => void
    type?: 'list' | 'details'
    children?: ReactNode
}

