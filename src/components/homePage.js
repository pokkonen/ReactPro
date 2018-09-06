const React = require('react');

const Home = React.createClass({
  render: () => (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router and Flux for ultra-responsive web apps.</p>
        <ul>
          <li>Coffee</li>
          <li>Beer</li>
          <li>Milk</li>
        </ul>
      </div>
  )
});

module.exports = Home;
