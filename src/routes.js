const React = require('react');
const Router = require('react-router');

const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;
const Redirect = Router.Redirect;
const app = require('./components/app');
const homePage = require('./components/homePage');
const authorPage = require('./components/authors/authorPage');
const author = require('./components/authors/manageAuthorPage');
const aboutPage = require('./components/about/aboutPage');
const notFoundPage = require('./components/notFoundPage');

const routes = (
  <Route name="app" path="/" handler={app}>
    <DefaultRoute handler={homePage} />
    <Route name="authors" handler={authorPage} />
    <Route name="addAuthor" path="author" handler={author} />
    <Route name="about" handler={aboutPage} />
    <NotFoundRoute name="wrong" handler={notFoundPage} />
    <Redirect from="about-us" to="about" />
    <Redirect from="awthurs" to="authors" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
