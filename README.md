LightScript
===========

An *extremely* lightwieght JavaScript transcompiler:

    function (source) {
        return source.replace(/(\([^)]*\)) ?->/g, function (_, p1) { return 'function ' + p1; });
    }

Compiles:

    (arg1, arg2, arg3) -> { return arg1 + arg2 + arg2; }

Into:

    function (arg1, arg2, arg3) { return arg1 + arg2 + arg2; }

The LightScript compiler written in LightScript:

    (source) -> {
         return source.replace(/(\([^)]*\)) ?->/g, (_, p1) -> { return 'function ' + p1; });
     }