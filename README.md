# Salon Website (Not Completed)

Welcome to the **Salon Website**, a modern and stylish Next.js-based web application designed for beauty salons. This website provides a seamless experience for customers to explore salon services, book appointments, and get in touch with the salon team.

## 🚀 Live Demo

[Salon Website](https://localsalon.netlify.app/)

## 📌 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Features

- ✅ **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- 💇‍♀️ **Service Listing**: Customers can view a detailed list of beauty services with descriptions and pricing.
- 📅 **Booking System**: A form-based appointment booking system for hassle-free scheduling.
- 📩 **Contact Form**: A user-friendly form for customers to get in touch with the salon.
- 🏷 **Invoice Management**: Supports generating invoices for services provided.
- 🔍 **SEO Optimized**: Proper meta tags and Open Graph support for social media sharing.

---

## 🛠 Technologies Used

- ⚡ **Next.js** - Framework for React applications
- 📝 **TypeScript** - Static type checking
- 🎨 **Tailwind CSS** - Utility-first CSS framework for styling
- 🎭 **Framer Motion** - For animations and transitions
- 🌐 **React Icons** - For easy-to-use icon components
- 🔄 **Axios** - For API requests
- 🖨 **React-to-Print** - For printing invoices
- 📄 **JSPDF & JSPDF-AutoTable** - For generating PDF invoices

---

## 🏗 Setup & Installation

### Prerequisites

- **Node.js (v18+)**
- **npm (or yarn)**
- **Git**

### Steps to Run Locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/0xYashAnand/website-nextjs.git
   cd website-nextjs
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The website will be accessible at `http://localhost:3000`.

4. **Build for Production:**

   ```bash
   npm run build
   ```

5. **Start the Production Server:**

   ```bash
   npm start
   ```

---

## 📂 Project Structure

```bash
.
├── components          # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   ├── ServiceCard.tsx
│   ├── WorkingHours.tsx
├── pages               # Next.js pages (routes)
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About Us page
│   ├── services.tsx    # Services listing page
│   ├── contact.tsx     # Contact page
│   ├── bookingForm.tsx # Appointment booking page
│   ├── invoice         # Invoice-related pages
│   ├── api             # API endpoints
├── styles              # CSS modules for styling
├── public              # Static assets (images, icons, etc.)
├── next.config.mjs     # Next.js configuration file
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies and scripts
├── README.md           # Project documentation
```

---

## 🎯 Usage

- **Viewing Services**: Navigate to the `Services` page to explore available beauty treatments and their pricing.
- **Booking an Appointment**: Fill out the `Booking Form` with your details and preferred service.
- **Contacting the Salon**: Use the `Contact` page to send inquiries.
- **Generating Invoices**: Admins can generate invoices for customers through the invoice management system.

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit the changes (`git commit -m 'Added a new feature'`).
5. Push to your branch (`git push origin feature/your-feature-name`).
6. Create a Pull Request.

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use and modify it as needed.

---


