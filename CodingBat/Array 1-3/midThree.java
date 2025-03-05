public int[] midThree(int[] nums) {
  int mid = nums.length / 2;
  int[] result = {nums[mid-1], nums[mid], nums[mid+1]};
  return result;
}
