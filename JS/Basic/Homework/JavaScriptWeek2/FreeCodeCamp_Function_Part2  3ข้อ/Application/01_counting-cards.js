var count = 0;

function cc(card) {
  // Only change code below this line
  if (card < 7) {
    count += 1;
  }else if (card < 10) {

  }else {
    count -= 1;
  }

  if (count > 0) {
    return `${count} Bet`;
  }else {
    return `${count} Hold`;
  }

  return `${count} ${str}`;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');