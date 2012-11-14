LightScript
===========

An *extremely* lightwieght JavaScript transcomiler:

    function (source) {
        return source.replace(/(\([^)]*\)) ?->/g, function (_, p1) { return 'function ' + p1; });
    }