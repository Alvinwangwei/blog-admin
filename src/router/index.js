
const Book = require('../components/book/book')
const Search = require('../components/search/search')
const Note = require('../components/note/note')

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: home,
            redirect: {
                name: 'search'
            }
        },
        {
            path: '/book',
            name: book,
            component:  Book
        },
        {
            path: '/search',
            name: search,
            component:  Search
        },
        {
            path: '/note',
            name: note,
            component:  Note
        }
    ]
})

export default router