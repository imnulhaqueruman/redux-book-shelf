import React, { useEffect } from 'react';
import Book from '../components/Book/Book';
//import books from '../fakeData/books.json'
import PageLayout from '../components/PageLayout/PageLayout';
import { useDispatch, useSelector } from 'react-redux';
import { loadBooks } from '../redux/actions/bookAction';
const Discover = () => {
    const books = useSelector((state) =>{
         return state.books.discoverList
    })
    const dispatch = useDispatch()

    useEffect(() =>dispatch(loadBooks()),[])
    
    console.log(books)
    return (
        <PageLayout>
            {
                books?.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;