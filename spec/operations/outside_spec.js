/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/outside');

describe("/outside", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('Outside'));

  it("should have the correct url", () => expect(operation.url).toEqual('/outside/:name/:from'));

  it("should have the correct fields", () => expect(operation.fields).toEqual([
    { name: 'Name', field: 'name'},
    { name: 'From', field: 'from'}
  ]));

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app,null);

      expect(app.get).toHaveBeenCalled();
      return expect(app.get.argsForCall[0][0]).toEqual('/outside/:name/:from');
    });

    return it('should call output with correct params', function() {
      let func = null;
      const app =
        {get(url, fn) { return func = fn; }};
      const output = jasmine.createSpy();
      operation.register(app, output);

      const req = { 
        params: {
          name: "TESTNAME",
          from: "TESTFROM"
        }
      };

      const message = `${req.params.name}, why don't you go outside and play hide-and-go-fuck-yourself?`;
      const subtitle = `- ${req.params.from}`;

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
    });
  });
});