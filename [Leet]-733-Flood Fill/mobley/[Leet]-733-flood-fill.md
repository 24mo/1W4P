# [Leet]-733-flood-fill

시작지점 인덱스와 `image`배열, 바꿀 색상값을 입력으로 받아,
- 시작지점 색상값과 동일한 색상값을 가지고,
- 시작지점부터 4방향으로 인접한 칸의
색상을 모두 바꿀 색상값으로 바꿔준 배열을 반환해야 한다.

## 내가 해결한 방법
처음에 입력으로 들어온 인덱스의 배열값을 바꿀 색상값으로 바꿔주고
- 4방향으로 인접해있고, 인덱스가 배열안에서 valid한지
- 처음 시작 색상값과 동일한지
- 방문한적이 있는지(바꿔줘야할 색상값과 동일하지 않은지)
를 판단해서 재귀호출 하는 함수를 처음 인덱스에서 한번 실행해주면
필요에 따라서 연쇄적으로 작업이 일어날 것이라고 생각함.

### 시간복잡도
`image` 배열의 크기가 `A * B`인 2차 배열이라고 할 때,
이미 방문한 곳은 재방문하지 않으므로 최악의 경우 `O(A * B)` 이다.

```js
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  var dx = [0, -1, 1, 0];
  var dy = [-1, 0, 0, 1];
  var sp = image[sr][sc];
  var x, y;
  var visited = image.slice().map((a, i) => image[i].slice().map(a => false));

  function findConnected(s, r) {

    image[s][r] = newColor;
    visited[s][r] = true;

    for (var i = 0; i < dx.length; i++) {
      x = s + dx[i];
      y = r + dy[i];

      if (isValid(x, y) && image[x][y] === sp && !visited[x][y]) {
        findConnected(x, y);
      }
    }
  }

  function isValid(x, y) {
    return x >= 0 && y >= 0 && x < image.length && y < image[0].length;
  }

  findConnected(sr, sc);

  return image;
};

```

## 남들이 해결한 방법

```js
var floodFill = function(image, sr, sc, newColor, firstColor = image[sr][sc]) {

  if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== firstColor || image[sr][sc] === newColor) {
    return image;
  }

  image[sr][sc] = newColor;

  floodFill(image, sr - 1, sc, newColor, firstColor);
  floodFill(image, sr + 1, sc, newColor, firstColor);
  floodFill(image, sr, sc - 1, newColor, firstColor);
  floodFill(image, sr, sc + 1, newColor, firstColor);

  return image;
};
```

공간복잡도가 매우 개선된 코드임.
