import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Debounce } from 'react-throttle';
import WindowResizeListener from 'react-window-size-listener';
import { ConnectedRouter } from 'react-router-redux';
import appActions from '../../redux/app/actions';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import AppRouter from './AppRouter';
import { siteConfig } from '../../settings';
import AppHolder from './commonStyle';
import './global.css';
import 'react-toastify/dist/ReactToastify.css';

const { Content, Footer } = Layout;
const { toggleAll } = appActions;
class App extends Component {
  render() {
    const url = '';
    const { height, history, loading } = this.props;
    const appHeight = window.innerHeight;

    function render() {
      if (loading === true) {
    	
    	return <div className={'loadingMain'} />;
      } else {
    	 	
    	return <AppRouter url={url} />;
      }
    }

    return (
      <ConnectedRouter history={history}>
        <>
          <AppHolder>
            <Layout style={{ height: appHeight }}>
              <Debounce time="1000" handler="onResize">
                <WindowResizeListener
                  onResize={windowSize =>
                    this.props.toggleAll(
                      windowSize.windowWidth,
                      windowSize.windowHeight
                    )
                  }
                />
              </Debounce>
              <Topbar url={url} />

              <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
                <Sidebar url={url} />
                <Layout
                  className="isoContentMainLayout"
                  style={{
                    height: height,
                  }}
                >
                  <Content
                    className="isomorphicContent"
                    style={{
                      padding: '70px 0 0',
                      flexShrink: '0',
                      background: '#f1f3f6',
                      position: 'relative',
                    }}
                  >
                    {render()}
                  </Content>
                  <Footer
                    style={{
                      background: '#ffffff',
                      textAlign: 'center',
                      borderTop: '1px solid #ededed',
                    }}
                  >
                    {siteConfig.footerText}
                  </Footer>
                </Layout>
              </Layout>
            </Layout>
          </AppHolder>
        </>
      </ConnectedRouter>
    );
  }
}

export default connect(
  state => ({
    loading: state.App.loading,
    height: state.App.height,
  }),
  { toggleAll }
)(App);
