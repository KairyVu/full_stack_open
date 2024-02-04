interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
