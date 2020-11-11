import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BrowserRouter, Route} from "react-router-dom";
import Nav from './components/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
function App() {

                                  //const [name, setName] = useState("Hashan");
                                  // const [post, setPost] = useState({});

                                  // useEffect(() => {

                                  //   axios.get("https://jsonplaceholder.typicode.com/posts/1")
                                  //     .then(res => setPost(res.data))
                                  //     .catch(err => console.log(err))

  

  return (

    

    <div>
      <BrowserRouter>
      <Nav />
      <div className="container">
      <Route exact path="/Home" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Services" component={Services} />
      </div>
      </BrowserRouter>

                                {/* <h1>Fetch Data In React</h1>

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
                                </table> */}

    </div>
  );
                              }

export default App;
