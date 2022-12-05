import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'Ibrahim',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name:'Admi',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        }

    ],
    products: [
        {
        name: "Rice crop",
        slug: "rice-crop",
        category: 'Crops',
        image: '/images/p1.png',
        countInStock: 100,
        rating : 4.5,
        numReviews: 4,
        description: ' High quality Crop',

        },
        {
            name: "Wheat crop",
            slug: "Wheat-crop",
            category: 'Crops',
            image: '/images/p2.png',
            countInStock: 100,
            rating : 4.5,
            numReviews: 4,
            description: ' High quality Crop',
    
        },
        {
            name: "Cotton crop",
            slug: "Cotton-crop",
            category: 'Crops',
            image: '/images/p3.png',
            countInStock: 100,
            rating : 4.5,
            numReviews: 4,
            description: ' High quality Crop',
    
        },
    
    
    ]
}
export default data;