import { Calculator } from './../src/calculator.js';
import { Birthday } from './../src/birthday.js';


describe('Calculator', function() {
var reusableDob;
var calculator;

  beforeEach(function() {
    reusableDob = new Birthday(1983, 5, 16)
    calculator = new Calculator()
  });

  it('will return the age of a human in Mercury years', function() {
    let mercuryYears = calculator.secondsToMercuryYears(reusableDob.ageInSeconds());
    expect(Math.round(mercuryYears)).toEqual(Math.round(reusableDob.ageInSeconds() / (31557600 * 0.24)));
  })

  it('will return the age of a human in Venus years', function() {
    let venusYears = calculator.secondsToVenusYears(reusableDob.ageInSeconds());
    expect(Math.round(venusYears)).toEqual(Math.round(reusableDob.ageInSeconds() / (31557600 * 0.62)));
  })

  it('will return the age of a human in Mars years', function() {
    let marsYears = calculator.secondsToMarsYears(reusableDob.ageInSeconds());
    expect(Math.round(marsYears)).toEqual(Math.round(reusableDob.ageInSeconds() / (31557600 * 1.88)));
  })
  it('will return the age of a human in Jupiter years', function() {
    let jupiterYears = calculator.secondsToJupiterYears(reusableDob.ageInSeconds());
    expect(Math.round(jupiterYears)).toEqual(Math.round(reusableDob.ageInSeconds() / (31557600 * 11.86)));
  })

  it('will take the average life expectancy from the user in Earth years and more recent dob and return their remaining expected years, or the number of years past that', function() {
    expect(calculator.aboveBelowAverageLE(reusableDob, 75)).toEqual(("With the inputted average life expectancy of 75 Earth Years, your remaining time is expected to be: 166 Mercury Years, 64 Venus Years, 21 Mars Years, or 3 Jupiter Years!"))
  })

  it('will take the average life expectancy from the user in Earth years and an older dob and return their remaining expected years, or the number of years past that', function() {
    let oldPersonDob = new Birthday(1930, 6, 1)
    expect(calculator.aboveBelowAverageLE(oldPersonDob, 75)).toEqual(("Congratulations, you have lived past the the inputted average life expectancy of 75 Earth Years by 55 Mercury Years, 21 Venus Years, 7 Mars Years, or 1 Jupiter Years!"))
  })

})
