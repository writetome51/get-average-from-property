import { getAverage } from '@writetome51/get-sum-average-product';
import { errorIfNotString } from 'basic-data-handling/errorIfNotString';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';


// Returns average value of propertyWithNumberValue found in objects.

export function getAverageFromProperty(propertyWithNumberValue, objects): number {
	errorIfNotString(propertyWithNumberValue);
	errorIfNotArray(objects);
	return getAverage(
		objects.map((object) => {
			return object[propertyWithNumberValue];
		})
	);
}