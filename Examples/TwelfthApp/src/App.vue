<template>
  <h2>Commentator Pro</h2>

  <button @click="showEditor = !showEditor" data-test-id="new-comment-button">
    Add a New Comment
  </button>

  <div v-if="showEditor">
    <p>
      <textarea data-test-id="new-comment-editor" v-model="newComment"></textarea>
    </p>
    <p>
      <button
        data-test-id="new-comment-submit"
        :disabled="!newComment || isSubmitting"
        :class="{ submitting: isSubmitting }"
        @click="submitNewComment()"
      >
        Submit
      </button>
    </p>
  </div>

  <div v-if="comments.length > 0" data-test-id="comments-list">
    <div v-for="(comment, index) in comments" :key="comment.id + index" data-test-id="comment-card">
      <p>{{ comment.body }}</p>
      <p>
        <a :href="'mailto:' + comment.email"> {{ comment.email }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.submitting {
  font-style: italic;
}
</style>

<script>
export default {
  data() {
    return {
      showEditor: false,
      newComment: '',
      isSubmitting: false,
      comments: [],
      email: 'fakeemail@email.com'
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((comments) => {
        this.comments = comments
      })
  },
  methods: {
    submitNewComment() {
      this.isSubmitting = true
      fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          body: this.newComment
        })
      })
        .then((res) => res.json())
        .then((data) => {
          this.comments = [data, ...this.comments]
          this.isSubmitting = false
          this.newComment = ''
        })
        .catch(() => {
          this.isSubmitting = false
        })
    }
  }
}
</script>

<!--<script setup lang="ts">-->
<!--import { RouterLink, RouterView } from 'vue-router'-->
<!--import HelloWorld from './components/HelloWorld.vue'-->
<!--</script>-->

<!--<template>-->
<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->

<!--  <RouterView />-->
<!--</template>-->

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<!--<template>-->
<!--	<h2>Commentator Pro</h2>-->

<!--	<button>-->
<!--		Add a New Comment-->
<!--	</button>-->
<!--</template>-->

<!--<template>-->
<!--	<h2>Commentator Pro</h2>-->

<!--	<button @click="showEditor = !showEditor"-->
<!--			data-test-id="new-comment-button">-->
<!--		Add a New Comment-->
<!--	</button>-->

<!--	<div v-if="showEditor">-->
<!--		<p>-->
<!--	<textarea data-test-id="new-comment-editor"-->
<!--			  v-model="newComment"></textarea>-->
<!--		</p>-->
<!--		<p>-->
<!--			<button data-test-id="new-comment-submit" :disabled="!newComment">-->
<!--				Submit-->
<!--			</button>-->
<!--		</p>-->
<!--	</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->

<!--	data() {-->
<!--		return {-->
<!--			showEditor: false,-->
<!--			newComment: ''-->
<!--		}-->
<!--	}-->

<!--}-->
<!--</script>-->

<!--<template>-->
<!--	<h2>Commentator Pro</h2>-->

<!--	<button @click="showEditor = !showEditor"-->
<!--			data-test-id="new-comment-button">-->
<!--		Add a New Comment-->
<!--	</button>-->

<!--	<div v-if="showEditor">-->
<!--		<p>-->
<!--	<textarea data-test-id="new-comment-editor"-->
<!--			  v-model="newComment"></textarea>-->
<!--		</p>-->
<!--		<p>-->
<!--			<button data-test-id="new-comment-submit"-->
<!--					:disabled="!newComment || isSubmitting"-->
<!--					:class="{submitting:isSubmitting}"-->
<!--					@click="submitNewComment()">-->
<!--				Submit-->
<!--			</button>-->
<!--		</p>-->
<!--	</div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.submitting {-->
<!--	font-style: italic;-->
<!--}-->
<!--</style>-->

<!--<script>-->
<!--export default {-->

<!--	data() {-->
<!--		return {-->
<!--			showEditor: false,-->
<!--			newComment: '',-->
<!--			isSubmitting: false-->
<!--		}-->
<!--	},-->
<!--	methods: {-->
<!--		submitNewComment() {-->
<!--			this.isSubmitting = true;-->
<!--			setTimeout(() => {-->
<!--				this.isSubmitting = false;-->
<!--				this.newComment = '';-->
<!--			}, 2500);-->

<!--		}-->
<!--	}-->

<!--}-->
<!--</script>-->
