import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='Tilt br2 shadow-2'>
      			<div style={{ height: '100%', width: '100%'}} className='pa3'>
        			<img style={{paddingTop: '5px'}} src={brain} />
      			</div>
    		</Tilt>
		</div>
	);
}

export default Logo;