import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import book_item from "./ui_components/books/BookItem";
import "./App.css";
import BookItem from "./ui_components/books/BookItem";
import AddBook from "./ui_components/AddBook/AddBook";

function App() {
    const handleAddBook = () => {
        console.log("Add book clicked!");
        // Add your add book logic here
    };

    return (
        <>
            <main className='header_section'>
                <h1 className='title'>Tech Girl Reads</h1>
                <p className='slogan'>catch phrase</p>
            </main>
            <div className='books_section'>
                <div className='books_section_excerpts'>
                    <h2 className='book_section_title'>Starter Girl Pack</h2>
                    <p className='book_section_description'>
                        some cool description of books for new girls to
                        technology
                    </p>
                </div>

                <div className='books_items'>
                    <div className='book'>
                        <BookItem isbn='9781484289822' />
                    </div>
                    <div className='book'>
                        <BookItem isbn='9781484292464' />
                    </div>
                    <div className='book'>
                        <BookItem isbn='9781484289853' />
                    </div>
                    <div className='book'>
                        <AddBook onAddBook={handleAddBook} />
                    </div>
                </div>
            </div>
            <footer className='footer_section'>
                <p className='footer_section_copyrigt'>
                    © Cesaria Jose Monforte, 2025
                </p>
            </footer>
        </>
    );
}

export default App;
