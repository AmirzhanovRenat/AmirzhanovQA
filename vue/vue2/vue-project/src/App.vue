<template>
    <div class="app">
        <div>
            <form>
                <h4>Создание поста</h4>
                <input
                    @input="body = $event.target.value"
                    v-bind:value="body"
                    class="input"
                    type="text"
                    placeholder="Описание"
                />
                <input @input="inputTitle" v-bind:value="title" class="input" type="text" placeholder="Название" />

                <button class="btn" @click="createPosts">Создать</button>
            </form>
        </div>
        <div class="post" v-for="post in posts">
            <div><strong>Name:</strong>{{ post.title }}</div>
            <div><strong>Opisanie:</strong>{{ post.body }}</div>
            <div><strong>Zvanie:</strong>{{ post.id }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                { id: 1, title: 'JavaScript', body: 'Описание поста 1' },
                { id: 2, title: 'JavaScript', body: 'Описание поста 2' },
                { id: 3, title: 'JavaScript', body: 'Описание поста 3' },
                { id: 4, title: 'JavaScript', body: 'Описание поста 4' },
                
            ],
            body: '',
            title: '',
        };
    },
    methods: {
        createPosts: function () {},
        inputTitle: function (event) {
            this.title = event.target.value;
            // console.log(event);
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.post {
    padding: 15px;
    border: 3px solid green;
    margin: 15px;
}
.input {
    width: 100%;
    border: 3px solid green;
    padding: 10px 15px;
    margin-top: 10px;
}
.app {
    /* margin: 10px; */
    padding: 10px;
}
form {
    display: flex;
    flex-direction: column;
}
.btn {
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}
</style>
