import React from "react";




const book = props => {
  return (
    <div className="section-book">
    <div className="row">
      <div className="book">
        <div className="book_form">
          <form action="#" className="form">
            <div className=" u-margin-bottom-medium">
              <h2 className="heading-packages">{props.bookListHead}</h2>
            </div>

            <div className="form_group">
              <input
                type="text"
                className="form_input"
                placeholder="Full Name"
                id="name"
                required
              />
              <label htmlFor="name" className="form_label">{props.bookFormName}</label>
            </div>

            <div className="form_group">
              <input
                type="email"
                className="form_input"
                placeholder="Email address"
                id="email"
                required
              />
              <label htmlFor="email" className="form_label">{props.bookFormEmail}</label>
            </div>

            <div className="form_group u-margin-bottom-medium">
              <div className="form_radio-group">
                <input
                  type="radio"
                  className="form_radio-input"
                  id="small"
                  name="size"
                />
                <label htmlFor="small" className="form_radio-label">
                  <span className="form_radio-button"></span>{props.bookFormOption1}
                </label>
              </div>

              <div className="form_radio-group">
                <input
                  type="radio"
                  className="form_radio-input"
                  id="large"
                  name="size"
                />
                <label htmlFor="large" className="form_radio-label">
                  <span className="form_radio-button"></span>{props.bookFormOption2}
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );

 

 
    
}

export default book;



