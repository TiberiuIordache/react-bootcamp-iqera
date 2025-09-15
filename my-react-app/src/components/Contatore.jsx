import React, { useEffect } from 'react'
import { useState } from 'react'

export default function LikeButton() {

	const [count, setCount] = useState(0)

	useEffect(() => {
		console.log('Component Contatore mounted');

		return () => {
			console.log('Component Contatore unmounted');
		};

	}, []);

	function handleClick() {
		setCount(count + 1);
		setCount(prevCount => prevCount + 1);
		setCount(prevCount => prevCount + 1);
	}

	return (
		<div style={{ textAlign: 'center', marginTop: '20px' }}>
			<button 
				style={{ 
					padding: '10px 20px', 
					fontSize: '16px', 
					backgroundColor: '#007BFF', 
					color: '#fff', 
					border: 'none', 
					borderRadius: '5px', 
					cursor: 'pointer' 
				}} 
				onClick={handleClick}
			>
				<span role="img" aria-label="like">👍</span> {count}
			</button>
		</div>
	)
}
