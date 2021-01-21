// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Executive Order 13769",
  url: '/eo13769',

  register(app, output) {
    return app.get('/eo13769', function(req, res) {
      const message = "The Muslim Ban has been completely revoked by President Biden";
      const subtitle = "Fuck you, racist-ass Donald Trump";
      return output(req, res, message, subtitle);
    });
  }
};
