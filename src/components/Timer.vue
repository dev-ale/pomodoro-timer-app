<template>
<div>
    <vue-title :title="this.actualTimer + ' - ' + this.formatStoMSS(this.counter)"></vue-title>
    <v-card
            max-width="450"
            class="mx-auto"
    >
        <v-tabs centered color="#FF5252" v-model="tabs">
            <v-tab @click="onTabPomodoro">Pomodoro</v-tab>
            <v-tab @click="onTabShortBreak">Short Break</v-tab>
            <v-tab @click="onTabLongBreak">Long Break</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs">
            <v-tab-item>
                <v-card-text class="text-center">
                    <h4 class="display-4">{{ this.formatStoMSS(this.counter) }}</h4>
                </v-card-text>
            </v-tab-item>
            <v-tab-item>
                <v-card-text class="text-center">
                    <h4 class="display-4">{{ this.formatStoMSS(this.counter) }}</h4>
                </v-card-text>
            </v-tab-item>
            <v-tab-item>
                <v-card-text class="text-center">
                    <h4 class="display-4">{{ this.formatStoMSS(this.counter) }}</h4>
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
        <v-row>
            <v-col cols="12" sm="6" offset="3">
                <v-text-field
                        v-if="this.actualTimer === 'Pomodoro'"
                        dense
                        v-model= actualPomodoroTitle
                        placeholder="Choose a topic"
                        clearable
                ></v-text-field>
            </v-col>
        </v-row>

    </v-card>

    <div style="width: 470px" class="center" >

    </div>

</div>


</template>

<script>
    import {Howl} from 'howler';
    import moment from "moment";
    require('howler');

    export default {
        data () {
            return {
                tabs: null,
                pomodoroTime: 1500,
                shortBreakTime: 300,
                longBreakTime: 600,
                counter: 1500,
                counting: false,
                buttonText: 'START',
                selectedPomodoro: true,
                selectedShortBreak: false,
                selectedLongBreak: false,
                actualPomodoroTitle: '',
                today: moment().calendar(),
                actualTimer: 'Pomodoro'
            }
        },
        computed: {
            getPomodoroTime() {
                return this.$store.getters.getPomodoroDuration
            },
            getShortBreakTime() {
                return this.$store.getters.getShortBreakDuration
            },
            getLongBreakTime() {
                return this.$store.getters.getLongBreakDuration
            },
            getPomodoros () {
                return this.$store.getters.getFinishedPomodoros
            },
        },
        methods: {
            addFinishedPomodoro () {
                this.$store.commit('addFinishedPomodoro',{ title: this.actualPomodoroTitle, date: this.today })
            },

            playSound(filePath, volume) {
                let sound = new Howl({
                    html5: true,
                    src: filePath,
                    volume: volume
                });
                sound.play();
            },
            onTabPomodoro() {
                this.counter = this.pomodoroTime
                this.selectedPomodoro = true
                this.selectedShortBreak = false
                this.selectedLongBreak = false
                this.actualTimer = 'Pomodoro'
                this.actualPomodoroTitle = ''
                console.log(this.actualTimer)

                console.log(this.getPomodoroTime())
                // Todo change Background Color
            },
            onTabShortBreak() {
                this.counter = this.shortBreakTime
                this.selectedPomodoro = false
                this.selectedShortBreak = true
                this.selectedLongBreak = false
                this.actualTimer = 'Short Break'
                this.actualPomodoroTitle = this.actualTimer
                console.log(this.actualTimer)
                // Todo change Background Color
            },
            onTabLongBreak() {
                this.counter = this.longBreakTime
                this.selectedPomodoro = false
                this.selectedShortBreak = false
                this.selectedLongBreak = true
                this.actualTimer = 'Long Break'
                this.actualPomodoroTitle = this.actualTimer
                console.log(this.actualTimer)
                // Todo change Background Color
            },
            // Method to change seconds in minutes and seconds M:SS
            formatStoMSS(s){
                return(s-(s%=60))/60+(9<s?':':':0')+s
            },
            // Methode die aufgerufen wird wenn der Knopf gedrückt wird
            onButtonClick () {
                this.counting = !this.counting
                if (this.counting) {
                    this.buttonText = 'STOP'
                    this.startCountdown()
                }
                else {
                    this.buttonText = 'START'
                    this.counting = false

                }


            },
            // Startet Countdown
            startCountdown () {
                if(this.counter > 0 && this.counting) {
                    setTimeout(() => {
                        this.counter -= 1
                        this.startCountdown()
                    }, 1000)
                }
                else if (this.counting){
                    if (this.selectedPomodoro) {
                        this.playSound('bell.mp3',0.6)
                        console.log("pomodoro finished")
                        this.addFinishedPomodoro()
                        setTimeout(() => {
                            this.counter = this.pomodoroTime
                            this.onButtonClick()
                        }, 1000);

                    }
                    else if (this.selectedShortBreak){
                        this.playSound('bell.mp3',0.6)
                        console.log("short break finished")
                        setTimeout(() => {
                            this.addFinishedPomodoro()
                            this.counter = this.shortBreakTime
                            this.onButtonClick()
                        }, 1000);

                    }
                    else if (this.selectedLongBreak) {
                        this.playSound('bell.mp3',0.6)
                        console.log("long break finished")
                        setTimeout(() => {
                            this.addFinishedPomodoro()
                            this.counter = this.longBreakTime
                            this.onButtonClick()
                        }, 1000);

                    }

                }
            }
        }
    }

</script>

<style>
    .center {
        margin: auto;
        width: 50%;
        padding: 10px;
    }
</style>