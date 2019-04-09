import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

import Img from 'react-image'
import { connect } from "react-redux";
import logo from "../assets/20190322_101524.png";
import AddQuestion from "./AddQuestion";
import DeleteFile from "./DeleteFile";
import lodash from "lodash"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      question:[],
      addClick:false,
      onDelete:false,
      deleteArray:[],
      selectedQuestion:{}
    };
    this.deleteArray=[];
    this.data={
      question:"",
      options:[]
    };
    this.formChange = this.formChange.bind(this);
    this.addClick=this.addClick.bind(this);
    this.onSubmit= this.onSubmit.bind(this)
    this.onDelete=this.onDelete.bind(this)
    this.onClickData=this.onClickData.bind(this)
    this.onDeleteData=this.onDeleteData.bind(this)
    this.addOption=this.addOption.bind(this)
    this.AlertClose=this.AlertClose.bind(this)
   
  }
  formChange(e){
  
    if(e.target.id === "0"){
      this.data.question= e.target.value
    }
  }
 
  onSubmit(e){
    this.setState({
      addClick:false
    })
   
    if(this.data.question){
      this.setState({
        question:this.state.question.concat(this.data)
      })
    }
    this.data={
      question:"",
      options:[]
    };
   
  }
  addOption(value){
  if(this.data.options.length < 6){
      this.data.options.push(value)
  }else{
    this.setState({
      alertShow:true
    })
  }
    console.log("dataaaa", this.data)
  }
  addClick(){
    this.setState({
      addClick:true,
      onDelete:false,
      selectedQuestion:{},
      alertShow:false

    })
  }
  onDelete(){
    this.setState({
      onDelete:true,
      addClick:false,
      alertShow:false
    })
  }

  onDeleteData( data){
   let updatedData = this.state.question.filter(function(val, index){
   
     return data !== val.question;
   }
)

   this.setState({
     question:updatedData,
     addClick:false,
     alertShow:false
   })
  //  this.deleteArray = [];
    
  
  }

  AlertClose(){
    this.setState({
      alertShow:false
    })
  }

  onClickData(item){
    this.setState({
      addClick:true,
      selectedQuestion:item,
      alertShow:false
    })
  }
  render() {
    console.log("dtatatata", this.state)
    return(
      <div>
        {/* <Alert show={true} variant="danger">
          hellooooo
          </Alert> */}
          {this.state.alertShow ?
           <Alert dismissible show={this.state.alertShow} variant="danger" onClose={this.AlertClose}>
              You Cannot Add More Than Six Options For a Question
           </Alert> :
           <div />
          
        }

          <div className ="row">
          <div className = "columnleft">
            <DeleteFile 
                data={this.state.question}
                onDelete = {this.onDeleteData}
                onDeleteData = {this.state.onDelete}
                onClickData={this.onClickData}
                />
            <Button variant="primary" onClick = {this.addClick}>Add</Button>
            <Button variant="primary" onClick = {this.onDelete}>Delete</Button>
            </div>
              {this.state.addClick ?
                  <div className="columnright">
                    <Form >
                      <AddQuestion 
                        formChange={this.formChange}
                        onSubmit={this.onSubmit}
                        addClick={this.addClick}
                        addOption={this.addOption}
                        alertShow={this.state.alertShow}
                        selectedQuestion = {!_.isEmpty(this.state.selectedQuestion) ? this.state.selectedQuestion : {}}
                      />
                    </Form>
                    </div> : <div />
              }
                
          
        </div>
       
          
          </div>
        
    )
  }
}

// render(<App />, document.getElementById('root'));
