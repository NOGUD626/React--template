import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./stores/";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setName } from "./stores/user";

const Home = () => {
    const name = useSelector(state => state.user.name);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>Hello React.</p>
            <button
                onClick={() => dispatch(setName("noguchi]"))}
            >click</button>
        </div>
    );
}

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <h1>Hello React Router</h1>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;