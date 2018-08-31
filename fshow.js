import React from 'react';

import { Container, Row, Col } from 'reactstrap';

class fshow extends React.Component{
    render()
    {
        return(
            <Container>
            <Row>
                <h2>Personal Info</h2>
            </Row>
            <Row>
                <Col lg="4" md="4" sm="12"><h4>First Name</h4></Col>
                <Col lg="4" md="4" sm="12"><h4>Last Name</h4></Col>
                <Col lg="4" md="4" sm="12"><h4>skills</h4></Col>
            </Row>
            <Row>
                <Col lg="4" md="4" sm="12" className="Info-border">{this.props.firstname}</Col>
                <Col lg="4" md="4" sm="12" className="Info-border">{this.props.lastname}</Col>
                <Col lg="4" md="4" sm="12" className="Info-border">{this.props.skills}</Col>
            </Row>
            <Row>
                <Col lg="12" md="12" sm="12"><h4>email</h4></Col>
            </Row>
            <Row>
                <Col lg="12" md="12" sm="12" className="Info-border">{this.props.email}</Col>
            </Row>        
            <Row>
                {/* <Col lg="6" md="6" sm="6"><h4>Email</h4></Col> */}
                <Col lg="6" md="6" sm="6"><h4>Phone</h4></Col>
            </Row>   
            <Row>
                {/* <Col lg="6" md="6" sm="6" className="Info-border">{this.props.email}</Col> */}
                <Col lg="6" md="6" sm="6" className="Info-border">{this.props.phone}</Col>
            </Row> 
            <Row>
                <Col lg="12" md="12" sm="12"><h4>address</h4></Col>
            </Row>
            <Row>
                <Col lg="12" md="12" sm="12" className="Info-border">{this.props.address}</Col>
            </Row>   
            <br/>
        </Container>
        );
    }
}

export default fshow;