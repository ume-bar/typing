/*global Vue*/
var app = new Vue({
    el: "#app",
    data: {
        // message: "Hello Vue",
        kuji: '',
        color: '',
        // count: 0,
        counter: 0,
        dice: 1,
        dice1: 1,
        dice2: 2,
        message: '',
    },
    mounted() {
    },
    methods: {
        click() {
            // this.message = "Clickしました"
            // thsi.message = Math.random()
            var r = Math.floor(Math.random() * 6)
            // if (r == 0) {
            //     this.message = "大吉です！"
            // } else if (r < 5) {
            //     this.message = "小吉です"
            // } else {
            //     this.message = "凶です😇"
            // }
            // this.message = r

            if (r == 0) {
                this.kuji = "大吉です！"
            } else if (r < 5) {
                this.kuji = "小吉です"
            } else {
                this.kuji = "凶です😇"
            }

            r = Math.floor(Math.random() * 2)
            if (r == 0) {
                this.color = "ラッキーカラーはねずみ色です"
            } else {
                this.color = "ラッキーカラーは黄土色です"
            }
        },
        countUp() {
            // this.counter = this.counter + 1;
            // this.counter++;


            var count = Math.floor(Math.random() * 10)
            if (count == 0) {
                this.counter = this.counter + 100;
            } else {
                this.counter++;
            }
        },
        diceOne() {
            this.dice = 1;
        },
        random() {
            // var d = Math.floor(Math.random() * 6) + 1;
            // if (d == 1) {
            //     this.dice = 1
            // } else if (d == 2) {
            //     this.dice = 2
            // } else if (d == 3) {
            //     this.dice = 3
            // } else if (d == 4) {
            //     this.dice = 4
            // } else if (d == 5) {
            //     this.dice = 5
            // } else {
            //     this.dice = 6
            // }
            this.dice = Math.floor(Math.random() * 6) + 1;
        },
        randomEven() {
            // var d = Math.floor(Math.random() * 3) + 1;
            // if (d == 1) {
            //     this.dice = 2
            // } else if (d == 2) {
            //     this.dice = 4
            // } else {
            //     this.dice = 6
            // }

            // var d = Math.floor(Math.random() * 3);
            // if (d == 0) {
            //     this.dice = 2
            // } else if (d == 1) {
            //     this.dice = 4
            // } else {
            //     this.dice = 6
            // }

            // 偶数は＋２　奇数は＋１　方程式では×２

            this.dice = Math.floor(Math.random() * 3) * 2 + 2;
        },
        shuffle() {
            this.dice1 = Math.floor(Math.random() * 6) + 1;
            this.dice2 = Math.floor(Math.random() * 6) + 1;
            if (this.dice1 == this.dice2) {
                this.message = "あたり！同じ目が出ました！";
            } else {
                this.message = "";
            }
        },
    }
});
