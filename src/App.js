import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () =>
(<nav>
  <a className="left" href="#blog">Acme Blog</a>
  <a className="right" href="#social">Social</a>
  <a className="right" href="#contact">Contact</a>
</nav>)

const Post = post => 
(<div className="col-lg-12">
    <div className="post">
      <div className="card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
</div>)

class App extends Component {

  state = { loading: true, posts: [] }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(response => this.setState({loading: false, posts: response}))
  }

  render() { 
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
              {this.state.loading && <div>Loading...</div>}
              {this.state.posts.length > 0 && this.state.posts.map(Post)}
          </div>
        </div>
      </>
    );
  }
}
 
export default App;

