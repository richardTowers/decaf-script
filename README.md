DecafScript
===========

An *extremely* lightweight language that compiles to JavaScript.

If [CoffeeScript](https://github.com/jashkenas/coffee-script) is JavaScript without the bad parts, DecafScript is CoffeeScript without *all* of the parts.

The only feature that seperates DecafScript from straight JavaScript is syntactic sugar for function declarations:

```javascript
(arg1, arg2, arg3) -> { return arg1 + arg2 + arg2; }
// Compiles to:
function (arg1, arg2, arg3) { return arg1 + arg2 + arg2; }
```

As a result of it's extreme simplicity, DecafScript is only 126 bytes, minified and gzipped.

### Known Issues

The compiler is extremely stupid, so any code that looks like `(...) ->` is replaced, even if it's part of a comment, strin literal or regex.

### Is this a joke?

Yes.