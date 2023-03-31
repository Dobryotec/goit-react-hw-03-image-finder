import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ContentImages from 'components/ContentImages/ContentImages';

class App extends Component {
  state = {
    searchText: '',
  };

  createSearchText = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div>
        <Searchbar createSearchText={this.createSearchText} />
        <ContentImages searchText={this.state.searchText} />
      </div>
    );
  }
}

export default App;
