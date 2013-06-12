/**
 * Component dependencies
 */

var query = require('element-query');

/**
 * Expose plugin
 */

module.exports = function (view) {
  
  view.element.use(query);

  /**
   * select
   *
   * @param {String} event event
   * @param {String} method method
   * @return {view} this for chaining
   * @api public
   */
  
  view.prototype.select = function (name, selector) {
    this.elements = this.elements || {};
    this.elements[name] = this.el.query(selector);
    return this;
  };

  return view;
}
