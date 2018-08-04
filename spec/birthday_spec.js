import { Birthday } from './../src/birthday.js';

describe('Birthday', function() {
  it('should take a year, month, and day integers and calculate the number of seconds since then', function() {
    let dob = new Birthday(1974, 4, 15);
    let now = new Date();
    // expect time btw now and dob to eq ageInSeconds
    expect(dob.ageInSeconds()).toEqual((now.getTime() - dob.secondsSinceEpoch())/ 1000);
  })
})
