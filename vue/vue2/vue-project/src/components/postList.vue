<template>
    <div v-if="posts.length > 0">
        <h3>Список пользователей</h3>
        <div v-for="post in posts">
            <post-item :post="post" :key="post.id" @remove="$emit('remove', post)" />
        </div>
    </div>
    <h2 v-else style="color: red">Список пуст</h2>
</template>

<script>
import postItem from './postItem.vue';
export default {
    components: { postItem },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
