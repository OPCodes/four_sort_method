var Sort = function (){};

Sort.prototype = {
    constructor: Sort,
    // 简单排序方式
    // 快速排序，时间复杂度为nlogn，为已经的最快的排序方式
    quickSort: function (arr) {
        if( arr.length <= 1 ) return arr;
        var pivotIndex = Math.floor(arr.length/2);
        var pivot = arr.splice(pivotIndex,1)[0];
        var left = [];
        var right = [];
        for( var i = 0; i < arr.length; i++ ){
            if( arr[i] < pivot ){
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat([pivot],quickSort(right));
    } 

    // 冒泡排序，时间复杂度为n的平方
    bubbleSort: function (arr) {
        for( var i = 0; i < arr.length; i++ ){
            for( var j = 0; j < arr.length - i; j++ ){
                var temp = null;
                if( arr[j] > arr[j+1] ){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    }

    // 直接插入排序，时间复杂度也为n的平方，性能略好于冒泡排序
    insertSort: function (arr) {
        var temp;       // 定义一个变量
        for( var i = 1; i < arr.length; i++ ){  // 从数组第一项开始循环
            temp = arr[i];                      // 变量存储数组当前这一项的值 
            for( var j = i; j > 0 && temp < arr[j-1]; j-- ){  // 循环和数组前边的项作比较
                arr[j] = arr[j-1];              // 每一次条件成立，前一项的值覆盖后一项
            }
            arr[j] = temp;                      // 直到条件不成立，将变量的值补到前一项大于它的位置上
        }
        return arr;
    }

    // 选择排序，时间复杂度也为n的平方，性能同样略好于冒泡排序
    selectSort: function (arr) {
        var min,temp;         // 定义两个变量，用来存储最小项的索引以及转换容器
        for( var i = 0; i < arr.length; i++ ){   // 循环数组的每一项
            min = i;                             // 开始循环后，min等于当前i值
            for( var j = i+1; j < arr.length; j++ ){ // 循环数组i之后的项
                if( arr[min] > arr[j] ){         // 当当前数组这一项（第i项）大于数组某一项
                    min = j;                     // 记录下后者的索引
                }
            } // 这个for循环结束之后min中存的是，数组中这小项的索引
            
            // 此时判断，如果min = i，则数组的第i项为此次循环的最小值2
            // 如果min != i，就将min中存的最小值，即arr[min]和第i项交换位置
            if( min != i ){
                temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
        return arr;
    }
}

