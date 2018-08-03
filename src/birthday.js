class Birthday extends Date {
  constructor(years, months, days) {
    super(years, months, days);
    this.birthday = new Date(years, months, days)
  }

  ageInSeconds() {
    let now = new Date();
    let dif = now.getTime() - this.birthday.getTime();
    let seconds = dif / 1000;
    return seconds;
  }


}

export { Birthday }
