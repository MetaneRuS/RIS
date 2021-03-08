import React from 'react'
import snoowrap from 'snoowrap';
import './App.css';
import SearchBar from './components/SearchBar'
import Images from './components/Images'

const { REACT_APP_USERAGENT, REACT_APP_CLIENTID, REACT_APP_CLIENTSECRET, REACT_APP_USERNAME, REACT_APP_PASSWORD } = process.env;

class App extends React.Component {
  state = { images: [], searchQuery: '', isError: false }

  r = new snoowrap({
    userAgent: REACT_APP_USERAGENT,
    clientId: REACT_APP_CLIENTID,
    clientSecret: REACT_APP_CLIENTSECRET,
    username: REACT_APP_USERNAME,
    password: REACT_APP_PASSWORD,
  })

  getData = async (picked, pickedTime) => {
    this.setState({ images: [] });

    try {
      const subreddit = await this.r.getSubreddit(picked);
      const topPosts = await subreddit.getTop({ time: pickedTime, limit: 200 });
      topPosts.forEach(post => {
        if (post.url.includes(".png") || post.url.includes(".jpg")) {
          return this.setState({
            images: [...this.state.images, post],
            isError: false
          })
        }
      });
    }
    catch {
      this.setState({ images: [], searchQuery: '', isError: true });
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar submit={this.getData} text={this.state.searchQuery} />
        <Images data={this.state.images} isError={this.state.isError} />
      </div>
    );
  }
}

export default App;
