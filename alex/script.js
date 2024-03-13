// // This function should output the same as divvy, but with fewer lines of code.
// // (Lines of white space for readability are fine.)
// function cleaner_divvy(silly) {
//     if (silly % 3 === 0 && silly % 5 === 0) {
//         return "Neat";
//     } else if (silly % 10 === 0) {
//         return "sweet";
//     }

//     return "Oof";
// }

// function divvy(silly) {
//     if (silly % 3 === 0) {
//         if (silly % 5 === 0) {
//             return "Neat";
//         }
//     } else if (silly % 10 === 0) {
//         if (silly % 2 === 0) return "Sweet";
//         else return "Confusion";
//     }
//     return "Oof";
// }

// for (let i = 0; i < 6; i++) {
//     arr[i] = i++ + ++i;
// }

// function shuffle_arr(nums, n) {
//     let result = [];
// }

// let arr = [7, 4, 1, 2, 5, 3, 8, 6, 6, 123, 33, 45, 784, 28, 59, 12, 40];

// function sort(nums, order) {
//     let n = nums.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (order === "asc") {
//                 if (nums[i] > nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
//             }
//             if (order === "desc") {
//                 if (nums[i] < nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
//             }
//         }
//     }
//     return nums;
// }

// function factorial(num) {
//     if (num === 1) return num;
//     return num * factorial(num - 1);
// }

// console.log(factorial(5));

// function fib(n) {
//     if (n === 0 || n === 1) return n;
//     return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(10));

// function sumOfDig(num) {
//     if (num < 10) return num;
//     let cur = num % 10;
//     return cur + sumOfDig(Math.floor(num / 10));
// }

// console.log(
//     sumOfDig(
//         1784987838578128907509180293806527039674923750921384750923890928347509238475092384750923485703294857290348570923487509238475
//     )
// );

// function bubbleSort(nums) {
//     let n = nums.length;
//     let timesRun = 0;

//     for (let i = 0; i < n; i++) {
//         let swaps = false;
//         for (let j = 0; j < n - i; j++) {
//             k = j + 1;
//             if (nums[j] > nums[k]) {
//                 [nums[j], nums[k]] = [nums[k], nums[j]];
//                 swaps = true;
//             }
//             timesRun++;
//         }
//         console.log(swaps, timesRun);
//         if (!swaps) break;
//     }

//     return nums;
// }

// console.log(bubbleSort([1, 2, 3, 12, 4, 42, 4, 5, 54, 67, 34, 23, 64, 123]));

// function TreeNode(val, left, right) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

// function insertValue(node, val) {
//     if (!node) return new TreeNode(val);
//     if (val < node.val) node.left = new TreeNode(val);
//     else node.right = new TreeNode(val);
// }

// function insertGivenHead(head, val) {
//     if (!head) return new TreeNode(val);
//     if (val < head.val) head.left = insertGivenHead(head.left, val);
//     if (val > head.val) head.right = insertGivenHead(head.right, val);
//     return head;
// }

// let head = null;

// for (let i = 1; i < 30; i = i * 3) {
//     head = insertGivenHead(head, i);
// }

// for (let i = 2; i < 20; i = 2 * i) {
//     head = insertGivenHead(head, i);
// }

// for (let i = 5; i < 130; i = i * 5) {
//     head = insertGivenHead(head, i);
// }

// function preOrder(head) {
//     let result = [];
//     if (!head) return result;
//     result.push(head.val);
//     return result.concat(preOrder(head.left), preOrder(head.right));
// }
// console.log("Pre");
// console.log(preOrder(head));

// // preOrder(head);

// function inOrder(head) {
//     if (!head) return;
//     inOrder(head.left);
//     console.log(head.val);
//     inOrder(head.right);
// }
// // console.log("In");
// // inOrder(head);

// function postOrder(head) {
//     if (!head) return;
//     postOrder(head.left);
//     postOrder(head.right);
//     console.log(head.val);
// }

// // console.log("Post");
// // postOrder(head);

// function deleteNode(head, val) {}

// let a = [
//     [1, -3, 35],
//     [0, 2, 6],
// ];
// let b = [
//     [5, 10, 3],
//     [11, 3, 5],
// ];

// function addTwoMatrix(a, b) {
//     if (a.length !== b.length || a[0].length !== b[0].length)
//         return `Can not add ${a} and ${b}`;
//     let n = a.length;
//     let m = a[0].length;
//     let result = new Array(n).fill(0).map(() => new Array(m).fill(0));
//     console.log(result);
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             result[i][j] = a[i][j] + b[i][j];
//         }
//     }
//     return result;
// }
// console.log(a);
// console.log(addTwoMatrix(a, b));
// console.log(a);
// function printMatrix(mat) {
//     let n = mat.length;
//     let m = mat[0].length;

//     for (let i = 0; i < n; i++) {
//         console.log(`Printing out row number ${i}`);
//         for (let j = 0; j < m; j++) {
//             console.log(mat[i][j]);
//         }
//     }
// }

// printMatrix(a);

// let haystack = "abc";
// let needle = "c";
// console.log(haystack.length);

// var strStr = function (haystack, needle) {
//     if (!haystack.includes(needle)) return -1;
//     // if (haystack.length && needle.length === 1) return 0;

//     for (let i = 0; i < haystack.length; i++) {
//         console.log(i);
//         if (haystack[i] === needle[0]) {
//             let count = needle.length;

//             let j = 0;
//             while (haystack[i] === needle[j]) {
//                 i++;
//                 j++;
//                 count--;
//             }
//             if (count === 0) return i - needle.length;
//         }
//     }
// };

// console.log(strStr(haystack, needle));

// function Node(value, next) {
//     this.value = value;
//     this.next = next === undefined ? null : next;
// }

// let first_node = new Node(1);
// let third_node = new Node(3);
// let middle_node = new Node(2);

// //This is setting the first_node's next field to a reference to (the memory address of) the second_node.

// middle_node.next = third_node;
// first_node.next = middle_node;

// console.log(first_node);

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next === undefined ? null : next;
    }
}
// >0============-
// 1 -> 2 -> 3 -> 9 -> 5 -> null
// (Note: The below is the silly way of filling up a linked list. We should be smarter than this :) )
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(9);
head.next.next.next.next = new Node(5);

// 1 -> ?
function print_LL(head) {
    let current_position = head;
    while (current_position !== null) {
        console.log(current_position.value);
        current_position = current_position.next;
    }
}

function make_LL_from_array(arr) {
    let head = new Node(arr[0]);
    let newNode = head;
    for (let i = 1; i < arr.length; i++) {
        newNode.next = new Node(arr[i]);
        newNode = newNode.next;
    }
    return head;
}

let nums = [1, 3, 5, 7, 9, 23, -2];
let ret_head = make_LL_from_array(nums);
console.log(ret_head);
//print_LL(ret_head);
