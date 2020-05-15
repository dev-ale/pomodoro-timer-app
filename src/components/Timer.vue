<template>
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
    </v-card>
</template>

<script>
    import {Howl} from 'howler';
    require('howler');

    export default {
        data () {
            return {
                tabs: null,
                pomodoroTime: 10,
                shortBreakTime: 3,
                longBreakTime: 5,
                counter: 10,
                counting: false,
                buttonText: 'START',
                selectedPomodoro: true,
                selectedShortBreak: false,
                selectedLongBreak: false
            }
        },
        methods: {
            playSound(filePath, volume) {
                let sound = new Howl({
                    html5: true,
                    src: filePath,
                    volume: volume
                });
                sound.play();
            },
            onTabPomodoro() {
                console.log("Pomodoro selected")
                this.counter = this.pomodoroTime
                this.selectedPomodoro = true
                this.selectedShortBreak = false
                this.selectedLongBreak = false
                // Todo change Background Color
            },
            onTabShortBreak() {
                console.log("Short Break selected")
                this.counter = this.shortBreakTime
                this.selectedPomodoro = false
                this.selectedShortBreak = true
                this.selectedLongBreak = false
                // Todo change Background Color
            },
            onTabLongBreak() {
                console.log("Long Break selected")
                this.counter = this.longBreakTime
                this.selectedPomodoro = false
                this.selectedShortBreak = false
                this.selectedLongBreak = true
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
                    this.stopCountdown()
                }
                console.log(this.counting)

            },
            // Startet Countdown
            startCountdown () {
                if(this.counter > 0 && this.counting) {
                    setTimeout(() => {
                        this.counter -= 1
                        this.startCountdown()
                    }, 1000)
                }
                else {
                    if (this.selectedPomodoro) {
                        this.playSound('bell.mp3',0.6)
                        console.log("pomodoro finished")
                        setTimeout(() => {
                            this.counter = this.pomodoroTime
                            this.onButtonClick()
                        }, 1000);

                    }
                    else if (this.selectedShortBreak){
                        this.playSound('bell.mp3',0.6)
                        console.log("short break finished")
                        setTimeout(() => {
                            this.counter = this.shortBreakTime
                            this.onButtonClick()
                        }, 1000);

                    }
                    else if (this.selectedLongBreak) {
                        this.playSound('bell.mp3',0.6)
                        console.log("long break finished")
                        setTimeout(() => {
                            this.counter = this.longBreakTime
                            this.onButtonClick()
                        }, 1000);

                    }

                }
            }
        }
    }

</script>

