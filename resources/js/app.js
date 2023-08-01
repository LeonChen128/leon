require('./bootstrap');

import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue.js!',
        color: 'gray'
    },
    mounted() {
        console.log(123213)
    },
    computed: {

    },
    methods: {
        change() {
            this.changeMessage('ker ker')
            this.changeColor()
        },
        changeMessage(string) {
            this.message += `加了一次${string}`
        },
        changeColor() {
            this.color = this.color === 'gray' ? 'green': 'gray'
        }
    }
});
