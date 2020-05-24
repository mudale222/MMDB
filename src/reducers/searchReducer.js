
const search = (searchParams) => {
    return { ...searchParams }
}

const searchReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            return search(action.searchParams)
        default:
            return state
    }
    // switch (action.type) {
    //     case 'POPULATE_NOTES':
    //         return action.notes
    //     case 'ADD_NOTE':
    //         const newItem = { title: action.title, body: action.body }
    //         return [...action.notes, newItem]
    //     case 'REMOVE_NOTE':
    //         console.log(action.notes)
    //         return action.notes.filter(n => n.title != action.title)
    //     default:
    //         return state
    // }
}

export default searchReducer