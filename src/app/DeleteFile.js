import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Img from 'react-image'
import { connect } from "react-redux";
import logo from "../assets/20190322_101524.png";

export default class DeleteFile extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render(){
        let data = this.props.data.map((item, index) =>{
            return(
              <li>
              <span className="questionname" onClick = {(e) => this.props.onClickData(item)}>{item.question}</span>
              {
                    this.props.onDeleteData ?  
                    <span className ="questionremove" onClick={(e) => this.props.onDelete(item.question)}> X </span> : <div />
              }
                  </li>
            )
        })
        return(
            <div classNme="question">
               <ul>{data}</ul> 
            </div>
        )
    }
}