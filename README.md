DecafScript
===========

An *extremely* lightweight JavaScript transcompiler.

Compiles:

    (arg1, arg2, arg3) -> { return arg1 + arg2 + arg2; }

Into:

    function (arg1, arg2, arg3) { return arg1 + arg2 + arg2; }