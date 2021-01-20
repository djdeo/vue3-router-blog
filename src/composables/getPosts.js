import {ref} from 'vue'

const getPosts =() => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:1337/posts')
            if(!data.ok) {
                throw Error('no data')
            }
            posts.value = await data.json()
            console.log(posts.value)
        } catch (err) {
            error.value = err.message
        }
    }

    return {
        posts, error, load
    }
}

export default getPosts