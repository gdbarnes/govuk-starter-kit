import React, { Component } from 'react';
import loader from './../css/loader.svg';
import { consoleStyles } from './../helper/constants';
import { Header } from './../components/Header';
import { Intro } from './../components/Intro';
import { Packages } from './../components/Packages';
import { UpdateInstructions } from './../components/UpdateInstructions';
import { AssetOptions } from './../components/AssetOptions';
import { MarkupOptions } from './../components/MarkupOptions';
import { Markup } from './../components/Markup';

class App extends Component {
  state = {
    loading: true,
    location: window.location.origin,
    serverLocation: '',
    minified: true,
    path: 'absolute',
    showUpdateInstructions: false,
    successfulCompilation: false,
    archiveCreated: false
  };

  componentDidMount() {
    Promise.resolve(this.props.data)
      .catch(error => console.error('Error: ', error))
      .then(value => {
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
          serverLocation: `${window.location.protocol}//${
            window.location.hostname
          }:${serverPortNumber}`
        })
      );

    const assetsHaveCompiled = sessionStorage.getItem('successfulCompilation');
    const archiveWasCreated = sessionStorage.getItem('archiveCreated');
    this.setState({
      successfulCompilation: assetsHaveCompiled,
      archiveCreated: archiveWasCreated
    });
  }

  componentWillUnmount() {
    sessionStorage.clear();
  }

  generateAssets = () => {
    console.log('%c%s', consoleStyles, `◆ Gulp tasks started 🥤`);
    fetch('/gulp')
      .catch(error => console.error('Error: ', error))
      .then(response => this.successfulCompile());
  };

  successfulCompile = () => {
    this.setState({ successfulCompilation: true });
    sessionStorage.setItem('successfulCompilation', this.state.successfulCompilation);
    console.log('%c%s', consoleStyles, `◆ Gulp tasks complete ✅`);
    console.log('%c%s', consoleStyles, `◆ Assets compiled to: ${this.state.serverLocation}/assets`);
  };

  createArchive = () => {
    console.log('%c%s', consoleStyles, `◆ Creating archive 🗜`);
    fetch('/archive')
      .then(response => {
        this.setState({ archiveCreated: true });
        sessionStorage.setItem('archiveCreated', this.state.archiveCreated);
        console.log('%c%s', consoleStyles, `◆ assets.zip created ✅`);
        console.log(
          '%c%s',
          consoleStyles,
          `◆ Download from: ${this.state.serverLocation}/download`
        );
      })
      .catch(err => console.log(err));
  };

  downloadArchive = () => {
    window.open(`${this.state.serverLocation}/download`);
  };

  togglePath = () => {
    this.setState({
      path: this.state.path === 'absolute' ? 'cdn' : 'absolute'
    });
  };

  toggleMinified = () => {
    this.setState({
      minified: !this.state.minified
    });
  };

  // ping = () => {
  //   console.log('ping clicked');
  //   fetch('/ping')
  //     .catch(error => console.error('Error: ', error))
  //     .then(response => console.log('Pong'));
  // };

  browseAssets = () => {
    window.open(`${this.state.serverLocation}/assets`);
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

          <AssetOptions
            type="assets"
            generateAssets={this.generateAssets}
            browseAssets={this.browseAssets}
            createArchive={this.createArchive}
            downloadArchive={this.downloadArchive}
            archiveCreated={this.state.archiveCreated}
            successfulCompilation={this.state.successfulCompilation}
          />

          <MarkupOptions
            type="markup"
            togglePath={this.togglePath}
            path={this.state.path}
            toggleMinified={this.toggleMinified}
            minified={this.state.minified}
          />

          {this.state && this.state.versionData ? (
            <Markup
              packageInfo={this.state.versionData}
              path={this.state.path}
              minified={this.state.minified}
            />
          ) : (
            <div className="loader">
              <img src={loader} alt="loader" />
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default App;
