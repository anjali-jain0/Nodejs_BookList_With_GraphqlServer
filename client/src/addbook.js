import React , {Component} from 'react';
import {getAuthorsQuery , addBookMutation ,getBooksQuery} from './queries';
import {graphql , compose} from 'react-apollo';

class AddBook extends Component {
  
  constructor(){
    super();
    this.state = {
      name:'',
      genre:'',
      authorId:''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name] : e.target.value});
  }

  handleSubmit = (e) => {
    this.props.addBookMutation({
      variables : {
        name : this.state.name , 
        genre : this.state.genre , 
        authorId : this.state.authorId
      },
      refetchQueries : [{query : getBooksQuery}]
    });
  }

  
   displayAuthors(){

    var data = this.props;
    console.log(data);
  }
  //   if(data.loading){
  //     return (<option disabled>Loading Authors ... </option>);
  //   } else {
  //     return data.authors.map(author => {
  //       return (<option key = {author.id} value = {author.id} > {author.name} </option>);
  //     });
  //   }
  // }

  render(){
  return (

   <form id = 'add-book' onSubmit={this.handleChange}>

    <div className = 'field'>
      <label>Book name : </label>
      <input type = 'text' name='name' onChange={this.handleChange}/>
    </div>

     <div className = 'field'>
      <label>Genre: </label>
      <input type = 'text' name='genre' onChange={this.handleChange}/>
    </div>

     <div className = 'field'>
      <label>Author: </label>
      <select name='author' onChange={this.handleChange}>
        <option>Select author</option>
        {this.displayAuthors()}
      </select>
    </div>

    <button> + </button>

  </form>

  );
}
}

export default compose(
  graphql(getAuthorsQuery , {name : getAuthorsQuery}),
  graphql(addBookMutation , {name : addBookMutation })
)(AddBook);
