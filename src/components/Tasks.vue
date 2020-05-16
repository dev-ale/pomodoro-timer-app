<template>
    <v-card max-width="450" class="mx-auto">
        <v-card-title>History: </v-card-title>
        <p v-if="finishedPomodoros.length === 0" style="text-align: center">Heute noch nichts gemacht...</p>
        <v-list flat>
            <v-list-item-group v-model="pomodoros" color="primary">
                <v-list-item v-for="(pomodoro, i) in pomodoros" :key="i">
                    <v-list-item-content>
                        <v-list-item-title class="red--text">{{ pomodoro.title }}</v-list-item-title>
                        {{ pomodoro.date }}
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon>mdi-close-circle-outline</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    import moment from 'moment'
    export default {
        mounted() {
            console.log('mounted')
            this.finishedPomodoros = this.$store.getters.getFinishedPomodoros
        },

        computed: {
            pomodoros () {
                console.log('computed')
                return this.$store.getters.getFinishedPomodoros
            },
            getActualPomodoroTitle () {
                return this.$store.getters.getActualPomodoroTitle
            }
        },
        methods: {
            getFinishedPomodoros () {
                console.log(this.$store.getters.getFinishedPomodoros.length)
                return this.$store.getters.getFinishedPomodoros

            },
            addFinishedPomodoro () {
                this.$store.commit('addFinishedPomodoro',{ title: this.actualPomodoroTitle, date: this.today })

                console.log(this.pomodoros)
            }
        },
        data: () => ({
            finishedPomodoros: [],
            actualPomodoroTitle: '',
            today: moment().calendar()
        }),

    }
</script>