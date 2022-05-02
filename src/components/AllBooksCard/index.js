import React from 'react'
import BookCard from '../BookCard'
import { useSelector } from 'react-redux';
import style from './style.css'

const AllBooksCard = () => {

    const bookData = useSelector((state) => state.data._data);

    console.log(bookData);

    return (
        <div className='bookCardsDiv'>
            {bookData?.map((data)=>
                <BookCard key={data.id} name = {data.name} author = {data.author} copies = {data.copies} />
            )}
        </div>
    )
}

export default AllBooksCard