public int[] frontPiece(int[] nums) {
  if (nums.length < 2){
    return nums;
  }
  else{
    int[] result = {nums[0], nums[1]};
    return result;
  }
}
