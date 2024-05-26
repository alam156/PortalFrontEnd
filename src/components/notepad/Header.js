import React from 'react';
import './css/NotePad.css';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header' style={{backgroundColor: "lightskyblue"}}>
			<div className="justify-content-center">
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<h1>Notice Board</h1>

			</div>

		</div>
	);
};

export default Header;
