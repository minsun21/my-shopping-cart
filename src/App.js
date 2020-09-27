import React from 'react';
import data from "./data.json"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div class="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              Products
            </div>
            <div className="sidebar">CartItems</div>
          </div>

        </main>
        <footer>
          All right is reserved.
    </footer>
      </div>
    );
  }
}

export default App;