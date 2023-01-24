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
          <Link to="/books">
            <h1>Enter the Library?</h1>
          </Link>
        </Route>
        <Route exact path="/books" component={BookList} />
        <Route path="/books/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
