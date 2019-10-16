/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/donut');

describe("/donut", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('Donut'));

  it("should have the correct url", () => expect(operation.url).toEqual('/donut/:name/:from'));

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
      return expect(app.get.argsForCall[0][0]).toEqual('/donut/:name/:from');
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

      const message = `${req.params.name}, go and take a flying fuck at a rolling donut.`;
      const subtitle = `- ${req.params.from}`;

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
    });
  });
});