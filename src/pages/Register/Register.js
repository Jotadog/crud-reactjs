import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Axios from 'axios';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                firstName: '',
                lastName: '',
                honorific: 'Mr',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
            },
            message: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addMessage = () => {
        this.setState({ message: true });
    }

    removeMessage = () => {
        setTimeout(function () {
            this.setState({ message: false });
        }.bind(this), 2000);
    }

    handleChange(event) {
        this.setState({
            data: {
                [event.target.name]: event.target.value
            }
        });
    }

    store = () => {
        Axios.post('http://localhost:3001/api/profiles', this.state.data)
            .catch(console.log);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addMessage();
        this.store();
        this.removeMessage();
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
                                <input type="text" className="form-control" id="firstName" name='firstName' value={this.state.data.firstName} placeholder="First name" onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-5">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" value={this.state.data.lastName} placeholder="Last name" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col 6'>
                                <label htmlFor='email'>E-mail</label>
                                <input type="email" className="form-control" id="email" name="email" value={this.state.data.email} placeholder="E-mail" onChange={this.handleChange} />
                            </div>
                            <div className='form-group col 6'>
                                <label htmlFor='phone'>Phone</label>
                                <input type="text" className="form-control" id="phone" name="phone" value={this.state.data.phone} placeholder="Phone" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col 6'>
                                <label htmlFor='password'>Password</label>
                                <input type="password" className="form-control" id="password" name="password" value={this.state.data.password} placeholder="Password" onChange={this.handleChange} />
                            </div>
                            <div className='form-group col 6'>
                                <label htmlFor='confirmPassword'>Confirm password</label>
                                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={this.state.data.confirmPassword} placeholder="Confirm password" onChange={this.handleChange} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {
                        this.state.message ?
                            <Fragment>
                                <br />
                                <h5 className='text-success'>Registered</h5>
                            </Fragment>
                            :
                            <div></div>
                    }
                </div>
            </Fragment >
        );
    }
}

export default Register;