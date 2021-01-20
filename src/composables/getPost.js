import {ref} from 'vue'

const getPosts =(id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:1337/posts/' + id)
            if(!data.ok) {
                throw Error('no post')
            }
            post.value = await data.json()
            console.log(post.value)
        } catch (err) {
            error.value = err.message
        }
    }

    return {
        post, error, load
    }
}

export default getPosts