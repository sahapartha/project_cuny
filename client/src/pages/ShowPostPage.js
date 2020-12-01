import React from 'react';
import PostsInside from '../components/PostsInside';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

class ShowPostPage extends React.Component {
  state = {
    loading: true,
    post: null,
    notFound: false,
    city:'',

  }/*
 cityChanged = (event) => {
        this.setState({
          city: event.target.value,
        });
      }
*/
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch("/api/posts/"+id)
      .then(res => res.json())
      .then(post => {
        this.setState({
          post: <PostsInside {...post} />,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          notFound: true,
        });
      });
  }


  render() {
    if(this.state.notFound) return <Redirect to="/" />;
   /* <input 
    type="text"
    className="form-control"
    name="city"
    placeholder="City" 
    value={this.state.city} 
    onChange={this.cityChanged} />*/
    //if(this.state.city) return <Redirect to="/city" />;
    if(this.state.loading) return <Loading />;
    return this.state.post;
  }
}

export default ShowPostPage;