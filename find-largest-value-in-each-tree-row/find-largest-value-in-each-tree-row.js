/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];
    let queue = [root];
    let result = [];
    while (queue.length) {
        let numberOfNodes = queue.length;
        let currentLevel =[];
        for (let i = 0; i < numberOfNodes; i++){
            let current = queue.shift();
            currentLevel.push(current.val);
            if (current.left) { 
                queue.push(current.left)
            }
            if (current.right) { 
                queue.push(current.right)
            }
        }
        result.push(Math.max(...currentLevel))
    }
    return result;
};