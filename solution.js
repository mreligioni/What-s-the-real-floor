function getRealFloor(n) {
    if (n<1)
      return n*1
    if (n>0 && n<14)
      return n-1
    else
      return n-2
  }