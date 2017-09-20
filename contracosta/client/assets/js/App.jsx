import React from 'react';
import { connect } from 'react-redux';
import Menu from 'react-burger-menu/lib/menus/push'; // < using instead of 'import { push as Menu } from 'react-burger-menu'' to keep size of webpack down;
//import theme from '../css/img/theme.svg';
import ChatContainer from './chat/ChatContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ChatContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);