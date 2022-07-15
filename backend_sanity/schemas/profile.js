export default{
    name:'profile',
    title:'Profile',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'profilepic',
            title:'ProfilePic',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}