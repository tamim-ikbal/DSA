<?php

function rotate(&$nums,$k) : Void {
    $length = count($nums);
    while ($k > $length) {
        $k = $k - $length;
    }

    $rotated = array_splice($nums,-$k);
    array_unshift($nums,...$rotated);
}

$nums = [1,2,3,4,5,6,7];

rotate($nums,12);

print_r($nums);