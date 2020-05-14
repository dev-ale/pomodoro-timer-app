<template>
    <v-card max-width="500" class="mx-auto">
        <v-card-title>Tasks: </v-card-title>
        <v-list flat>
            <v-list-item-group v-model="tasks" color="primary">
                <v-list-item v-for="(task, i) in tasks" :key="i">
                    <v-list-item-icon>
                        <v-icon v-text="task.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="task.text"></v-list-item-title>
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
    export default {
        data: () => ({
            tasks: [
                { text: 'Task 1', icon: 'mdi-clock' },
                { text: 'Task 2', icon: 'mdi-clock' },
                { text: 'Task 3', icon: 'mdi-clock' },
            ],
        }),
    }
</script>