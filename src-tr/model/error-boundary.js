import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError : false ,
            errorMessage : ""
        }
    }

    componentDidCatch(error , errorInfo) {
        this.setState({hasError : true , errorMessage : error})
    }

    render() {
        if(this.state.hasError) {
            return <h2>{this.state.errorMessage}</h2>
        }
        return (
            this.props.children
        )
    }
}

export default ErrorBoundary