import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            value: null
        }
        this.handleSelection = this.handleSelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSelection(e) {

        var value = e.target.value;
        this.setState({ data: true, value })
        console.log(value);
        // this.props.setAuthedUser(value);
        // console.log(this.props.setAuthedUser(value).payload);

    }

    handleSubmit(e) {
        const { history } = this.props;
        console.log(this.state.value)
        this.props.setAuthedUser(this.state.value);
        console.log(this.props.setAuthedUser(this.state.value).payload);
        this.state.data ? history.push('/') : history.push('/login');
    }

    render() {
        const { sarahedo, tylermcginnis, johndoe } = this.props.allUsers;
        const data1 = { ...sarahedo };
        const data2 = { ...tylermcginnis };
        const data3 = { ...johndoe };
        return (
            <React.Fragment>
                <div class="card w-25 mx-auto my-2">
                    <div class="view overlay">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            alt="Card image cap" />
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <select value={this.state.value} onChange={this.handleSelection} class="form-control" id="exampleFormControlSelect1">
                                <option disabled selected>Select Users</option>
                                <option value={data1.id}>{data1.name}</option>
                                <option value={data2.id}>{data2.name}</option>
                                <option value={data3.id}>{data3.name}</option>
                                {console.log(this.props)}
                            </select>
                        </div>
                        <Link onClick={this.handleSubmit} class="btn btn-primary mx-auto">Login</Link>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
const mapStateToProps = state => {
    return { ...state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthedUser: (data) => dispatch({ type: 'SET_STATE_USER', payload: data })
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));