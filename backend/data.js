// import bcrypt from 'bcryptjs';
const bcrypt = require('bcryptjs')
const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
     
      name: 'image1',
      category: 'image1',
      image: '/images/img1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'image2',
      category: 'image2',
      image: '/images/img2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
     
      name: 'image3',
      category: 'image3',
      image: '/images/img3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
     
      name: 'image4',
      category: 'image4',
      image: '/images/img4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
     
      name: 'image5',
      category: 'image5',
      image: '/images/img5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'image6',
      category: 'image6',
      image: '/images/img6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
      
      name: 'image7',
      category: 'image7',
      image: '/images/img7.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image8',
      category: 'image8',
      image: '/images/img8.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image9',
      category: 'image9',
      image: '/images/img9.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image10',
      category: 'image10',
      image: '/images/img10.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image11',
      category: 'image11',
      image: '/images/img11.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
    
      name: 'image12',
      category: 'image12',
      image: '/images/img12.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
    
      name: 'image13',
      category: 'image13',
      image: '/images/img13.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
      
      name: 'image14',
      category: 'image14',
      image: '/images/img14.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image15',
      category: 'image15',
      image: '/images/img15.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
      
      name: 'image16',
      category: 'image16',
      image: '/images/img16.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image17',
      category: 'image17',
      image: '/images/img17.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
    
      name: 'image18',
      category: 'image18',
      image: '/images/img18.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image20',
      category: 'image20',
      image: '/images/img20.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
      
      name: 'image21',
      category: 'image21',
      image: '/images/img21.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image22',
      category: 'image22',
      image: '/images/img22.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
      
      name: 'image23',
      category: 'image23',
      image: '/images/img23.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
    
      name: 'image24',
      category: 'image24',
      image: '/images/img24.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
    
      name: 'image25',
      category: 'image25',
      image: '/images/img25.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
    
      name: 'image26',
      category: 'image26',
      image: '/images/img26.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image27',
      category: 'image27',
      image: '/images/img27.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
    
      name: 'image28',
      category: 'image28',
      image: '/images/img28.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image29',
      category: 'image29',
      image: '/images/img29.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image30',
      category: 'image30',
      image: '/images/img30.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image31',
      category: 'image31',
      image: '/images/img31.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image32',
      category: 'image32',
      image: '/images/img32.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
     
      name: 'image33',
      category: 'image33',
      image: '/images/img33.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    
    
  ],
};
// export default data;
module.exports = data;
