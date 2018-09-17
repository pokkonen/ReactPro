const React = require('react');

const About = React.createClass({
  statics: {
    willTransitionTo(transition, params, query, callback) {
      if (!confirm('Are you sure you want to read a page that\'s this boring?')) {
        transition.about();
      } else {
        callback();
      }
    },
    willTransitionFrom(transition, component) {
      if (!confirm('Are you sure you want to leave a page that\'s this exciting?')) {
        transition.about();
      }
    }
  },

  render() {
    return (
      <div className="jumbotron">
        <h1>About</h1>
        <p>
          This application uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = About;
