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
   * @param {Object} selectors
   *   @key {String} name 
   *   @value {String} selector 
   * 
   * @return {view} this for chaining
   * @api public
   */
  
  view.prototype.select = function (selectors) {
    var res = {};
    var name;
    var selector;
    
    for (name in selectors) {
      selector = selectors[name];
      res[name] = this.el.query(selector);
    }

    return res;
  };

  return view;
}
