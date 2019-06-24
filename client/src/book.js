import React , {Component} from 'react';
import {getBooksQuery} from './queries';
import {graphql} from 'react-apollo';
import BookDetails from './bookdetails';

class BookList extends Component {

    constructor(){
    super();
    this.state = {
      selected:null
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({selected : e.target.key});
  }
  
  displayBooks(){
  	var data = this.props;
    console.log(data);
  }
  // 	if(data.loading){
  // 		return (<div>Loading books ... </div>);
  // 	} else {
  // 		return data.books.map(book => {
  // 			return (<li onClick = {this.handleClick} key = {book.id}>{book.name}</li>);
  // 		});
  // 	}
  // }

  render(){
  return (
    <div>
    	<ul id='book-list'>
    		{this.displayBooks()}
    	</ul>
      <BookDetails book_id = {this.state.selected} />
    </div>
  );
}
}

export default graphql(getBooksQuery)(BookList);
