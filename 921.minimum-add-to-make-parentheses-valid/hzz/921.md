```C
class Solution {
public:
    int minAddToMakeValid(string S) {
        int length = S.length();
        int leftCount = 0;
        int result = 0;

        for(int i = 0; i<length; i += 1) {
            if(S[i] == '(') {
                leftCount += 1;
            } else {
                if(leftCount > 0) {
                    leftCount -=1;
                }
                else {
                    result += 1;
                }
            }
        }
        result += leftCount;
        return result;
    }
};
```
