// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/itsp_operations/itsp');

describe("/itsp", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('No He Is Not'));

  it("should have the correct url", () => expect(operation.url).toEqual('/itsp/:name/:from'));

  it("should have the correct fields", () => expect(operation.fields).toEqual([ { name : 'Name', field : 'name' }, { name : 'From', field : 'from' }]));

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app, null);

      expect(app.get).toHaveBeenCalledWith('/itsp/:name/:from', jasmine.any(Function));
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
      var nowish = new Date();
      var innaug = new Date("01/20/2021");
      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(
        req,
        'RES',
        `No, TESTNAME, Donald Trump is no longer the US President.`,
        '- TESTFROM'
      );
    });
  });
});
