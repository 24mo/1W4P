/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    var minute = 0;

    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if ( grid[i][j] === 2 ) {
                rottingArrow(grid, i, j, minute);
            }
        }
    }
};

var rottingArrow = function(grid, row, col, minute) {
    
    if ( grid[row][col-1] ) {
        
    } 
    if ( grid[row][col+1] ) {

    } 
    if ( grid[row-1][col] ) {

    }
    if ( grid[row+1][col] ) {

    }
}

