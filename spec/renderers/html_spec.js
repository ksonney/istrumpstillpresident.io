// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const renderer = require(__dirname+'/../../lib/renderers/html');

describe("HTML Renderer", function() {
  it("should have the correct name", () => expect(renderer.name).toEqual('HTML'));

  it("should have the correct mime type", () => expect(renderer.mime).toEqual('text/html'));

  return describe('render', function() {

    it('should call res.set with Content-Type header', function() {
      const req = {
        message: 'ONE',
        subtitle: 'TWO'
      };
      const res = {
        set: jasmine.createSpy(),
        send: jasmine.createSpy()
      };
      renderer.render(req,res);

      return expect(res.set).toHaveBeenCalledWith('Content-Type', 'text/html');
    });

    it('should call res.send with correct params', function() {
      const req = {
        message: 'ONE',
        subtitle: 'TWO'
      };
      const res = {
        set: jasmine.createSpy(),
        send: jasmine.createSpy()
      };
      renderer.render(req,res);

      return expect(res.send).toHaveBeenCalledWith('<!DOCTYPE html> <html> <head> <title>ITSPAAS - ONE TWO</title> <meta charset="utf-8"> <meta property="og:title" content="ONE TWO"> <meta property="og:description" content="ONE TWO"> <meta name="twitter:card" content="summary" /> <meta name="twitter:site" content="@foaas" /> <meta name="twitter:title" content="FOAAS: Fuck Off As A Service" /> <meta name="twitter:description" content="ONE TWO" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet"> <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143325008-1"></script> <script>   window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag(\'js\', new Date()); gtag(\'config\', \'UA-143325008-1\'); </script> </head> <body style="margin-top:40px;"> <div class="container"> <div id="view-10"> <div class="hero-unit"> <h1>ONE</h1> <p><em>TWO</em></p> </div> </div> <p style="text-align: center"><a href="http://foaas.com">foaas.com</a></p> </div> </body> </html>');
    });
  });
});
