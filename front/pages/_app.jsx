/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { inspect } from 'util';
import Cookies from 'universal-cookie';
import { AppProvider } from 'context/AppContext';
import { UiProvider } from 'context/UiContext';

class MainApp extends App {
  render() {
    const { Component, pageProps, appContextState } = this.props;

    return (
      <>
        <AppProvider data={appContextState}>
          <UiProvider>
            <Component {...pageProps} />
          </UiProvider>
        </AppProvider>
      </>
    );
  }
}

export default MainApp;
