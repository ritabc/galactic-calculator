class Calculator {
  constructor() {
    const year1 = new Date(2017, 1, 1);
    const year2 = new Date(2018, 1, 1);
    this.secondsInEarthYear = (year2.getTime() / 1000) - (year1.getTime() / 1000)
    this.secondsInMercuryYear = this.secondsInEarthYear * 0.24;
    this.secondsInVenusYear = this.secondsInEarthYear * 0.62;
    this.secondsInMarsYear = this.secondsInEarthYear * 1.88;
    this.secondsInJupiterYear = this.secondsInEarthYear * 11.86;
  }

  secondsToMercuryYears(seconds) {
    return (seconds/this.secondsInMercuryYear);
  }

  secondsToVenusYears(seconds) {
    return (seconds/this.secondsInVenusYear);
  }

  secondsToMarsYears(seconds) {
    return (seconds/this.secondsInMarsYear);
  }

  secondsToJupiterYears(seconds) {
    return (seconds/this.secondsInJupiterYear);
  }

  aboveBelowAverageLE(dob, earthYearsExpectancy) {
    let averageLeInSeconds = earthYearsExpectancy * this.secondsInEarthYear;
    let ageInSeconds = dob.ageInSeconds();
    let secondsLeft = averageLeInSeconds - ageInSeconds;
    let outlivedExpectancy = false
    if (secondsLeft < 0) {
      outlivedExpectancy = true;
    }
    let mercuryYearsLeft = this.secondsToMercuryYears(secondsLeft);
    let venusYearsLeft = this.secondsToVenusYears(secondsLeft);
    let marsYearsLeft = this.secondsToMarsYears(secondsLeft);
    let jupiterYearsLeft = this.secondsToJupiterYears(secondsLeft);

    if (outlivedExpectancy) {
      return `Congratulations, you have lived past the the inputted average life expectancy of ${earthYearsExpectancy} Earth Years by ${Math.round(Math.abs(mercuryYearsLeft))} Mercury Years, ${Math.round(Math.abs(venusYearsLeft))} Venus Years, ${Math.round(Math.abs(marsYearsLeft))} Mars Years, or ${Math.round(Math.abs(jupiterYearsLeft))} Jupiter Years!`
    } else {
      return `With the inputted average life expectancy of ${earthYearsExpectancy} Earth Years, your remaining time is expected to be: ${Math.round(Math.abs(mercuryYearsLeft))} Mercury Years, ${Math.round(Math.abs(venusYearsLeft))} Venus Years, ${Math.round(Math.abs(marsYearsLeft))} Mars Years, or ${Math.round(Math.abs(jupiterYearsLeft))} Jupiter Years!`
    }
  }

}

export { Calculator }
