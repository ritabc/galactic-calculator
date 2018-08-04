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
    debugger;
    expect(Math.round(mercuryYears)).toEqual(Math.round(reusableDob.ageInSeconds() / (31557600 * 0.24)));
  })
})
