<template>
    <user @add="add" />
</template>

<script>
import user from './components/postList.vue';
export default {
    components: {
        user,
    },
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: 'name1',
                    surn: 'surn1',
                },
                {
                    id: 2,
                    name: 'name2',
                    surn: 'surn2',
                },
                {
                    id: 3,
                    name: 'name3',
                    surn: 'surn3',
                },
            ],
        };
    },
    methods: {
        add(name, surn) {
            let id = this.users.length + 1;

            this.users.push({
                id,
                name,
                surn,
            });
        },
    },
};
</script>
