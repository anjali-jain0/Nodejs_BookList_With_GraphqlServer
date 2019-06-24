import React , {Component} from 'react';
import BookList from './book';
import AddBook from './addbook';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri : 'http://localhost:8080/graphql'
});

class App extends Component {
  render(){
  return (
    <ApolloProvider client = {client}>
    <div>
      <h1> My Reading List</h1>
      <BookList />
      <AddBook />
    </div>
    </ApolloProvider>
  );
}
}

export default App;
