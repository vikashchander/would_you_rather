import React, { Component } from 'react'

class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="card w-25 mx-auto my-2">
                    <div class="view overlay">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                            alt="Card image cap" />
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option value="" disabled selected>Select Users</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <a href="#" class="btn btn-primary mx-auto">Login</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;