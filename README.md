LightScript
===========

An *extremely* lightweight JavaScript transcompiler:

    var LightScript = function (source) {
        return source.replace(/(\([^)]*\)) ?->/g, function (_, argumentsString) { return 'function ' + argumentsString; });
    }

Compiles:

    (arg1, arg2, arg3) -> { return arg1 + arg2 + arg2; }

Into:

    function (arg1, arg2, arg3) { return arg1 + arg2 + arg2; }

The LightScript compiler written in LightScript:

    var LightScript = (source) -> {
         return source.replace(/(\([^)]*\)) ?->/g, (_, argumentsString) -> { return 'function ' + argumentsString; });
     }