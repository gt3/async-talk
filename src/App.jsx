import React, { Component } from 'react';
import { subscribe } from './consumer';

const pageSize = 5;

const Title = ({ page }) => <h2 className="title">Showing <i>{page}</i> {page > 1 ? 'pages' : 'page'}</h2>

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 0 };
    this.items = [];
    this.showMore = this.showMore.bind(this);
    this.appendItems = this.appendItems.bind(this);
  }

  showMore() {
    if(this.items.length > pageSize*this.state.page) this.setState({ page: this.state.page+1 });
  }

  appendItems(newItems) {
    this.items = this.items.concat(newItems);
    if(this.state.page === 0) this.showMore();
  }

  componentDidMount() {
    subscribe(pageSize, this.appendItems);
  }

  render() {
    const items = this.items.slice(0, pageSize*this.state.page);
    return (
      <div>
        <Title page={this.state.page} />
        <div className="content">
          <ol className="items">
            { items.map(item => <li key={item}>{item}</li>) }
          </ol>
          <p><a onClick={this.showMore}>Show more</a></p>
        </div>
      </div>
    )
  }

}

export default App;
