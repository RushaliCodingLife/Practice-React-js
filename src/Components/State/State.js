import React from 'react'

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Name',
            text: 'Hello'
        };
    };

    updatefullName = () => {
        this.setState({
            text: 'I am here'
        });
    };


    updateName = () => {
        this.setState({
            text: 'at Ahmedabad'
        });
    };



    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.text}</p>

                <button type='button' onClick={this.updatefullName}>Name</button>

                <button type='button' onClick={this.updateName}>City</button>
            </div>

        );
    }
}

export default Name
