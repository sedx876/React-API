import React, { Component} from 'react'
import News from './components/News/News'
import Sidenews from './components/News/Sidenews'
import './App.css';

const style = {
  color: '#76ff03',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=national-geographic'
      },
      news2: {
        type: 'everything',
        // query: 'domains=techcrunch.com&language=en'
        query: 'sources=mashable'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    };
  }

  
  

  render() {
    return (
      <div className="container-fluid">
        <div className='navbar-fixed'>
          <nav>
            <div className='nav-wrapper teal accent-4'>
              <a href='#' className='bran-logo center'>My News Feed</a>
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='col s8'>
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className='col s4'>
            <Sidenews news={this.state.news3}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
