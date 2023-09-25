// code your solution here
function superbowlWin(array) {
  const year = array.find(obj => obj.result === "W")
  return year === undefined ? undefined : year.year;
}