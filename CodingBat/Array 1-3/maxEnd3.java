public int[] maxEnd3(int[] nums) {
  int first = nums[0];
  int last = nums[2];
  
  if (first > last){
    nums[1] = first;
    nums[2] = first;
  }
  else{
    nums[0] = last;
    nums[1] = last;
  }
  return nums;
}
