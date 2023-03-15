<template>
    <div class="post">
        <div>
            <div><strong>Назввание:</strong>{{ post.body }}</div>
            <div><strong>Описание:</strong>{{ post.title }}</div>
        </div>
        <div class="post__btns">
            <MyButton @click="$emit('remove', post)">Удалить</MyButton>
        </div>
    </div>
</template>
<script>
import MyButton from './UI/MyButton.vue';
export default {
    props: {
        post: {
            type: Object,
            required: true,
            //Обязательный пропс
        },
    },
    components: { MyButton },
};
</script>
<style scoped>
.post {
    padding: 15px;
    border: 3px solid green;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
