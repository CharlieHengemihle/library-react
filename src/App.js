import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail.js';
import BookList from './components/book/BookList.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Switch>
        <Route exact path="/">
          <h1>Welcome to Books-a-Million</h1>
          <p>Enter the</p>
          <Link to="/books">
            <h1>Library Catalog</h1>
          </Link>
          <h1>?</h1>
        </Route>
        <Route exact path="/books" component={BookList} />
        <Route path="/books/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
