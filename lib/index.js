"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_sum_average_product_1 = require("@writetome51/get-sum-average-product");
var errorIfNotString_1 = require("basic-data-handling/errorIfNotString");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
// Returns average value of propertyWithNumberValue found in objects.
function getAverageFromProperty(propertyWithNumberValue, objects) {
    errorIfNotString_1.errorIfNotString(propertyWithNumberValue);
    errorIfNotArray_1.errorIfNotArray(objects);
    return get_sum_average_product_1.getAverage(objects.map(function (object) {
        return object[propertyWithNumberValue];
    }));
}
exports.getAverageFromProperty = getAverageFromProperty;
