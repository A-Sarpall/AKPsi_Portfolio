public int blackjack(int a, int b) {
  if (a <= 21 && b <= 21){
    return Math.max(a, b);
  }
  else if (a > 21 && b <= 21){
    return b;
  }
  else if (b > 21 && a <=21){
    return a;
  }
  return 0;
}
