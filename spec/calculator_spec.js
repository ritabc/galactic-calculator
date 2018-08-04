import { Calculator } from './../src/calculator.js';
import { Birthday } from './../src/birthday.js';


describe('Calculator', function() {
var reusableDob;

  beforeEach(function() {
    reusableDob = new Birthday(1983, 5, 16)
  });

  it('will return the age of a human in Mercury years', function() {
    let calculator = new Calculator()
    let mercuryYears = calculator.getMercuryYears(reusableDob.ageInSeconds());
    expect(Math.round(mercuryYears)).toEqual(Math.round(reusableDob.ageInSeconds() / (31557600 * 0.24)));
  })

  it('will return the age of a human in Venus years', function() {
    let calculator = new Calculator()
    let venusYears = calculator.getVenusYears(reusableDob.ageInSeconds());
    expect(Math.round(venusYears)).toEqual(Math.round(reusableDob.ageInSeconds() / (31557600 * 0.62)));
  })

  it('will return the age of a human in Mars years', function() {
    let calculator = new Calculator()
    let marsYears = calculator.getMarsYears(reusableDob.ageInSeconds());
    expect(Math.round(marsYears)).toEqual(Math.round(reusableDob.ageInSeconds() / (31557600 * 1.88)));
  })
  it('will return the age of a human in Jupiter years', function() {
    let calculator = new Calculator()
    let jupiterYears = calculator.getJupiterYears(reusableDob.ageInSeconds());
    expect(Math.round(jupiterYears)).toEqual(Math.round(reusableDob.ageInSeconds() / (31557600 * 11.86)));
  })
})
