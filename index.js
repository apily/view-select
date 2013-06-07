/**
 * Component dependencies
 */

var delegate = require('element-query');

/**
 * Expose plugin
 */

module.exports = function (view) {
  
  var element = view.element;
  
  element
    .use(query);

  /**
   * select
   *
   * @param {String} event event
   * @param {String} method method
   * @return {view} this for chaining
   * @api public
   */
  
  view.prototype.select = function (name, selector) {
    this.elements[name] = this.el.query(selector);
    return this;
  };

  return view;
}
