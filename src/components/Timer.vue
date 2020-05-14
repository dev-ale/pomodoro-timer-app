<template>
    <v-card
            max-width="500"
            class="mx-auto"
    >
        <v-tabs centered color="#FF5252">
            <v-tab>Pomodoro</v-tab>
            <v-tab>Short Break</v-tab>
            <v-tab>Long Break</v-tab>
        </v-tabs>

        <v-card-text class="text-center">
            <h4 class="display-4">{{this.counter}}</h4>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#FF5252" x-large dark width="200">
                START
            </v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        data () {
            return {
                counter: '25:00'
            }
        }
    }

</script>