// // functions
// //void
// function sayHello(){
//     console.log('Hello world!')
// }

// function calc(a = 0, b =  0) {
//     return a + b
// }

// console.log(calc(20, 15));

// sayHello()

// // function expression
// const firstFunction = function () {
//     console.log('This is function expression!');
// }

// const secondFunction = name => {
//     console.log('This is function expression with arrow: ' + name);
// }

// secondFunction('Ikhlas')
// firstFunction()

// function getMaskCount(studentCount, maskCount) {
//     const result = maskCount / studentCount
//     return Math.floor(result)
// }

// const getRemainingMasks = (studentCount, maskCount) => {
//     const result = maskCount / studentCount
//     return result
// }

function duplicateCount(string){
    const stringArr = string.split("")
    const checkedAndDuplicatedElements = []
    let duplicatedElementsCount = 0

    for(let i=0; i< stringArr.length; i++){
        const duplicateArr= stringArr.filter(item => item === stringArr[i])
        if (duplicateArr.lenght > 1 && !checkedAndDuplicatedElements.includes(stringArr[i])) {
            checkedAndDuplicatedElements.push(stringArr[i])
            duplicatedElementsCount = duplicatedElementsCount + 1
        }
    }

    return duplicatedElementsCount
}
console.log(duplicateCount("Ikhlas Aralbaev"))