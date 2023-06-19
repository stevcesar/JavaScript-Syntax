export const random = arr =>{
    const length = arr.length;
    const word = Math.floor(Math.random()* length);
    return arr[word];
}