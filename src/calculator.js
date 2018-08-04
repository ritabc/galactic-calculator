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

  getMercuryYears(secondsOld) {
    return (secondsOld/this.secondsInMercuryYear);
  }

  getVenusYears(secondsOld) {
    return (secondsOld/this.secondsInVenusYear);
  }

  getMarsYears(secondsOld) {
    return (secondsOld/this.secondsInMarsYear);
  }

  getJupiterYears(secondsOld) {
    return (secondsOld/this.secondsInJupiterYear);
  }

}

export { Calculator }
