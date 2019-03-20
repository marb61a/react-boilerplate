import React from 'react';

class App extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h1>Hello There!!!</h1>
        <h2>
          Count: {this.state.count}
        </h2>
      </div>
      
    )
  }
}

export default App;
