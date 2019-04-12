/*
 * @author Dailyscat
 * @link https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {

    let left = 0;
    let right = 0;
    let aftSplit = S.split("");
    
    for (let i = 0; i < aftSplit.length; i++) {
        if ( aftSplit[i] === '(' ) {
            left++;
        } else {
            if ( left > 0 ) {
                left--;
            } else {
                right++;
            }
        }
    }
};

return left + right;
