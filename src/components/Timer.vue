<template>
    <v-card
            max-width="500"
            class="mx-auto"
    >
        <v-tabs centered color="#FF5252" v-model="tabs">
            <v-tab>Pomodoro</v-tab>
            <v-tab>Short Break</v-tab>
            <v-tab>Long Break</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs">
            <v-tab-item>
                <v-card-text class="text-center">
                    <h4 class="display-4">{{this.counter}}</h4>
                </v-card-text>
            </v-tab-item>
            <v-tab-item>
                <v-card-text class="text-center">
                    <h4 class="display-4">5:00</h4>
                </v-card-text>
            </v-tab-item>
            <v-tab-item>
                <v-card-text class="text-center">
                    <h4 class="display-4">10:00</h4>
                </v-card-text>
            </v-tab-item>
        </v-tabs-items>



        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#FF5252" x-large dark width="200" @click="onButtonClick">
                {{ buttonText }}
            </v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        data () {
            return {
                tabs: null,
                counter: 25,
                counting: false,
                buttonText: 'START'
            }
        },
        methods: {
            onButtonClick () {
                this.counting = !this.counting
                if (this.counting) {
                    this.buttonText = 'STOP'
                    this.startCountdown()
                }
                else {
                    this.buttonText = 'START'
                    this.stopCountdown()
                }
                console.log(this.counting)

            },
            startCountdown () {
                if(this.counter > 0 && this.counting) {
                    setTimeout(() => {
                        this.counter -= 1
                        this.startCountdown()
                    }, 1000)
                }
            },
            stopCountdown () {

            }
        }
    }

</script>

<!--
<script>
    export default {
        props : {
            endDate : {  // pass date object till when you want to run the timer
                type : Date,
                default(){
                    return new Date()
                }
            }
        },
        data(){
            return{
                now : new Date(),
                timer : null
            }
        },
        computed:{
            hour(){
                let h = Math.trunc((this.endDate - this.now) / 1000 / 3600);
                return h>9?h:'0'+h;
            },
            min(){
                let m = Math.trunc((this.endDate - this.now) / 1000 / 60) % 60;
                return m>9?m:'0'+m;
            },
            sec(){
                let s = Math.trunc((this.endDate - this.now)/1000) % 60
                return s>9?s:'0'+s;
            }
        },
        watch : {
            endDate : {
                immediate : true,
                handler(newVal){
                    if(this.timer){
                        clearInterval(this.timer)
                    }
                    this.timer = setInterval(()=>{
                        this.now = new Date()
                        if(this.negative)
                            return
                        if(this.now > newVal){
                            this.now = newVal
                            this.$emit('endTime')
                            clearInterval(this.timer)
                        }
                    }, 1000)
                }
            }
        },
        beforeDestroy(){
            clearInterval(this.timer)
        }
    }
</script>-->
