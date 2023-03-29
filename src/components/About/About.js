import React from 'react';
import classes from './About.module.css';


const About = () => {
    return ( 
        <div className={classes.container} id="about">
            <h1 className={classes.header}> About Traya </h1>
            <p className={classes.content}>
            Traya's goal is to design and deliver simple and elegant handmade outfits for women kids. 
            Traya is for those who value the simplicity of handlooms and handmade goods. 
            Our kids wear range uses natural breathable fabrics and produces outfits in kids-friendly designs. 
            <p>What makes Traya unique ?</p>            
            <ul>
                <li><p>Handcrafted clothes with artistic touch</p></li>
                <li><p>Simple and elegant designs which are not mass-produced</p></li>
                <li><p>Natural and breathable fabrics</p></li>
                <li><p>Hand-embroidered details</p></li>
                <li><p> Reasonable price</p></li>
            </ul>     
             
            </p>
        </div>
     );
}
 
export default About;