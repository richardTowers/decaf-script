(function (decaf) {
  	'use strict';
	decaf.Compile = function (source) {
		// We want to replace '(...) ->' with 'function ()'
		var regex = /\(([^\(\)\\]*?)\)(\s*)->(\s*)/g;
		return source.replace(
			regex,
			function (_, args, whitespaceBefore, whitespaceAfter) { 
				return 'function' + whitespaceAfter + '(' + args + ')';
			});
	};
}(window.Decaf = window.Decaf || {}));