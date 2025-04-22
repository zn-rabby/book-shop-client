
---

# **📚 BookStack Shop: Modern Online Bookstore (React Frontend)**  

**BookStack Shop** is a **responsive, user-friendly** e-commerce platform for book lovers, built with **React.js, Redux, and Ant Design**. It seamlessly integrates with a [Node.js backend](https://github.com/rabby-web/book-shop-server) to deliver secure authentication, smooth shopping, and admin controls.  

🔗 **Live Demo:** [https://book-shop-client-seven.vercel.app/](https://book-shop-client-seven.vercel.app/)  

---

## **✨ Key Features**  

### **🛍️ User Experience**  
- **Browse Books**: Filter by title, author, category, price, and availability.  
- **Book Details**: View descriptions, ratings, and stock status.  
- **Cart Management**: Add/remove items, adjust quantities, and save for later.  
- **Secure Checkout**: Integrated payment gateways (Stripe, SurjoPay).  

### **🔐 Authentication & Roles**  
- **User Signup/Login**: JWT-based authentication.  
- **Role-Based Access**:  
  - **Admin**: Manage users, books, and orders.  
  - **Customer**: Place orders, view history.  

### **🛠️ Admin Dashboard**  
- **CRUD Operations**: Add, edit, or delete books.  
- **Order Management**: Track and process customer orders.  

### **🚀 Performance & UX**  
- **Responsive Design**: Mobile-first approach for all devices.  
- **Optimized State**: Redux for efficient data flow.  

---

## **⚡ Quick Setup**  

### **Prerequisites**  
- Node.js (v16+)  
- Git (optional)  

### **1. Clone the Repository**  
```bash
git clone https://github.com/rabby-web/book-shop-client.git
cd bookstack-shop-client
```

### **2. Install Dependencies**  
```bash
npm install
```

### **3. Configure Environment Variables**  
Create `.env` in the root directory:  
```env
REACT_APP_API_URL=https://your-backend-api-url.com  # Replace with your backend URL
REACT_APP_JWT_SECRET=your-jwt-secret               # For token validation
```

### **4. Start the Development Server**  
```bash
npm start
```  
Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

## **🛠️ Tech Stack**  

### **Frontend**  
- **Framework**: React.js  
- **State Management**: Redux Toolkit  
- **UI Library**: Ant Design  
- **Routing**: React Router v6  
- **HTTP Client**: Axios  
- **Styling**: CSS Modules  

### **Backend Integration**  
- **API**: [BookStack Shop Server](https://github.com/rabby-web/book-shop-server) (Node.js + MongoDB)  
- **Authentication**: JWT (Access/Refresh Tokens)  

---

## **📄 Project Structure**  
```markdown
src/  
├── components/      # Reusable UI (Navbar, BookCard, etc.)
├── pages/           # Routes (Home, Cart, Admin)
├── redux/           # State slices (auth, books, cart)
├── services/        # API calls (axios)
├── styles/          # CSS Modules
└── utils/           # Helpers (auth, formatters)
```

---

## **🌍 Live Demo**  
Explore the deployed version:  
👉 [BookStack Shop](https://book-shop-client-seven.vercel.app/)  

---

## **🤝 How to Contribute**  
1. **Fork** the repository.  
2. **Branch**: `git checkout -b feature/your-feature`.  
3. **Commit**: `git commit -m "Add your feature"`.  
4. **Push**: `git push origin feature/your-feature`.  
5. **Open a Pull Request** with a clear description.  

---

## **📞 Contact**  
For questions or feedback:  
✉️ **Email**: [zn.rabby@gmail.com](mailto:zn.rabby@gmail.com)  

---

### **Why BookStack Shop?**  
✅ **Scalable**: Modular architecture for future enhancements.  
✅ **Secure**: JWT authentication + role-based access.  
✅ **User-Centric**: Intuitive UI with responsive design.  

**Happy Reading!** 📖✨  

--- 
