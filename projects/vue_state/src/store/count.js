/**
 * @author: HuRuiFeng
 * @file: count.js
 * @time: 2023/6/16 10:48
 * @project: vue-learning-notes
 * @desc:
 */

import {reactive} from "vue";

export const countStore = reactive({
    count: 0,
    increment() {
        this.count++;
    }
})
