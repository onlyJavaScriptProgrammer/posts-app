import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PostsIcon from "./components/UI/posts-icon.vue";
import PostsComments from "./components/UI/posts-comments.vue";
import SaveButton from "./components/UI/save-button.vue";
import CancelButton from "./components/UI/cancel-button.vue";

const app = createApp(App);

app.component("posts-icon", PostsIcon);
app.component("posts-comments", PostsComments);
app.component("save-button", SaveButton);
app.component("cancel-button", CancelButton);

app.use(store).use(router).mount("#app");
