# leet-860-lemonade-change

판매자는 레모네이드 5달러 주고 팔고 있다.
소비자는 5,10,20 달러만 가지고 있다. 그리고 레모네이드를 1개만 구입한다.

판매자가 여러 소비자가 레모네이드 사갈때 거스름돈을 줄 수 있는지 판단하는 문제.

## 내가 해결한 방법

판매자 지갑 배열(0,1,2 인덱스들의 값은 5, 10, 20 달러 개수) 만들었다.
반복문마다 소비자가 지불한 지폐에 대해 거스름돈을 줄 수 있는지 판단한다.

```C
bool lemonadeChange(vector<int>& bills) {
        int len = bills.size();
        int dollarList[3] = {0,0,0};

        for(int i = 0; i<len; i++) {
            int receivedMoney = bills[i];
            int change = receivedMoney - 5;

            if(change == 0) {
                dollarList[0] += 1;
                continue;
            }

            for(int i = 2; i>=0; i--) {
                int subtractDollar;

                if(i == 2) {
                    subtractDollar = 20;
                } else if (i == 1) {
                    subtractDollar = 10;
                } else {
                    subtractDollar = 5;
                }


                // 내 돈으로 거스름돈 만들기 작업
                // 달러 개수가 있거나, 현재 가격이 0보다 크면
                while(dollarList[i] > 0 && change - subtractDollar >= 0) {
                    dollarList[i] -= 1;
                    change -= subtractDollar;
                }
            }

            if(change != 0) {
                return false;
            } else {
                // 내 지갑에 넣기
                receivedMoney = bills[i];
                if(receivedMoney == 20) {
                    dollarList[2] += 1;
                } else if (receivedMoney == 10) {
                    dollarList[1] += 1;
                } else {
                    dollarList[0] += 1;
                }
            }
        }
        return true;
    }
```
