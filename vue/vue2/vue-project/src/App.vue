<template>
    <div class="app">
        <h1 style="text-align: center">Страница с постами</h1>
        <!-- <MyButton style="margin: 15px" @click="fetchPosts"> Получить посты </MyButton> -->
        <MyButton @click="showDialog" style="margin: 15px 0"> Создать пользователя</MyButton>
        <MyDialog v-model:show="dialogVisibl">
            <postForm @create="createPost" />
        </MyDialog>
        <post-list v-if="!isPostLoading" :posts="posts" @remove="removePost" />
        <div v-else>Идет загрузка...</div>
    </div>
</template>

<script>
import postForm from './components/postForm.vue';
import postList from './components/postList.vue';
import MyButton from './components/UI/MyButton.vue';
import MyDialog from './components/UI/MyDialog.vue';
import axios from 'axios';
export default {
    components: {
        postForm,
        postList,
        MyDialog,
        MyButton,
    },
    data() {
        return {
            posts: [],
            dialogVisibl: false,
            isPostLoading: false,
        };
    },
    methods: {
        createPost(posts) {
            this.posts.push(posts);
            this.dialogVisibl = false;
        },
        removePost(posts) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisibl = true;
        },
        async fetchPosts() {
            try {
                this.isPostLoading = true;
                setTimeout(async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.posts = response.data;
                    this.isPostLoading = false;
                }, 1000);
            } catch (erorr) {
                alert('Ошибка');
            } finally {
               
            }
        },
    },
    mounted() {
        this.fetchPosts();
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    /* margin: 10px; */
    padding: 10px;
}
</style>
