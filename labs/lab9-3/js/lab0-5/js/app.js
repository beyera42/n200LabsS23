let TacBoard = [
    [0, 0, 0],
    [1, 2, 3],
    [0, 0, 0]
]

let res = TacBoard[1].filter(function (entry) {
    return entry == 2;
})


console.log(res)