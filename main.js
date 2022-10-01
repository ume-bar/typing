/*global Vue*/
var app = new Vue({
    el: "#app",
    data: {
        // message: "Hello Vue",
        kuji: '',
        color: '',
        // count: 0,
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
        }
    }
});
