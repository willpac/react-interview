/**
 * Given some array:
 *    [
 *      {brand: 'Nike', name: 'AirMax'},
 *      {brand: 'Nike', name: 'Cortez'},
 *      {brand: 'Adidas', name: 'Ultra Boost'}
 *    ]
 *
 * This function will return a new array that groups by a specific
 * key and returns a count for each key:
 *
 *    [
 *      {brand: 'Nike', count: 2},
 *      {brand: 'Adidas', count: 1}
 *    ]
 * @param arr An array of objects
 * @param key A string of the object property
 */
export function countByKey(arr, key) {

    var final = arr.map((item) => {
        var newItem = { [key]: item[key], count: 1 };
        return newItem;
    }, {}).reduce((prev, item) => {
        if (prev[item[key]]) {
            prev[item[key]]++;
        } else {
            prev[item[key]] = 1;
        };
        return prev;
    }, {})

    var result = [];
    Object.keys(final).map((item) => {
        result.push({ [key]: item, count: final[item] });
    })

    return result;

}
