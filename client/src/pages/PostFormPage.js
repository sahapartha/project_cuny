import React from 'react';
import bgimg from './bgimg.jpeg'
import "../App.css";
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, Checkbox,Divider, Select } from 'antd';
import { FormInstance } from 'antd/lib/form';
import {ReloadOutlined, UserOutlined} from '@ant-design/icons';
import { Container,Card } from 'react-bootstrap';
import {
  FileTextOutlined,
  SendOutlined
} from "@ant-design/icons";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
 
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
var sectionStyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundColor: 'rgba(255, 249, 192, 0.7)',
 
}
const { Option } = Select;

class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    nameoftheplace: '',
    description:'',
    rateplace:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    category:'',
    parking:'',
    mainpicture:'',
  }

  nameoftheplaceChanged = (event) => {
    this.setState({
      nameoftheplace: event.target.value
    });
  }
  descriptionChanged = (event) => {
    this.setState({
      description: event.target.value
    });
  }
  rateplaceChanged = (event) => {
    this.setState({
      rateplace: event.target.value
    });
  }
  streetChanged = (event) => {
    this.setState({
      street: event.target.value
    });
  }
  cityChanged = (event) => {
    this.setState({
      city: event.target.value
    });
  }
  stateChanged = (event) => {
    this.setState({
      state: event.target.value
    });
  }
  zipcodeChanged = (event) => {
    this.setState({
      zipcode: event.target.value
    });
  }
  categoryChanged = (event) => {
    this.setState({
      category: event.target.value
    });
  }
  parkingChanged = (event) => {
    this.setState({
      parking: event.target.value
    });
  }
  onFileChange = (event) =>  {
    this.setState({ 
      mainpicture: event.target.files[0] })
}

  savePost = (event) => {
    event.preventDefault();
    
    const data = new FormData();
    
    data.append('mainpicture', this.state.mainpicture);
    data.append('nameoftheplace', this.state.nameoftheplace);
    data.append('description', this.state.description);
    data.append('rateplace', this.state.rateplace);
    data.append('street', this.state.street);
    data.append('city', this.state.city);
    data.append('state', this.state.state);
    data.append('zipcode', this.state.zipcode);
    data.append('category', this.state.category);
    data.append('parking', this.state.parking);
    fetch("/api/posts/", {
      method: 'POST',
      credentials: 'include',
      headers: {

      },
      
      body: data, 
     // body: JSON.stringify({nameoftheplace: this.state.nameoftheplace, description:this.state.description, rateplace:this.state.rateplace, street:this.state.street, city:this.state.city ,state:this.state.state, zipcode:this.state.zipcode, category:this.state.category, parking:this.state.parking}),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (
      
      <div style={sectionStyle}>
      <Container style={{ paddingTop: "25px", paddingBottom: '25px'}} >
        <div className="" >
          {errorMessage}
          <div className="">
            <Card style={{opacity: '1', }} className="shadow mb-3">
              <Card.Header style={{ width: "100%" }}>
                <FileTextOutlined /> Post Your Place here
              </Card.Header>
              <Form  {...layout} name="basic" initialValues={{ remember: true }}>
                <Form.Item 
                  label="Name Of Place"
                  name="place"
                  rules={[
                    { required: true, message: "Please input place name" },
                  ]}
                  style={{ paddingRight: "50px", paddingTop: "20px" }}
                >
                  <input
                    type="text"
                    value={this.state.nameoftheplace}
                    // className="form-control mr-3 rounded"
                    onChange={this.nameoftheplaceChanged}
                  />
                </Form.Item>

                <Form.Item
                  label="Description"
                  name="description"
                  rules={[
                    { required: true, message: "Please describe the place" },
                  ]}
                  style={{ paddingRight: "50px", paddingTop: "20px" }}
                >
                  <input
                    type="text"
                    value={this.state.description}
                    // className="form-control mr-3 rounded"
                    onChange={this.descriptionChanged}
                  />
                </Form.Item>
                <Form.Item
                  label="Rate"
                  name="rate"
                  rules={[{ required: true, message: "Please rate" }]}
                  style={{ paddingRight: "50px", paddingTop: "20px" }}
                >
                  <input
                    type="text"
                    value={this.state.rateplace}
                    // className="form-control mr-3 rounded"
                    onChange={this.rateplaceChanged}
                  />
                </Form.Item>
                <Form.Item
                  label="Street"
                  name="street"
                  rules={[
                    { required: true, message: "Please input place name" },
                  ]}
                  style={{ paddingRight: "50px", paddingTop: "20px" }}
                >
                  <input
                    type="text"
                    value={this.state.street}
                    //  className="form-control mr-3 rounded"
                    onChange={this.streetChanged}
                  />
                </Form.Item>
                <Form.Item
                  label="City"
                  name="city"
                  rules={[
                    { required: true, message: "Please input place name" },
                  ]}
                  style={{ paddingRight: "50px", paddingTop: "20px" }}
                >
                  <input
                    type="text"
                    value={this.state.city}
                    //  className="form-control mr-3 rounded"
                    onChange={this.cityChanged}
                  />
                </Form.Item>
                <Form.Item
                  label="State"
                  name="state"
                  rules={[
                    { required: true, message: "Please input place name" },
                  ]}
                  style={{ paddingRight: "50px", paddingTop: "20px" }}
                >
                  <input
                    type="text"
                    value={this.state.state}
                    // className="form-control mr-3 rounded"
                    onChange={this.stateChanged}
                  />
                </Form.Item>
                <Form.Item
                  label="Zipcode"
                  name="zipcode"
                  rules={[
                    { required: true, message: "Please input place name" },
                  ]}
                  style={{ paddingRight: "50px", paddingTop: "20px" }}
                >
                  <input
                    type="text"
                    value={this.state.zipcode}
                    // className="form-control mr-3 rounded"
                    onChange={this.zipcodeChanged}
                  />
                </Form.Item>
                <Form.Item
                  label="Category"
                  name="category"
                  rules={[
                    { required: true, message: "Please input place name" },
                  ]}
                  style={{ paddingRight: "50px", paddingTop: "20px" }}
                >
                   <select onChange={this.categoryChanged} value={this.state.category}>
                   <option value="null"></option>
                   <option value="Park">Park</option>
                   <option value="Waterfall">Waterfalls</option>
                   <option value="Mountain">Mountain</option>
                   <option value="Beach">Beach</option>
                   <option value="Waterfall">Waterfall</option>
                   <option value="Hidden">Hidden Gem</option>
                   <option value="Hike">Hike</option>
                   </select>
                   </Form.Item>


                  
                {/* <Select
                  placeholder="Select a option and change input text above"
                  onChange={this.categoryChanged}
                  allowClear
                   >
                  <Option value={this.state.category}>Park</Option>
                  <Option value={this.state.category}>Mountain</Option>
                  <Option value={this.state.category}>Waterfalls</Option>
                  {/* <input
                    type="text"
                    value={this.state.category}
                    // className="form-control mr-3 rounded"
                    onChange={this.categoryChanged}
                  /> */}
                {/* </Select>
                </Form.Item> */} 






                <Form.Item
                  label="Parking"
                  name="parking"
                  rules={[
                    { required: true, message: "Please input place name" },
                  ]}
                  style={{ paddingRight: "50px", paddingTop: "20px" }}
                >
                  <input
                    type="text"
                    value={this.state.parking}
                    // className="form-control mr-3 rounded"
                    onChange={this.parkingChanged}
                  />
                </Form.Item>
                <Form.Item
                  label="Picture"
                  name="picture"
                  rules={[
                    { required: true, message: "Please input place name" },
                  ]}
                  style={{ paddingRight: "50px", paddingTop: "20px" }}
                >
                  <input
                    type="file"
                    name="mainpicture"
                    //value={this.state.mainpicture}
                    // className="form-control mr-3 rounded"
                    onChange={this.onFileChange}
                  />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <button
                    onClick={this.savePost}
                    style={{ float: "right", marginRight: "20px" }}
                    className="btn btn-primary ml-auto"
                  >
                    <SendOutlined />
                    <div
                      style={{
                        float: "right",
                        paddingTop: "3px",
                        paddingLeft: "2px",
                      }}
                    >
                      {" "}
                      Save Post
                    </div>
                  </button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </div>
      </Container>
      </div>
    );
  }
}

export default PostFormPage;