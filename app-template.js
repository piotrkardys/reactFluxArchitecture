import React from 'react';
import Header from './header/app-header';
                                    //template of the web page (header + content)
export default (props) => {
                                    //header of the page
  return (                          //the content (of the right page - it depends which page is actually active)
    <div className="container">
      <Header></Header>
      {props.children}
    </div>
  )
}
