class Birthday {
  constructor(years, months, days) {
    this.birthday = new Date(years, months, days)
  }

  secondsSinceEpoch() {
    return this.birthday.getTime();
  }

  ageInSeconds() {
    let now = new Date();
    let dif = now.getTime() - this.birthday.getTime();
    let seconds = dif / 1000;
    return seconds;
  }


}

export { Birthday }
