const React = require('react');

const Header = React.createClass({
  render: () => (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse">
          <a href="/" className="navbar-brand">
            <img className="w-25" src="images/pluralsight-logo.png" />
          </a>
          <ul className="nav navbar-nav">
            <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
          </ul>
        </div>
      </nav>
  )
});

module.exports = Header;
