import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

	// Value for input
	const [id, setId] = useState(1)
	// When idFromButtonClick changes, useEffect will fire
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)
	const [post, setPost] = useState({})

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`) // Fetch specific given id
			.then(res => {
        console.log('Data fetching hook res: ', res)
        setPost(res.data)
			})
			.catch(err => {
				console.log('Data fetching hook err: ', err)
			})
	}, [idFromButtonClick]) // Fire only when idFromButtonClick changes

	// On klick on button, set the setIdFromButtonClick
	const handleClick = () => {
		setIdFromButtonClick(id)
	}

	return (
		<>
			<input type="text" value={id} onChange={e => setId(e.target.value)} />

			<button type="button" onClick={handleClick}>Fetch Post</button>

			<div>
				{post.title}
			</div>

			{/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</>
	)
}

export default DataFetching
