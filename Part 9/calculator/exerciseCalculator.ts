interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface CalculateExercises {
  target: number;
  array: number[];
}

const parseArgumentsExercises = (args: string[]): CalculateExercises => {
  if (args.length < 4) throw new Error("Not enough arguments.");

  const inputArr = args.slice(2);
  const inputArrHandle = inputArr.map((num) => {
    if (isNaN(Number(num)))
      throw new Error("Provided values were not numbers!");
    return Number(num);
  });

  return {
    target: inputArrHandle[0],
    array: inputArrHandle.slice(1),
  };
};

const calculateExercises = (arr: number[], target: number): Result => {
  const periodLength = arr.length;
  const trainingDays = arr.filter((time) => time > 0).length;
  const average = arr.reduce((acc, cur) => acc + cur, 0) / periodLength;
  let rating: number, ratingDescription: string;
  switch (true) {
    case average < target:
      rating = 1;
      ratingDescription = "you need to put more effort";
      break;
    case average === target:
      rating = 2;
      ratingDescription = "not too bad but could be better";
      break;
    default:
      rating = 3;
      ratingDescription = "Well done!";
  }
  return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: average >= target,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average,
  };
};

try {
  const { target, array } = parseArgumentsExercises(process.argv);
  console.log(calculateExercises(array, target));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
