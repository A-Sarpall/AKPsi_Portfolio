public String theEnd(String str, boolean front) {
  if(front){
    return String.valueOf(str.charAt(0));
  }
  else{
  return String.valueOf(str.charAt(str.length() - 1));
  }
}
