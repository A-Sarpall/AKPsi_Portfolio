public boolean lastDigit(int a, int b, int c) {
  a = a % 10;
  b = b % 10;
  c = c % 10;
  
  return(a == b || b == c || a == c);
}
