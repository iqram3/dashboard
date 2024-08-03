## Overview

The Dashboard Application is designed to provide a comprehensive overview of business metrics, recent orders, and customer feedback. It features a clean, modern UI that is responsive across all devices. The application is built using ReactJS for the frontend and styled with TailwindCSS for easy customization and scalability.

## Features

- **Responsive Design:** Ensures compatibility across various screen sizes and devices.
- **Activity Charts:** Visual representation of activities over different time periods (hourly, daily, weekly, monthly) using Chart.js.
- **Recent Orders:** Displays a list of recent orders with customer details, order number, amount, and status.
- **Customer Feedback:** Shows customer feedback with ratings and comments.
- **Key Performance Indicators:** Displays metrics such as total orders, delivered orders, canceled orders, and total revenue.
- **Notification Indicator:** Includes a notification bell with a green dot to indicate new notifications.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/iqram3/dashboard

   cd dashboard
   npm install
   npm start
   The application will be available at http://localhost:3000

## Usage

   After starting the development server, you can view the dashboard in your web browser. The application will provide you with an overview of recent activities, orders, customer feedback, and key performance metrics.

   **Components**
## Header
    The header includes a search bar and icons for messages, settings, notifications, and the user profile. A green dot indicates new notifications.

## Activity Chart
    Displays activity data in a bar chart format with options to switch between hourly, daily, weekly, and monthly views.

## Recent Orders
    Shows a table of recent orders with customer names, order numbers, amounts, and statuses. The table is hidden on smaller screens and replaced with a more compact view.

## Customer Feedback
    Lists customer feedback with their profile images, names, comments, and ratings.

## Key Performance Indicators (Cards)
    Four cards display key metrics: Total Orders, Total Delivered, Total Cancelled, and Total Revenue.

## Net Profit Card
    Shows the net profit value and percentage.

## Goals
    Displays the progress towards various business goals.  

## Technologies
 - **ReactJS:** A JavaScript library for building user interfaces.
 - **TailwindCSS:** A utility-first CSS framework for rapid UI development.
 - **Chart.js:** A JavaScript library for creating charts.
 - **React Icons:** For including icons in React applications.
  
## License
    This project is licensed under the MIT License. See the LICENSE file for details.
