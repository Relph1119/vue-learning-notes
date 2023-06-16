/**
 * @author: HuRuiFeng
 * @file: studentStore.js
 * @time: 2023/6/16 15:55
 * @project: vue-learning-notes
 * @desc:
 */
import {defineStore} from "pinia";

export const useStudentStore = defineStore("student", {
    state: () => ({
       name: "孙悟空",
       age: 18,
       gender: "男",
       address: "花果山",
       skills: ["七十二变", "筋斗云", "金箍棒"]
    }),
    getters: {
        title: state => {
            return "Mr. " + state.name;
        },
        double() {
            return this.age * 2;
        }
    },
    actions: {
        growUp() {
            this.age++;
        }
    }
})
