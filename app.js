function process(userInput) {
    var squareRoot = function (num) { return Math.sqrt(num); };
    var square = function (num) { return num * num; };
    var x1 = userInput[0], y1 = userInput[1], x2 = userInput[2], y2 = userInput[3];
    var result = distance(x1, y1, x2, y2);
    console.log("The distance between (".concat(x1, ", ").concat(y1, ") and (").concat(x2, ", ").concat(y2, ") is ").concat(result));
    function distance(x1, y1, x2, y2) {
        return squareRoot(square(x2 - x1) + square(y2 - y1));
    }
}
process([10, 10, 2, 3]);
