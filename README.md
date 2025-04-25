# **KindHive - Volunteer Management Platform**  

## **Purpose**  
KindHive is a volunteer management platform designed to connect organizers with volunteers. It enables users to create, manage, and participate in volunteer opportunities effortlessly.  

## Screenshots
https://i.ibb.co.com/LXq3b5rx/Screenshot-2025-02-05-195133.png

## **Live URL**  
https://volunteer-management.surge.sh/  

## **Key Features**  
- **Volunteer Management:**  
  - Add, update, and delete volunteer need posts.  
  - Track volunteer requests and manage them through a dashboard.  
- **Dynamic Pages:**  
  - Volunteer need posts are displayed dynamically with detailed information.  
  - Filtering and searching for volunteer opportunities.  
- **Responsive Design:**  
  - Fully responsive layout optimized for all devices.  
- **Interactive Features:**  
  - “Be a Volunteer” button for user participation.  
  - Confirmation modals for actions like cancellations.  
- **Data Management:**  
  - Data saved and managed using MongoDB, ensuring a smooth and secure backend.  
- **Additional Features:**  
  - Meaningful error handling for empty data scenarios.  
  - Dynamic page titles using `react-helmet`.  

## **Tech stack Used**  
Here are the key npm packages used in the project:  
1. **React Router Dom**  
   - For handling routing and dynamic URL-based navigation.  
2. **React Helmet**  
   - For dynamically setting page titles and meta tags.  
3. **Tailwind CSS**  
   - For creating a responsive and visually appealing UI.  
4. **DaisyUI**  
   - A Tailwind CSS plugin to style components easily.  
5. **Axios**  
   - For handling API requests and managing data fetching.  
6. **React Toastify**  
   - To show success/error messages with elegant toast notifications.  
7. **Animate.css**  
   - For adding smooth animations to UI elements.

  ## Dependencies

 "dependencies": {
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-datepicker": "^7.5.0",
    "react-dom": "^18.3.1",
    "react-helmet": "^6.1.0",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.1",
    "react-toastify": "^11.0.2",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.15.9",
    "typewriter-effect": "^2.21.0"
  },

## **Setup Instructions**  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/sabila11/volunteer-management  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Start the development server:  
   ```bash  
   npm start  
   ```  

