import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { Typography, Space } from 'antd';
const { Text} = Typography;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
  padding: ''
};
function Post({id, mainpicture, nameoftheplace, description, rateplace, street, city, state, zipcode, category, parking, username}) {
  return (
    <Link to={"/posts/"+id}>
    <Card.Grid style={gridStyle}>
        
         <div style={{paddingBottom: '5px'}}>
         <img src={mainpicture} width="300" height="300"  alt="main" />  </div>
         <div className="card-footer small text-muted text-right">
         <Link to={"/posts/"+id}>{nameoftheplace}</Link>
        
        <div>
        <Text strong>{description}</Text> </div>
         <div> {rateplace} </div>
         Made by user { username }
        </div>
    </Card.Grid>
    </Link>

    //<div className="col-10 col-md-8 col-lg-7"> 
    
    //</div>
    //   <div className="card mb-4 shadow">
    //     <div className="card-body card-text">
    //       <Link to={"/posts/"+id}>{ nameoftheplace}</Link>
    //     </div><div>
    //      {description} </div>
    //      <div>
    //      <img src={mainpicture} width="400" height="400"  alt="main" />  </div>
    //      <div className="card-footer small text-muted text-right">
    //      <div> {rateplace} </div>
    //      Made by user { username }
    //     </div>
    //   </div>
    // </div>
  );
}

export default Post;