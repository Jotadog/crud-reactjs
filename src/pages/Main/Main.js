import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Axios from 'axios';
import TableRow from '../../components/TableRow/TableRow';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            records: [],
            info: {},
            page: 1,
            refresh: false
        }

        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        const { page, info: { totalPages } } = this.state;
        if (page === totalPages) {
            return;
        }
        this.loadRecords(page + 1);
    }

    previousPage() {
        const { page } = this.state;
        if (page === 1) {
            return;
        }
        this.loadRecords(page - 1);
    }

    refreshPage(bool) {
        this.setState({ refresh: bool });
    }

    componentDidMount() {
        this.loadRecords();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.refresh !== prevState.refresh) {
            this.loadRecords(this.state.page);
        }
    }

    loadRecords(page = 1) {
        Axios.get(`http://127.0.0.1:3001/api/profiles?page=${page}`)
            .then((response) => {
                const { docs, ...info } = response.data;
                this.setState({
                    records: docs,
                    info,
                    page,
                    refresh: false
                })
            })
            .catch(console.log);
    }

    render() {

        const { records, info: { totalPages }, page } = this.state;
        return (
            <Fragment>
                <Header />
                <br />
                <div className='container'>
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <div>
                                <b>Records</b>: page {this.state.page}
                            </div>
                            <div>
                                <button disabled={page === 1} className='btn btn-info' onClick={this.previousPage}><i className='fas fa-chevron-left'></i></button>
                                &nbsp;
                            <button disabled={page >= totalPages} className='btn btn-info' onClick={this.nextPage}><i className='fas fa-chevron-right'></i></button>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Honorific</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        records.map((record) => {
                                            return (<TableRow key={record._id} refresh={(bool) => this.refreshPage(bool)} {...record} />);
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Main;