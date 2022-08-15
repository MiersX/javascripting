/*
Function that takes in two arguments
  - The first is an array of strings, where each string is a small air sample that evaluates to clean or dirty
  - the second is a number representing the highest acceptable amount of dirty samples
  - A threshold of 0.4 means there must be < 40% of total samples classified as dirty for the air to evaluate to clean
  - Our function must return polluted if there are too many dirty samples, and clean if it's < threshold
*/





const checkAir = function (samples, threshold) {
  let dirtySampleCount = 0;
  let totalSampleCount = 0;
  for (let i = 0; i < samples.length; i++) {
    totalSampleCount++
    if (samples[i] === "dirty") {
      dirtySampleCount++;
    }
  }
  let dirtyRatio = (dirtySampleCount / totalSampleCount)
  if (dirtyRatio >= threshold) {
    return "Polluted";
  }
  if (dirtyRatio < threshold) {
    return "Clean";
  }
};