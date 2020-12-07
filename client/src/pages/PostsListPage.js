import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import "../App.css"
import { Card,Col, Row } from 'antd';
import { Typography, Space } from 'antd';
const { Text} = Typography;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

class PostsListPage extends React.Component {
  state = {
    posts: [],
    loading: true,
  }


  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => { 
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <Post {...p} key={ii} />
         
          ),
        
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }
  

  render() {
    if(this.state.loading) {
      return <Loading />;
    }
    
    return (
    <div style={{padding: '0px'}}>
    <Card style={{textAlign: 'center'}} strong title="Places" >
    { this.state.posts }
    </Card>
      {/* <div className="site-card-border-less-wrapper">
      <div className="card mb-4 shadow">
      <Card style={{textAlign: 'center' }} title="Places">
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          { this.state.posts }
          
        </div>
      </div>
      </Card>
      </div>
      </div> */}
      </div>
    );
  }
}

export default PostsListPage;