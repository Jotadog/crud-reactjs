import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Axios from 'axios';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            honorific: 'Mr',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    store = () => {
        Axios.post('http://localhost:3001/api/profiles', this.state)
            .catch(console.log);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.store();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <br />
                    <h1>Register profile</h1>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <div className='row'>
                            <div className="form-group col-2">
                                <label htmlFor="honorific">Honorific</label>
                                <select name='honorific' className="form-control" id="honorific" onChange={this.handleChange}>
                                    <option value='Mr'>Mr.</option>
                                    <option value='Ms'>Ms.</option>
                                </select>
                            </div>
                            <div className="form-group col-5">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" name='firstName' value={this.state.firstName} placeholder="First name" onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-5">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" value={this.state.lastName} placeholder="Last name" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col 6'>
                                <label htmlFor='email'>E-mail</label>
                                <input type="email" className="form-control" id="email" name="email" value={this.state.email} placeholder="E-mail" onChange={this.handleChange} />
                            </div>
                            <div className='form-group col 6'>
                                <label htmlFor='phone'>Phone</label>
                                <input type="text" className="form-control" id="phone" name="phone" value={this.state.phone} placeholder="Phone" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col 6'>
                                <label htmlFor='password'>Password</label>
                                <input type="password" className="form-control" id="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
                            </div>
                            <div className='form-group col 6'>
                                <label htmlFor='confirmPassword'>Confirm password</label>
                                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={this.state.confirmPassword} placeholder="Confirm password" onChange={this.handleChange} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Fragment >
        );
    }
}

export default Register;