<?php
    function isPerfectSquare($num) {
      if($num === 1){
          return true;
      }

      $left = 0;
      $right = $num - 1;

      while ($left <= $right) {
      $mid = (int) floor(($left + $right) / 2);
      $square = $mid * $mid;
      if($num === $square){
          return true;
      }elseif ($num < $square) {
          $right = $mid - 1;
      }elseif($num > $square){
          $left = $mid + 1;
      }
      }

      return false;
  }

for ($index = 1; $index <= 16; $index++) {
  echo "{$index} is perfect square: ".isPerfectSquare($index)." \n";
}