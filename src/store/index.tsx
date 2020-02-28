import { createStore, compose } from "redux";
import filter from "../store/reducers/filter";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = compose(composeWithDevTools());

const reducer = filter;

const store = createStore(reducer, enhancer);

export default store;
