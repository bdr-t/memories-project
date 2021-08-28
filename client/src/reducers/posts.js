// eslint-disable-next-line import/no-anonymous-default-export
export default function(posts = [], action){
    switch (action.type){
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts 
    }
    
}