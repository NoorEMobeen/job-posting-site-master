import React, { useState } from 'react';
//import { useQuery } from "@apollo/client";
//import { GET_ALL_JOBS } from "../GraphQL/Queries";
import {Button, Row, Col,Modal,Form } from 'react-bootstrap';
import { CREATE_JOB_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
import swal from '@sweetalert/with-react'
import {Select} from 'antd';
import TextArea from 'antd/lib/input/TextArea';




function GetAllJobs() {

    const [modalVisible, setModalVisible] = useState(true);

    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [commitmentId, setCommitmentId] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [applyUrl, setApplyUrl] = useState('');

    const [postJob, { error }] = useMutation(CREATE_JOB_MUTATION);

    const handleChange = (e, setter) => {
        setter(e.target.value);
    }
    
    const postNewJob = async () => {
        const res = await postJob({
            variables: {
                title,
                commitmentId: "cjtu8esth000z0824x00wtp1i",
                companyName: name,
                locationNames: location,
                userEmail: email,
                description,
                applyUrl,
            }
        });
        if (res) {
            swal({
                title: `Job ${res.data.postJob.title} is Successfully Posted`,
                icon: "success",
            });
        
        }
        if (error)
            console.log("Error: ", error);

        setModalVisible(false);
        
    }

  const handleClose = () => setModalVisible(false);
  const handleShow = () => setModalVisible(true);

    let obj = {modalVisible, setModalVisible}

    return (

        <div>
            
         
            <Row>
                <Col>
{/*              
               <AddJobModal obj={handleShow}/> */}
              <center> <h1>Job Posting</h1> </center><br/><br/>
                <Button type="primary" onClick={handleShow} >
            
                    Post a new jobs

                </Button >
                
      <Modal show={modalVisible} onHide={handleClose}
       title="Enter New Job Details"
       onOk={() => postNewJob() }
       onCancel={() => { setModalVisible(false) }}
       destroyOnClose={true}
       okText="Post Job"
       style={{ top: 20 }}>
        <Modal.Header closeButton>
          <Modal.Title>Job Posting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group
                     name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the title of Job!',
                        },
                    ]}>
                         
                    <Form.Control placeholder='Position Title' onChange={(e) => handleChange(e, setTitle)} />
                </Form.Group>
                <br />
             <Form.Group>
        
                    <Form.Select defaultValue="commitment"   value={commitmentId || 'commitment'} onSelect={((value) => setCommitmentId(value))}>
                     
                        <option value="fullTime">Full Time</option>
                        <option value="partTime">Part Time</option>
                    </Form.Select>

                </Form.Group><br />
                <Form.Group
                    name="company"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter Company Name!',
                        },
                    ]}>

                    <Form.Control placeholder='Company name' onChange={(e) => handleChange(e, setName)} />
                </Form.Group><br />
                <Form.Group
                    name="location"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter Company Location',
                        },
                    ]}>
                        
                    <Form.Control placeholder='Location' onChange={(e) => handleChange(e, setLocation)} />
                </Form.Group><br />
                <Form.Group
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter Email',
                        },
                    ]}>
                 
                    <Form.Control placeholder='Your Email' onChange={(e) => handleChange(e, setEmail)} />
                </Form.Group><br />
                <Form.Group
                    name="applyUrl"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter apply Url',
                        },
                    ]}>
                         
                    <Form.Control placeholder='Enter url' onChange={(e) => handleChange(e, setApplyUrl)} />
                </Form.Group><br />
                <Form.Group name="description" onChange={(e) => handleChange(e, setDescription)}>
                    <TextArea  placeholder='Job Description' rows={3} />
                </Form.Group><br />
   
        </Form>
        </Modal.Body>


       {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {postNewJob()}} >
            Post Job
          </Button>
        </Modal.Footer>
      </Modal> 
                
                </Col>
            </Row>
        </div>
    )
}
export default GetAllJobs

