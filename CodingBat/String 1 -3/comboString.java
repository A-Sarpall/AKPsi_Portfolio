public String comboString(String a, String b) {
  String longest = a;
  String shortest = b;
  if (b.length() > a.length()){
    longest = b;
    shortest = a;
  }
  return (shortest + longest + shortest);
}
