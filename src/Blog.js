import React, { Component} from 'react';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      blogs: []
    }
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState( {
      [name]: value
    });
  }

  handleSubmit = event => {
    const blog = { title: this.state.title, content: this.state.content }
    this.setState({ blogs: [...this.state.blogs, blog], title: '', content: ''})
    event.preventDefault();
  }

  getBlog = event => {
    alert(event.target.value)
    event.preventDefault();
  }

  render() {
    return(
      <div className='blog'>
        <h1 className='heading'>A place to share your thoughts</h1>
        <form>
          <label htmlFor='title' >Add Title
            <input type='text' id='title' name='title' value={this.state.title} onChange={this.handleInputChange} />
          </label>
          <br />
          <label htmlFor='content'>Your thoughts
            <textarea id='content' name='content' row='10' col='50' value={this.state.content} onChange={this.handleInputChange} />
          </label>
          <input type='submit' value='Publish' onClick={this.handleSubmit} />
        </form>
        <ul>
          {this.state.blogs.map((blog) => {
           return <li key={blog.title}>
              <b onClick={this.getBlog} value={blog.title} >{blog.title}</b>
              {/* <p>{blog.content}</p> */}
            </li>
          })}
        </ul>
      </div>
    )
  }

}
export default Blog;