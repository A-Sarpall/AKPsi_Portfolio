public int[] reverse3(int[] nums) {
  int first = nums[0];
  nums[0] = nums[2];
  nums[2] = first;
  
  return nums;
}
