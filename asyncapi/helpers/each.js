const nunjucks = require('nunjucks')

const OPEN_TAG = 'each'
const CLOSE_TAG = 'endeach'

export function Each() {
  this.tags = [OPEN_TAG];

  this.parse = function(parser, nodes, lexer) {
      // get the tag token
      var tok = parser.nextToken();

      // parse the args and move after the block end. passing true
      // as the second arg is required if there are no parentheses
      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);

      // parse the body and possibly the error block, which is optional
      var body = parser.parseUntilBlocks('error', CLOSE_TAG)
      var errorBody = null;

      if(parser.skipSymbol('error')) {
          parser.skip(lexer.TOKEN_BLOCK_END);
          errorBody = parser.parseUntilBlocks('endremote');
      }

      parser.advanceAfterBlockEnd();

      // See above for notes about CallExtension
      return new nodes.CallExtension(this, 'run', args, [body, errorBody]);
  };

  this.run = function(collection, body, errorBody) {
    if (Array.isArray(collection)) {
      return collection.map(body)
    }
  };
}