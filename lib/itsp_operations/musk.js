module.exports = {
  name: "Musk really is",
  url: '/musk/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register(app, output) {
    return app.get('/musk/:name/:from', function (req, res) {
      const message = `Yes, ${req.params.name}, Elon Musk is the US President and Donald Trump is his puppet.`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};
