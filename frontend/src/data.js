// const data = {
//   users: [
//     {
//       name: 'Basir',
//       email: 'admin@example.com',
//       password: bcrypt.hashSync('1234', 8),
//       isAdmin: true,
//     },
//     {
//       name: 'John',
//       email: 'user@example.com',
//       password: bcrypt.hashSync('1234', 8),
//       isAdmin: false,
//     },
//   ],
//   products: [
//     {
//       _id: '1',
//       name: ' Slim Shirt',
//       category: 'Shirts',
//       image: '/images/img1.jpg',
//       price: 120,
//       countInStock: 10,
//       brand: 'Nike',
//       rating: 4.5,
//       numReviews: 10,
//       description: 'high quality product',
//     },
//     {
//       _id: '2',
//       name: 'Adidas Fit Shirt',
//       category: 'Shirts',
//       image: '/images/img2.jpg',
//       price: 100,
//       countInStock: 20,
//       brand: 'Adidas',
//       rating: 4.0,
//       numReviews: 10,
//       description: 'high quality product',
//     },
//     {
//       _id: '3',
//       name: 'Lacoste Free Shirt',
//       category: 'Shirts',
//       image: '/images/img3.jpg',
//       price: 220,
//       countInStock: 0,
//       brand: 'Lacoste',
//       rating: 4.8,
//       numReviews: 17,
//       description: 'high quality product',
//     },
//     {
//       _id: '4',
//       name: 'Nike Slim Pant',
//       category: 'Pants',
//       image: '/images/img4.jpg',
//       price: 78,
//       countInStock: 15,
//       brand: 'Nike',
//       rating: 4.5,
//       numReviews: 14,
//       description: 'high quality product',
//     },
//     {
//       _id: '5',
//       name: 'Puma Slim Pant',
//       category: 'Pants',
//       image: '/images/img5.jpg',
//       price: 65,
//       countInStock: 5,
//       brand: 'Puma',
//       rating: 4.5,
//       numReviews: 10,
//       description: 'high quality product',
//     },
//     {
//       _id: '6',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img6.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '7',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img7.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '8',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img8.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '9',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img9.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '10',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img10.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '11',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img11.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '12',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img12.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '13',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img13.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '14',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img14.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '15',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img15.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '16',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img16.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '17',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img17.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '18',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img18.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '19',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img19.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '20',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img20.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '21',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img21.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '22',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img22.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '23',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img23.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '24',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img24.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '25',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img25.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '26',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img26.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '27',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img27.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '28',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img28.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '29',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img29.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '30',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img30.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '31',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img31.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '32',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img32.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '33',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img33.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '34',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img34.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
//     {
//       _id: '35',
//       name: 'Adidas Fit Pant',
//       category: 'Pants',
//       image: '/images/img35.jpg',
//       price: 139,
//       countInStock: 12,
//       brand: 'Adidas',
//       rating: 4.5,
//       numReviews: 15,
//       description: 'high quality product',
//     },
    
//   ],
// };
// export default data;
