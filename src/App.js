import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  //const [name, setName] = useState("Hashan");
  const [post, setPost] = useState({
  
  });

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => setPost(res.data))
      .catch(err => console.log(err))

  })

  return (

    <div className="App">

      <h1>Fetch Data In React</h1>

      <table>
        <tr>
          <td>Id</td>
          <td> {post.id} </td>
        </tr>
        <tr>
          <td>Title</td>
          <td> {post.title} </td>
        </tr>
        <tr>
          <td>Body</td>
          <td> {post.body} </td>
        </tr>
      </table>

    </div>
  );
}

export default App;
