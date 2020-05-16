<template>
    <v-card max-width="450" class="mx-auto">
<!--        <v-text-field v-model="actualPomodoroTitle"></v-text-field>-->
        <v-card-title>Tasks: </v-card-title>
        <v-list flat>
            <v-list-item-group v-model="pomodoros" color="primary">
                <v-list-item v-for="(pomodoro, i) in pomodoros" :key="i">
                    <v-list-item-content>
                        <v-list-item-title>{{ pomodoro.title }}</v-list-item-title>
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
        computed: {
            pomodoros () {
                return this.$store.getters.getFinishedPomodoros
            },
            getActualPomodoroTitle () {
                return this.$store.getters.getActualPomodoroTitle
            }
        },
        methods: {
            getFinishedPomodoros () {
                console.log(this.$store.getters.getFinishedPomodoros)
                return this.$store.getters.getFinishedPomodoros

            },
            addFinishedPomodoro () {
                this.$store.commit('addFinishedPomodoro',{ title: this.actualPomodoroTitle, date: this.today })

                console.log()
            }
        },
        data: () => ({
            actualPomodoroTitle: 'empty',
            today: moment().calendar()
        }),

    }
</script>