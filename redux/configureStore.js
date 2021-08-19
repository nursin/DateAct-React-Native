import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// data
import { formValues } from './formValues';
import { data } from './data';
import { InitialFeedback } from '../shared/forms';


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      formValues,
      data,
      ...createForms({
        feedbackForm: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
