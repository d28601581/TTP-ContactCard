import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import ContactCard from "./Component/ContactCard"

  function App() {
    return (
      <div className="App">
        <ContactCard 
          name = 'John' 
          email = 'John123@gmail.com'
          mobilephone = '456-564-4897'
          workphone = '212-232-1232'
        />
        <ContactCard 
        name = 'Merry' 
        email = 'm12834@gmail.com'
        mobilephone = '347-564-1234'
        />        
        <ContactCard 
          name = 'David' 
          email = 'Davidl2222@gmail.com'
          mobilephone = '917-528-1234'
          workphone = '212-227-4586'
        />
      </div>
    );
  }
  export default App;