const initialState ={
    posts: [
        {
        id: '1',
        title: 'Article title',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        category: 'Sport',
        publishedDate: '01-02-2022',
        author: 'Joe Doe'
        },
        {
            id: '2',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            category: 'Movies',
            publishedDate: '02-01-2022',
            author: 'Dean West'
        },
        {
            id: '3',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            category: 'News',
            publishedDate: '02-02-2021',
            author: 'Sam Lucky'
        }],
    categories: [
        'Sport',
        'News',
        'Movies'
    ]
}

export default initialState;