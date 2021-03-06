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
    const minTemp = this.get_min();
    const maxTemp = this.get_max();
    const meanTemp = this.get_mean();
    const modeTemp = this.get_mode();

    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `Min: ${minTemp}<br /> Max: ${maxTemp}<br /> Mean: ${meanTemp}<br /> Mode: ${modeTemp}`;
  };

  this.get_max = function() {
    return max;
  };

  this.get_min = function() {
    return min;
  };

  this.get_mean = function() {
    return count === 0 ? null : sum / count;
  };

  this.get_mode = function() {
    return count === 0 ? null : maxTempCount;
  };
}

temp = new TempTracker();
temp.insert(26);
temp.insert(48);
temp.insert(12);
temp.insert(32);
temp.insert(48);
