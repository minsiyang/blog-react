import React, { Component} from 'react';

class Blog extends Component {

  render() {
    return(
      <div className='blog'>
        <h1 className='heading'>A place to share your thoughts</h1>
        <form>
          <label htmlFor='title' >Add Title
            <input type='text' id='title' name='title' />
          </label>
          <br />
          <label htmlFor='content'>Your thoughts
            <textarea id='content' name='content' row='4' col='50' />
          </label>
          <input type='submit' value='Publish' />
        </form>
      </div>
    )
  }

}
export default Blog;