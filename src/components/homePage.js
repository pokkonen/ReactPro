const React = require('react');
const Router = require('react-router');

const Link = Router.Link;

const Home = React.createClass({
  render: () => (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, React Router and Flux for ultra-responsive web apps. </p>
      <Link to="about" className="btn btn-info btn-lg">Learn More</Link><br /><br />
      <Link to="authors" className="btn btn-success btn-md">Authors :D</Link>
    </div>
  )
});

module.exports = Home;
