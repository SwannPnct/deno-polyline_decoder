// This is adapted from the implementation in Project-OSRM and Valhalla
// https://github.com/valhalla/valhalla-docs/blob/master/decoding.md

export const decode = (
	encodedPolyline: string,
	outputFormat = (lat: number, lng: number): any => [lat, lng],
): any[] => {
  const PRECISION = 5

	let index = 0,
		lat = 0,
		lng = 0,
		shift = 0,
		result = 0,
		byte = null,
		latitude_change,
		longitude_change;

	const coordinates = [],
		factor = Math.pow(10, PRECISION);

	while (index < encodedPolyline.length) {
		byte = null;
		shift = 0;
		result = 0;

		do {
			byte = encodedPolyline.charCodeAt(index++) - 63;
			result |= (byte & 0x1f) << shift;
			shift += 5;
		} while (byte >= 0x20);

		latitude_change = (result & 1) ? ~(result >> 1) : (result >> 1);

		shift = result = 0;

		do {
			byte = encodedPolyline.charCodeAt(index++) - 63;
			result |= (byte & 0x1f) << shift;
			shift += 5;
		} while (byte >= 0x20);

		longitude_change = (result & 1) ? ~(result >> 1) : (result >> 1);

		lat += latitude_change;
		lng += longitude_change;

		coordinates.push(outputFormat(lat / factor, lng / factor));
	}

	return coordinates;
};
