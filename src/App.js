import './App.css';
import { Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail.js';
import BookList from './components/book/BookList.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Switch>
        <Route exact path="/books" component={BookList} />
        <Route path="/books/:book_id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
