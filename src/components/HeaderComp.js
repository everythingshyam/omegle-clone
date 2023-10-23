import React from 'react';
import '../styles/HeaderComp.css';
import icon1 from '../res/icon1.png';
import { RxHamburgerMenu } from 'react-icons/rx';
// import { FiSettings } from 'react-icons/fi';

export default function HeaderComp() {
	return (
		<>
			<header id='header'>
				<div className='brand-container'>
					<div className='brand-logo'>
						<img
							src={icon1}
							alt='Omegle Icon'
						/>
					</div>
					<div className='brand-name'>Omegle</div>
				</div>
				<nav className='nav-container'>
					{/* <div>
						<FiSettings className='setting-icon' />
					</div> */}
					<div>
						<RxHamburgerMenu
							className='nav-icon'
							style={{ fontSize: '2rem' }}
						/>
					</div>
				</nav>
			</header>
		</>
	);
}
