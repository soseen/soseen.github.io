import React, {Component} from 'react';
import {Jumbotron, Container, Row, Col, Image, Button, Form} from 'react-bootstrap';
import './InputPanel.css';

class InputPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
          currentServer: "NA1"
        };

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }
    
    handleDropdownChange(e) {
        this.setState({ currentServer: e.target.value });
    }

    findPlayer = () => {
        this.props.setPlayerName(this.objInput.value, this.state.currentServer);
    }

    render() {
        return(
            <Form className = 'mx-auto'>
                <Form.Row className = 'form' >
                    <Form.Group as={Col} md = "2" controlId="formSelectServer" className = "mr-0">
                        <Form.Control as="select" className="btn btn-primary" onChange={this.handleDropdownChange}>
                            <option value ="NA1">NA</option>
                            <option value ="EUW1">EUW</option>
                            <option value ="EUN1">EUNE</option>
                            <option value ="KR">KR</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md = "8" controlId="formInputName" className = "mr-0">
                        <Form.Control type="text" className="btn btn-primary" placeholder="Summoner Name" ref={input => this.objInput = input}/>
                    </Form.Group>

                    <Form.Group md = "2" controlId="findButton" className = "mr-0">
                        <Button type="button" className="btn btn-primary" onClick={this.findPlayer}>Find</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        )
    }
}

export default InputPanel;