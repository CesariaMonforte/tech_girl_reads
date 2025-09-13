import { useState, useEffect } from "react";
import "./BookItem.css";

function BookItem({ isbn }) {
    const [bookDataSet, setBookDataSet] = useState(null);

    useEffect(() => {
        async function fetchBook() {
            try {
                const response = await fetch(
                    `https://api.itbook.store/1.0/books/${isbn}`
                );
                const data = await response.json();
                setBookDataSet(data);
            } catch (error) {
                console.log(`the error is ${error}`);
            }
        }

        if (isbn) {
            fetchBook();
        }
    }, [isbn]);

    if (!bookDataSet) {
        return null;
    }

    return (
        <div className='book_container'>
            <img
                src={bookDataSet.image}
                alt={bookDataSet.title}
                className='book_image'
            />
            <div className='book_content'>
                <p className='book_title'>{bookDataSet.title}</p>
                <p className='book_author'>{bookDataSet.authors}</p>
                <p className='book_isbn'>{bookDataSet.isbn13}</p>
                <a
                    href={bookDataSet.url}
                    target='_blank'
                    className='book_link'>
                    Learn more
                </a>
            </div>
        </div>
    );
}

export default BookItem;
