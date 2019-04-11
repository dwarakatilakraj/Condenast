import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';
import { Row, Col } from "react-bootstrap";
import Img from 'react-image'
import logo from "../assets/20190322_101524.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
    this.data = {
      userEngagement: [
        {
          name: "Google Analytics",
          statusByDate: [
            {
              status: "Complete",
              date: "2/21"
            },
            {
              status: "Complete",
              date: "2/22"
            },
            {
              status: "Complete",
              date: "2/23"
            },
            {
              status: "Complete",
              date: "2/24"
            },
            {
              status: "PartialLoad",
              date: "2/25"
            },
            {
              status: "QualityAlert",
              date: "2/26"
            },
            {
              status: "Complete",
              date: "2/27"
            },
            {
              status: "NoLoad",
              date: "2/28"
            },
            {
              status: "Schedule",
              date: "3/1"
            }
          ]
        },
        {
          name: "dtasdhsak",
          statusByDate: [
            {
              status: "Complete",
              date: "2/21"
            },
            {
              status: "Complete",
              date: "2/22"
            },
            {
              status: "Complete",
              date: "2/23"
            },
            {
              status: "Complete",
              date: "2/24"
            },
            {
              status: "PartialLoad",
              date: "2/25"
            },
            {
              status: "QualityAlert",
              date: "2/26"
            },
            {
              status: "Complete",
              date: "2/27"
            },
            {
              status: "NoLoad",
              date: "2/28"
            },
            {
              status: "Schedule",
              date: "3/1"
            }
          ]
        },

        {
          name: "gdgfdghdg",
          statusByDate: [
            {
              status: "Complete",
              date: "2/21"
            },
            {
              status: "Complete",
              date: "2/22"
            },
            {
              status: "Complete",
              date: "2/23"
            },
            {
              status: "Complete",
              date: "2/24"
            },
            {
              status: "PartialLoad",
              date: "2/25"
            },
            {
              status: "QualityAlert",
              date: "2/26"
            },
            {
              status: "Complete",
              date: "2/27"
            },
            {
              status: "NoLoad",
              date: "2/28"
            },
            {
              status: "Schedule",
              date: "3/1"
            }
          ]
        }
      ],
      adDelivery: [
        {
          name: "kjlkshfs",
          statusByDate: [
            {
              status: "Complete",
              date: "2/21"
            },
            {
              status: "Complete",
              date: "2/22"
            },
            {
              status: "Complete",
              date: "2/23"
            },
            {
              status: "Complete",
              date: "2/24"
            },
            {
              status: "PartialLoad",
              date: "2/25"
            },
            {
              status: "QualityAlert",
              date: "2/26"
            },
            {
              status: "Complete",
              date: "2/27"
            },
            {
              status: "NoLoad",
              date: "2/28"
            },
            {
              status: "Schedule",
              date: "3/1"
            }
          ]
        },
        {
          name: "kjshafksd",
          statusByDate: [
            {
              status: "Complete",
              date: "2/21"
            },
            {
              status: "Complete",
              date: "2/22"
            },
            {
              status: "Complete",
              date: "2/23"
            },
            {
              status: "Complete",
              date: "2/24"
            },
            {
              status: "PartialLoad",
              date: "2/25"
            },
            {
              status: "QualityAlert",
              date: "2/26"
            },
            {
              status: "Complete",
              date: "2/27"
            },
            {
              status: "NoLoad",
              date: "2/28"
            },
            {
              status: "Schedule",
              date: "3/1"
            }
          ]
        },

        {
          name: "nkldnlksds",
          statusByDate: [
            {
              status: "Complete",
              date: "2/21"
            },
            {
              status: "Complete",
              date: "2/22"
            },
            {
              status: "Complete",
              date: "2/23"
            },
            {
              status: "Complete",
              date: "2/24"
            },
            {
              status: "PartialLoad",
              date: "2/25"
            },
            {
              status: "QualityAlert",
              date: "2/26"
            },
            {
              status: "Complete",
              date: "2/27"
            },
            {
              status: "NoLoad",
              date: "2/28"
            },
            {
              status: "Schedule",
              date: "3/1"
            }
          ]
        }
      ],
      consumerMarketing: [
        {
          name: "ahslfkjas",
          statusByDate: [
            {
              status: "Complete",
              date: "2/21"
            },
            {
              status: "Complete",
              date: "2/22"
            },
            {
              status: "Complete",
              date: "2/23"
            },
            {
              status: "Complete",
              date: "2/24"
            },
            {
              status: "PartialLoad",
              date: "2/25"
            },
            {
              status: "QualityAlert",
              date: "2/26"
            },
            {
              status: "Complete",
              date: "2/27"
            },
            {
              status: "NoLoad",
             date: "2/28"
            },
            {
              status: "Schedule",
              date: "3/1"
            }
          ]
        },
        {
          name: "lkasndlkas",
          statusByDate: [
            {
              status: "Complete",
              date: "2/21"
            },
            {
              status: "Complete",
              date: "2/22"
            },
            {
              status: "Complete",
              date: "2/23"
            },
            {
              status: "Complete",
              date: "2/24"
            },
            {
              status: "PartialLoad",
              date: "2/25"
            },
            {
              status: "QualityAlert",
              date: "2/26"
            },
            {
              status: "Complete",
              date: "2/27"
            },
            {
              status: "NoLoad",
              date: "2/28"
            },
            {
              status: "Schedule",
              date: "3/1"
            }
          ]
        },

        {
          name: "Google Analytics",
          statusByDate: [
            {
              status: "Complete",
              date: "2/21"
            },
            {
              status: "Complete",
              date: "2/22"
            },
            {
              status: "Complete",
              date: "2/23"
            },
            {
              status: "Complete",
              date: "2/24"
            },
            {
              status: "PartialLoad",
              date: "2/25"
            },
            {
              status: "QualityAlert",
              date: "2/26"
            },
            {
              status: "Complete",
              date: "2/27"
            },
            {
              status: "NoLoad",
              date: "2/28"
            },
            {
              status: "Schedule",
              date: "3/1"
            }
          ]
        }
      ],
      updated:"3/1/2019 6:24PM"
    }
  }

  dataConstruct(value){
    let dateComp = [];
    value.statusByDate.map((index) => {
      dateComp.push(
        <span className = "circle"style={{}}>
          <span className={index.status}></span>
          <div>{index.date}</div>
        </span>);
    });
    return (dateComp);
  }

  NestedGrid() {
    let comp = [];
    for (let i = 0; i < 3; i++) {
      comp.push(
        <div className = "data-wrapper">

          <span> {this.dataConstruct(this.data.userEngagement[i])}</span>
           <span>{this.dataConstruct(this.data.adDelivery[i])}</span>
           <span>{this.dataConstruct(this.data.consumerMarketing[i])}</span>


        </div>
      );
    }
    return comp;
  }
  render() {
    return (
<div className="dataStatus">
    <div className="div1">
    <span className="title1">
       <img src={logo} alt="Logo" />
       </span>

      <span className = "spannnnn1">UPDATED:{this.data.updated}

      </span>
      <div className="circleRender">
       <div >
       <div className="testCircle">
           <span className="Complete"></span>
           <span className="text">complete</span>
            </div>
            <div className="testCircle">
           <span className="QualityAlert"></span>
           <span className="text">QualityAlert</span>
           </div>
              </div>
   <div>
     <div className="testCircle">
      <span className="PartialLoad"></span>
       <span className="text">PartialLoad</span>
       </div>
       <div className="testCircle">
           <span className="NoLoad"></span>
           <span className="text">NoLoad</span>
           </div>
    </div>
    </div>


    </div>
      <div className = "title">
        <span className= "userEngagement">User Engagement </span>
        <span className = "adDelivery">Ad Delivery </span>
        <span className = "consumerMarketing">Consumer Marketing </span>
        </div>
        {this.NestedGrid()}
  </div>
    );
  }
}

render(<App />, document.getElementById('root'));