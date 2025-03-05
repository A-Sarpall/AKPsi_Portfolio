public String middleTwo(String str) {
  int midpoint = str.length() / 2;
  return str.substring(midpoint - 1, midpoint + 1);
}
