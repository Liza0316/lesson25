function moveOver(array, direction) {
    if (direction === "end") {
        const firstElement = array.shift(); 
        array.push(firstElement); 
    } else if (direction === "start") {
        const lastElement = array.pop(); 
        array.unshift(lastElement); 
    }
    return array;
}
console.log(moveOver([6,3,8,9], "end"));
console.log(moveOver([5,3,7,8], "start"));