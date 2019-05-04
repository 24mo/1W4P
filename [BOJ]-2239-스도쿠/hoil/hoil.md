설명 정리해서 올리겠습니다.

```C
#include<stdio.h>
int map[10][10], chk1[10][10], chk2[10][10], chk3[10][10], flag;
int three(int a, int b) {
	if (a <= 3) {
		if (b <= 3) return 1;
		if (b <= 6) return 2;
		return 3;
	}
	else if (a <= 6) {
		if (b <= 3) return 4;
		if (b <= 6) return 5;
		return 6;
	}
	else if (a <= 9) {
		if (b <= 3) return 7;
		if (b <= 6) return 8;
		return 9;
	}
}
void back(int deep) {
	int i, j, x, y;
	x = (deep-1) / 9 + 1;
	y = (deep- 1) % 9 + 1;

	if (deep > 81) { flag++; return; }
	else if (map[x][y]) {
		back(deep + 1);
	}
	else {
		for (i = 1; i <= 9; i++) {
			if (chk1[x][i] == 0 && chk2[y][i] == 0 && chk3[three(x, y)][i] == 0) {
				map[x][y] = i;
				chk1[x][i]++;
				chk2[y][i]++;
				chk3[three(x, y)][i]++;
				back(deep + 1);
				if (flag)return;
				map[x][y] = 0;
				chk1[x][i]--;
				chk2[y][i]--;
				chk3[three(x, y)][i]--;

			}
		}
	}
}
int main() {
	int i, j;
	char temp;
	for (i = 1; i <= 9; i++) {
		for (j = 1; j <= 9; j++) {
			temp = getchar();
			map[i][j] = temp - '0';
			if (map[i][j]) {
				chk1[i][map[i][j]]++;
				chk2[j][map[i][j]]++;
				chk3[three(i, j)][map[i][j]]++;
			}
		}
		getchar();
	}
	back(1);
	for (i = 1; i <= 9; i++) {
		for (j = 1; j <= 9; j++) {
			printf("%d",map[i][j]);
		}
		printf("\n");
	}
	return 0;
}
```
