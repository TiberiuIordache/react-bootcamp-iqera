import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Contatore() {

	const [count, setCount] = useState(0)

	useEffect(() => {
		console.log('Component Contatore mounted');

		return () => {
			console.log('Component Contatore unmounted');
		};

	}, []);

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
				onClick={() => setCount(count + 1)}
			>
				<span role="img" aria-label="like">👍</span> {count}
			</button>
		</div>
	)
}
