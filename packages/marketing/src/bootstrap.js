import React from 'react';
import  ReactDOM from 'react-dom';
import App from './App';

// Mount function to start the app.
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
};

// If we are in devielopment and in isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector("#_marketing-dev-root");

    if (devRoot){
        mount(devRoot);
    }
}

// when we are running through container = we are going to export Mount.
export { mount };
