/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/itsp_operations/me');

describe("/me", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('Fuck Me'));

  it("should have the correct url", () => expect(operation.url).toEqual('/me/:from'));

  it("should have the correct fields", () => expect(operation.fields).toEqual([{name: 'From', field: 'from'}]));

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app, null);

      expect(app.get).toHaveBeenCalled();
      return expect(app.get.argsForCall[0][0]).toEqual('/me/:from');
    });

    return it('should call output with correct params', function() {
      let func = null;
      const app =
        {get(url, fn) { return func = fn; }};
      const output = jasmine.createSpy();
      operation.register(app, output);

      const req = {
        params: {
          from: "TESTFROM"
        }
      };

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(
        req,
        'RES',
        'Fuck me, yes Donald Trump is still the US President',
        '- TESTFROM'
      );
    });
  });
});
