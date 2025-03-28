# eCommerce Store with React

This project is a fully functional eCommerce store built with React, using the API provided by Noroff. The app includes various pages and features such as product listing, product details, shopping cart, checkout, and a contact form.

## Features

- **Homepage**: Displays a list of all products with a look-ahead search bar to filter products by name.
- **Product Page**: Displays detailed information for individual products, including a "Add to Cart" button and product reviews.
- **Cart Page**: Lists all items in the cart and shows the total cost. Includes a "Checkout" button.
- **Checkout Success Page**: Confirms the successful checkout and clears the cart.
- **Contact Page**: Contains a contact form with validation for Full name, Subject, Email, and Body.
- **Responsive Design**: The design adapts to different screen sizes.

## Pages

1. **Homepage**:
   - Displays a list of products.
   - Features a search bar to filter products by name.
   - Clicking on a product redirects to the Product Page.

2. **Product Page**:
   - Displays product details (title, description, image).
   - Allows adding the product to the cart.
   - Shows discount information if available.

3. **Cart Page**:
   - Lists items in the cart with total cost.
   - Includes a Checkout button that redirects to the Checkout Success page.

4. **Checkout Success Page**:
   - Displays a success message and clears the cart.
   - Includes a link to return to the store.

5. **Contact Page**:
   - Features a form with validation for Full name, Subject, Email, and Body.

## Technologies Used

- **React** for building the UI.
- **React Router** for navigation between pages.
- **Styled-Components** (or CSS Modules) for styling.
- **React State** for managing products and cart data.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>

2. Install dependenvies
   ```bash
   npm install

3. Development
   ```bash
   npm start
