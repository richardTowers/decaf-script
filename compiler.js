function ((decaf) {
	decaf.Compile = function (source) {
		source.replace(/(([^)]*))function( ?)/g, function (_, arguments, whitespace) { return 'function' + whitespace + '(' + arguments + ')'; });
	}
}(window.Decaf = window.Decaf || {}));