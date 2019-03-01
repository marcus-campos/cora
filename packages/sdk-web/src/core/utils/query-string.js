export const getValuesQueryString = () => (
  new URLSearchParams(window.location.search)
)

export const getQueryParams = () => {
	function identity(e) { return e; }
	function toKeyValue(params, param) {
		let keyValue = param.split('=');
		let key = keyValue[0], value = keyValue[1];

		params[key] = params[key] ? [value].concat(params[key]) : value;
		return params;
	}
	return decodeURIComponent(window.location.href.split('?')[1]).
		split('&').
		filter(identity).
		reduce(toKeyValue, {});
}