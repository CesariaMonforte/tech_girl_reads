import "./AddBook.css";

function AddBook({ onAddBook }) {
    return (
        <div className='add_book_container'>
            <div className='add_book_content'>
                <button
                    className='add_book_button'
                    onClick={onAddBook}>
                    Add Book
                </button>
            </div>
        </div>
    );
}

export default AddBook;
