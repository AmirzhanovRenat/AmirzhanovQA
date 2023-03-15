<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <MyInput v-model="post.body" class="input" type="text" placeholder="Описание" />
        <MyInput
            @input="post.title = $event.target.value"
            :value="post.title"
            class="input"
            type="text"
            placeholder="Название"
        />
        <MyButton class="btn" style="align-self: flex-end; margin-top: 15px" @click="createPost">Создать</MyButton>
    </form>
</template>

<script>
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';
export default {
    components: {
        MyButton,
        MyInput,
    },
    data() {
        return {
            post: { title: '', body: '' },
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: '',
            };
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>
