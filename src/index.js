import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'routes';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import { createStandaloneToast, Toast } from '@chakra-ui/toast';

const { ToastContainer, toast } = createStandaloneToast();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <Router />
      <ToastContainer />
    </Provider>
);

toast({
  description: 'OK',
  duration: 2000
});