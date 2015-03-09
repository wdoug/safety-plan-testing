var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

var pageData = require('../pageData');

function _getPageData(pageKey) {
  return pageData[pageKey];
}

module.exports = React.createClass({
  mixins: [Router.State],

  render: function() {
    var data = _getPageData(this.getParams().index);

    if (!data) {
      return (
        <p>
          404
        </p>
      );
    }

    return (
      <div className="page-container">
        <p>
          { data.text }
        </p>
        { data.buttons ? this._getButtons(data.buttons) : null }
      </div>
    );
  },

  _getButtons: function (buttons) {
    return buttons.map(function (button, idx) {
      return (
        <Link to={ button.link } params={ button.params } key={ idx } className="btn">
          { button.text }
        </Link>
      );
    });
  }
});