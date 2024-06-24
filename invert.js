export default function invert(array) {
    const resultArray = []
    for(let i = 0; i < array.length; i++) {
        //uncomment this if you are trying out debugging
        //and want your tests to break
        // if (array[i] === -4) {
        //     resultArray.push(42)
        // }
        resultArray.push(-1 * array[i])
    }

    return resultArray
}