export function findMin (array, field) {
    return array.reduce((min, next) => min < next[field] ? min : next[field], array[0][field]);
}

export function findMax (array, field) {
    return Math.max(...array.map(item => item[field]));
}
