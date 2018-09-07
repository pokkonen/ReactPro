const React = require('react');
const Link = require('react-router').Link;

const NotFoundPage = React.createClass({
  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Whoops! Sorry, there is nothing to see here.</p>
        <Link to="app" className="btn btn-warning">Back to Home</Link>
      </div>
    );
  }
});

module.exports = NotFoundPage;
