# BookStack Shop Client

BookStack Shop is an online platform where users can browse and purchase books seamlessly. This client-side application ensures a smooth experience for product discovery, cart management, and secure checkout.

## Key Features

- **User Authentication**: Secure registration, login, and account management.
- **Role-Based Access**: Admins can manage users, products, and orders.
- **Product Catalog**: Browse books with details like title, author, price, and availability.
- **Search & Filter**: Search by title, author, and category, with filters for price and availability.
- **Product Details**: View in-depth information and add books to the cart.
- **Shopping Cart**: Add, update, or remove items before checkout.
- **Order Placement**: Complete purchases through an integrated payment system.
- **Payment Integration**: Supports multiple payment gateways (SurjoPay, Stripe, etc.).
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.

## Technologies Used

### Frontend

- **Framework**: React.js
- **State Management**: Redux
- **Navigation**: React Router
- **UI Components**: Ant Design
- **API Integration**: Axios
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS Modules or Styled-components

### Backend

- **Repository**: [BookStack Shop Server](https://github.com/rabby-web/book-shop-server.git)
- **Technologies**: Node.js, Express.js, MongoDB, JWT Authentication
- **Features**: User authentication, product management, order processing

## Installation Guide

### Client Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/rabby-web/book-shop-client.git
   cd bookstack-shop-client
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory and add:
     ```
     REACT_APP_API_URL=https://your-backend-api-url.com
     REACT_APP_JWT_SECRET=your-jwt-secret
     ```
4. **Run the Development Server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Live Demo

Experience the platform live: [BookStack Shop](https://book-shop-client-seven.vercel.app/)

## Contribution Guide

We welcome contributions to enhance the platform. Follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Implement your changes
4. Commit (`git commit -am 'Add new feature'`)
5. Push (`git push origin feature-name`)
6. Submit a pull request

---

Ensure you replace placeholders like the GitHub URL, API URL, and JWT Secret in the configuration as needed.
