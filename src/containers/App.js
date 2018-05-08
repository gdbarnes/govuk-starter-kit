import React, { Component } from 'react';
import loader from './../css/loader.svg';
import { Header } from './../components/Header';
import { Intro } from './../components/Intro';
import { Packages } from './../components/Packages';
import { UpdateInstructions } from './../components/UpdateInstructions';
import { Options } from './../components/Options';
import { Markup } from './../components/Markup';

class App extends Component {
  state = {
    loading: true,
    location: window.location.origin,
    serverLocation: '',
    markupOptions: {
      minified: true,
      path: 'absolute'
    },
    showUpdateInstructions: false,
    showDownload: false
  };

  componentDidMount() {
    Promise.resolve(this.props.data).then(value => {
      // console.log(value);
      this.setState({
        loading: false,
        versionData: value
      });
    });

    fetch('/port')
      .catch(error => console.error('Error: ', error))
      .then(response => response.text())
      .then(serverPortNumber =>
        this.setState({
          serverLocation: `${window.location.protocol}://${
            window.location.hostname
          }:${serverPortNumber}`
        })
      );
  }

  regenerateFiles = () => {
    console.log(
      '%c Starting Gulp tasks... 🥤',
      'color: forestgreen; font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; font-weight: bold;'
    );
    fetch('/gulp')
      .catch(error => console.error('Error: ', error))
      .then(response => this.successfulCompile());
  };

  successfulCompile = () => {
    console.log(
      `%c Assets compiled to: ${this.state.location}/assets/ 🎉`,
      'color: forestgreen; font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; font-weight: bold;'
    );
  };

  createArchive = () => {
    console.log('creating archive');
    fetch('/archive')
      .then(response => {
        this.setState({ showDownload: true });
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  downloadArchive = () => {
    window.open(`${this.state.serverLocation}/download`);
  };

  togglePath = () => {
    this.setState({
      markupOptions: {
        path: this.state.markupOptions.path === 'absolute' ? 'cdn' : 'absolute'
      }
    });
  };

  // ping = () => {
  //   console.log('ping clicked');
  //   fetch('/ping')
  //     .catch(error => console.error('Error: ', error))
  //     .then(response => console.log('Pong'));
  // };

  browseAssets = () => {
    window.location = `${this.state.serverLocation}/assets`;
  };

  howToUpdate = () => {
    this.setState({
      showUpdateInstructions: !this.state.showUpdateInstructions
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main className="application-main container">
          <Intro />
          <div>
            {this.state && this.state.versionData ? (
              <Packages howToUpdate={this.howToUpdate} packageInfo={this.state.versionData} />
            ) : (
              <div className="loader">
                <img src={loader} alt="loader" />
              </div>
            )}
          </div>
          {this.state.showUpdateInstructions ? <UpdateInstructions /> : null}
          <h3>Assets options</h3>
          <Options
            type="assets"
            regenerateFiles={this.regenerateFiles}
            browseAssets={this.browseAssets}
            createArchive={this.createArchive}
            showDownload={this.state.showDownload}
            downloadArchive={this.downloadArchive}
          />

          <h3>Markup options</h3>
          <Options
            type="markup"
            togglePath={this.togglePath}
            toggleMinified={this.toggleMinified}
          />

          <Markup packageInfo={this.state.versionData} markupOptions={this.state.markupOptions} />
        </main>
      </div>
    );
  }
}

export default App;
