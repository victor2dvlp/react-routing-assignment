import React, { Component } from 'react';

class Course extends Component {
    state = {
        tittle: 'NO TITTLE'
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log(param); // yields ['start', '5']
            if(param[0] == 'tittle') {
                this.setState({tittle: param[1]})
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.location.search != nextProps.location.search) {
                console.log('not equal props');
            const query = new URLSearchParams(nextProps.location.search);
            for (let param of query.entries()) {
                console.log(param); // yields ['start', '5']
                if(param[0] == 'tittle') {
                    this.setState({tittle: param[1]})
                }
            }
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.tittle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;