import { Birthday } from './../src/birthday.js';

describe('Birthday', function() {
  it('should take a year, month, and day integers and calculate the number of seconds since then', function() {
    let dob = new Birthday(1974, 4, 15);
    console.log(typeof(dob))
    expect(dob.ageInSeconds()).toEqual(dob.getTime() / 1000)
  })
})
