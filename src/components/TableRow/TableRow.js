import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props._id
        };

        this.handleClick = this.handleClick.bind(this);
    }

    delete = () => {
        Axios.delete(`http://localhost:3001/api/profiles/${this.state.id}`)
            .catch(console.log);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({ confirmDelete: true });
        this.delete();
        this.props.refresh(true);
    }

    render() {
        return (
            <Fragment>
                <tr>
                    <th scope="row">{this.props._id}</th>
                    <td>{this.props.honorific}</td>
                    <td>{this.props.firstName + ' ' + this.props.lastName}</td>
                    <td>{this.props.email}</td>
                    <td>
                        <Link className='btn btn-success' to={`/edit/${this.props._id}`}><i className='fas fa-edit'></i></Link>
                        &nbsp;
                    <button className='btn btn-danger' onClick={this.handleClick}><i className='fas fa-trash'></i></button>
                    </td>
                </tr>
            </Fragment>
        );
    }
}

export default TableRow;