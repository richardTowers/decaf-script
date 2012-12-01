exports.compile = function (source) {
	return source.replace(
		/\(([^\(\)\\]*?)\)(\s*)->(\s*)/g,
		function (_, args, whitespaceBefore, whitespaceAfter) { 
			return 'function' + whitespaceBefore + '(' + args + ')' + whitespaceAfter;
		});
}