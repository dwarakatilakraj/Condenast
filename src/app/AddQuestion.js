import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Img from 'react-image'
import { connect } from "react-redux";
import logo from "../assets/20190322_101524.png";

export default class AddQuestion extends Component {
    constructor() {
        super();
        this.state = {}
        this.onSubmit=this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault()
        this.props.addOption(this.refs.option.value)
    }
    optionContruct(){
        let cmp =<div/>;
        cmp = this.props.selectedQuestion.options.map((value, index) =>{
            return(
                <div>
                <label>
                    Option:
                 <input id="1" type="text" name="name" disabled={true} value={value} />
                    </label> <br /> <br />
                    </div>
            );
        })
        return cmp
    }
    render(){
        console.log("jhfdsjfdk", this.props)
        return(
            <div className="addquestion">
                {_.isEmpty(this.props.selectedQuestion) ? 
                <Col xs={12} md={4}>
                <label >
                    Question:
                 <input id="0" type="text" name="name" onChange={this.props.formChange}  style={{width:"500px"}}/>
                    </label> < br /> <br />
                       
                <form id="addQuestions" onSubmit={this.onSubmit} style={{"margin-bottom":"20px"}}>
                    <input type="text" required ref="option" />
                    <input type="submit" disabled={this.props.alertShow} value="Add Option" />
                </form> 
                <Button onClick={this.props.onSubmit}>submit</Button>
                </Col> :
                <div>
                    <label >
                        Question:
                 <input id="0" type="text" name="name" disabled={true} value={this.props.selectedQuestion.question} />
                    </label> < br /> <br />
                    {this.optionContruct()}
                    {/* <label>
                        Option1:
                 <input id="1" type="text" name="name" disabled={true} value={this.props.selectedQuestion.option1} />
                    </label> <br /> <br />
                    <label>
                        Option2:
                 <input id="2" type="text" name="name" disabled={true} value={this.props.selectedQuestion.option2} />
                    </label><br /><br />
                    <label>
                        Option3:
                 <input id="3" type="text" name="name" disabled={true} value={this.props.selectedQuestion.option3} />
                    </label><br /><br />
                </div> */}
                </div>
                }
            </div>
        )
    }
}