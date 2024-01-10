function process(userInput: number[]) {
  const squareRoot = (num: number) => Math.sqrt(num);
  const square = (num: number) => num * num;

  const [x1, y1, x2, y2] = userInput;
  const result = distance(x1, y1, x2, y2);

  console.log(`The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${result}`);
  
  function distance(x1: number, y1: number, x2: number, y2: number): number {
    return squareRoot(square(x2 - x1) + square(y2 - y1));
  }
}


process([10, 10, 2, 3]);