const React = require('react');
const Router = require('react-router');

const Link = Router.Link;

const Header = React.createClass({
  render: () => (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse">
          <Link to="app" className="navbar-brand">
            <img width="250" src="images/plu-logo.png" />
          </Link>
          <ul className="nav navbar-nav pl-5">
            <li className="nav-item"><Link to="app" className="navbar-brand">Home</Link></li>
            <li className="nav-item"><Link to="authors" className="navbar-brand">Authors</Link></li>
            <li className="nav-item"><Link to="about" className="navbar-brand">About</Link></li>
          </ul>
        </div>
      </nav>
  )
});

module.exports = Header;
