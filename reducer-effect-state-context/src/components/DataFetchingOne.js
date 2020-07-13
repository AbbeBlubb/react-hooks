import React, {useState, useEffect} from 'react'
import axios from 'axios';


// 3 useState for loading/error/post, 1 useEffect for fetch on did mount
function DataFetchingOne() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
        setLoading(false)
        setPost(response.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setPost({})
        setError('Something went wrong!')
      })
  }, [])

  return (
    <>
      <p>DataFetchingOne - 'loading' or fetched title:</p>
      --&gt; {loading ? 'Loading' : post.title} &lt;--

      <p>DataFetchingOne - error or null:</p>
      --&gt; {error ? error : null} &lt;--
    </>
  )
}

export default DataFetchingOne
