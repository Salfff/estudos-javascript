const ipoDate = new Date()
const endYear = new Date(2999, 11, 31, 23, 59, 59, 999)

console.log(ipoDate.getTime())

let msPerDay = 24 * 60 * 60 * 1000

let daysLeft = (endYear.getTime() - ipoDate.getTime()) / msPerDay

daysLeft = Math.round(daysLeft)



console.log(daysLeft)