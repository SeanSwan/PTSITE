import React from "react";
import Book from "./Book";

const BookList = ({ props }) => {
  const bookListProps = [
    
    
      {
        id: 1,
        bookListHead: "Book an Appointment now!",
        bookFormName: "",
        bookFormEmail:  "",
        bookFormOption1:  "Personal Training",
        bookFormOption2:  "Fleaxability Training"
      },
      
    
  ];
  const renderedBookList = bookListProps.map(bookListPropsClone => {
    return (
      <Book
        key={bookListPropsClone.id}
        bookListHead={bookListPropsClone.bookListHead}
        bookFormName={bookListPropsClone.bookFormName}
        bookFormEmail={bookListPropsClone.bookFormEmail}
        bookFormOption1={bookListPropsClone.bookFormOption1}
        bookFormOption2={bookListPropsClone.bookFormOption2}
      />
    );
  });
  return <div className="">{renderedBookList}</div>;
};

export default BookList;