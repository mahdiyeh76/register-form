import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import fshow from './fshow';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
class info extends React.Component{
  constructor(props){
    super(props);

    this.state={
      firstname:"mahdiyeh",
      lastname:"piri",
      email:" ",
      phone:"0912345678",
      address:" ",
      skills:" ",
      submit:0

    };

    this.handleAddinformation = this.handleAddinformation.bind(this);
    this.handleChangeinformation = this.handleChangeinformation.bind(this);

  }
    handleAddinformation(event){
     this.setState((prevstate) =>{
       return{
         submit:prevstate.submit +1
       }
     }
    );
     event.preventDefault();
    }

    handleChangeinformation(event){
     const target = event.target;
     const value = target.value;
     const name = target.name;
     this.setState({
       [name]:value
     });
    }
    render(){
      let finfo;
      const fsubmit = this.setState.submit;
      if(fsubmit>0){
        console.log(this.handleAddinformation);
         info =
         <fshow firstname={this.state.firstname} lastname={this.state.lastname} address={this.state.address}   email={this.state.email} phone={this.state.phone} skills={this.state.skills} />;

      }
      return(
        <Container>
                <h2>Personal Info</h2>
                <Form onSubmit={this.handleAddinformation}>
                    <Row>
                        <Col lg="4" md="4" sm="12">
                            <FormGroup>
                                <Label for="FirstName">First Name</Label>
                                <Input type="text" name="firstname" id="firstname" value={this.state.firstname} onChange={this.handleChangeinformation} />
                            </FormGroup>
                        </Col>
                        <Col lg="4" md="4" sm="12">
                            <FormGroup>
                                <Label for="LastName">Last Name</Label>
                                <Input type="text" name="lastname" id="lastname" value={this.state.lastname} onChange={this.handleChangeinformation} />
                            </FormGroup>
                        </Col>
                        <Col lg="4" md="4" sm="12">
                            <FormGroup>
                                <Label for="skills">skills</Label>
                                <Input type="text" name="skills" id="skills" value={this.state.skills} onChange={this.handleChangeinformation} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12" md="12" sm="12">
                            <FormGroup>
                                <Label for="address">address</Label>
                                <Input type="textarea" name="address" id="address" rows="8" value={this.state.address} onChange={this.handleChangeinformation} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChangeinformation} />
                            </FormGroup>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                            <FormGroup>
                                <Label for="Phone">Phone</Label>
                                <Input type="number" name="phone" id="phone" value={this.state.phone} onChange={this.handleChangeinformation} />
                            </FormGroup>
                        </Col>
                    </Row>
                   
                    <Row>
                        <Col lg="4" md="4" sm="4">
                            <Button color="primary" size="lg" block value="Submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
                
                <Row>
                    {finfo}
                </Row>
            </Container>
        );
    }
}

export default info;     





























