import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/App';

class App extends React.Component {

    render(){

        return (
            <div>
                <AppComponent />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));