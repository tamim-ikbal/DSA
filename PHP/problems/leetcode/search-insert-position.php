<?php
function searchInsert($nums, $target) {
    $left = 0;
    $right = count($nums) - 1;

    //Edge Catch
    if(0 >= count($nums)){
      return 0;
    }
    if($nums[$left] > $target){
      return 0;
    }
    if($nums[$right] < $target){
      return $right + 1;
    }
    
    while($left <= $right){
      $mid = floor(($left + $right) / 2);
      if($nums[$mid] === $target){
          return $mid;
      }elseif($nums[$mid] < $target){
        $left = $mid + 1;
      }elseif($nums[$mid] > $target){
        $right = $mid - 1;
      }
    }

    if($nums[$mid] > $target){
      return $mid;
    }
    return $mid + 1;
}

$nums = [1,3,5,6];
echo searchInsert($nums,5)."\n";
echo searchInsert($nums,2)."\n";
echo searchInsert($nums,7)."\n";

$nums = [1,3];
echo searchInsert($nums,2)."\n";