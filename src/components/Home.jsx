import React from 'react';
import { Navbar } from './Navbar';
import { Textform } from './Textform';
export const Home = () => {
    return(
      <>  
         <Navbar title="Word Counter" AboutTextUtils="About"/>
            <div className="container my-5" >
                <Textform Heading="Enter Your Text To Analyze"/>
            </div>
        </>
    );
}