import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// function handleAction(event) {
//     console.log('Child did:', event);
// }

// function Parent() {
//     return ( <Child onAction = { handleAction }/>);
// }

// function Child({ onAction }) {
//     return ( <button onClick = { onAction }>Click Me!</button> );
// }

class CountingParent extends React.Component {
    state = {
        actionCount: 0
    }
    handleAction = (action) => {
        console.log('Child says', action);
        // actionCount is incremented, and
        // the new count replaces the existing one

        this.setState({
            actionCount: this.state.actionCount + 1
        });
    }
    myAction = ()=>{
        this.setState({
            actionCount: 'asdfasdfasdf'
        });
    }
    render() {
        return ( 
            <div> 
                {/* <Child onAction = { this.handleAction }/> */}
                <button onClick={this.myAction}>Click Me!</button>
                <p> Clicked { this.state.actionCount } times </p> 
            </div>
        );
    }
}

export default CountingParent;