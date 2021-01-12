import React from "react";
import Layout from '../src/layout/Layout';
import AppProvider from "../src/hooks/AppProvider"
import ReservationWidget from "components/ReservationWIdget/ReservationWidget";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import configureStore  from "../src/store"
import { Provider } from 'react-redux';

const store = configureStore();

const App = () => {
    return (
      <>
       <Provider store={store}>
          <AppProvider>
            <Layout>
                <ReservationWidget />
            </Layout>
          </AppProvider>
        </Provider>
      </>
    )
  }
  
  export default App