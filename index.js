function TempTracker() {
  var tempCounts = {},
    maxTempCount = 0,
    max = null,
    min = null,
    sum = null,
    count = 0;

  this.insert = function(temperature) {
    if (count === 0) {
      maxTempCount = sum = max = min = temperature;
      tempCounts[temperature] = 1;
      count = 1;
    } else {
      min = Math.min(min, temperature);
      max = Math.max(max, temperature);
      sum += temperature;
      count++;
      tempCounts[temperature] = (tempCounts[temperature] || 0) + 1;
      if (tempCounts[temperature] > tempCounts[maxTempCount])
        maxTempCount = temperature;
    }
  };

  this.getMax = function() {
    return max;
  };

  this.getMin = function() {
    return min;
  };

  this.getMean = function() {
    return count === 0 ? null : sum / count;
  };

  this.getMode = function() {
    return count === 0 ? null : maxTempCount;
  };
}

temp = new TempTracker();
temp.insert(26);
temp.insert(48);
temp.insert(12);
temp.insert(32);
temp.insert(48);
console.log(`Min: ${temp.getMin()}, Max: ${temp.getMax()}, Mean: ${temp.getMean()}, Mode: ${temp.getMode()}`);
