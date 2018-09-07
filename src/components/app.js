const $ = require('jquery');
const jQuery = require('jquery');
const React = require('react');
const RouteHandler = require('react-router').RouteHandler;
const Header = require('./common/header');

const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
