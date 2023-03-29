import React from 'react';
import classes from './Home.module.css';
import photo from './../../img/embroidery.jpg'

const Home = () => {
    return ( 
        <div className= {classes.home}>
            <div className={classes.container}>
                <h1> Traya- Happiness Handmade</h1>
            </div>
            <img className={classes.photo} src={photo} alt='embroidery'></img>
        </div>
     );
}
 
export default Home;