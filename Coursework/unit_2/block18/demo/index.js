function add(nums) {
  if (!nums || !(nums.length > 0)) {
    return 0;
  }

  return nums.reduce((total, current) => total + current);
}

module.exports = {
  add,
};
