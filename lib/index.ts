import { getAverage } from '@writetome51/get-sum-average-product';
import { getArrayFromProperty } from '@writetome51/get-array-from-property';


// Returns average value of propertyWithNumberValue found in objects.
// propertyWithNumberValue can contain dot-notation.

export function getAverageFromProperty(propertyWithNumberValue, objects): number {
	let numbers = getArrayFromProperty(propertyWithNumberValue, objects);
	return getAverage(numbers);
}
