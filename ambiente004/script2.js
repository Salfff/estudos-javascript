const today = new Date();

const endYear = new Date(0, 11, 31, 23, 59, 59, 999)

endYear.setFullYear(today.getFullYear())

const msPerDay = 24 * 60 * 60 * 1000;

let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;

daysLeft = Math.round(daysLeft)

console.log(daysLeft)
