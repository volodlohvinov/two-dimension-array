'use strict'

function fillArray () {
    const mainArrayLength = parseInt(prompt('Enter length for main array'))
    const subArrayLength = parseInt(prompt('Enter length for sub array'))

    if (isNaN(mainArrayLength) || isNaN(subArrayLength) || mainArrayLength <= 0 || subArrayLength <= 0 || subArrayLength > mainArrayLength) {
        console.log('Error')
        return
    }

    const array = [];

    for (let i = 0; i < mainArrayLength; i++) {
        const subArray = []

        for (let j = 0; j < subArrayLength; j++) {
            const value = prompt(`Enter value for [${i}][${j}]` )
            subArray.push (value)
        }
        array.push (subArray)
    }
    console.log ('two-dimensional array', array)
}
fillArray ()