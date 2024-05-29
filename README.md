# Server Dashboard

This is a React application that provides a dashboard for monitoring and managing cloud resources. It includes features such as resource listing, real-time notifications, and various charts for visualizing resource usage.

## Live Demo

You can find a live demo of the application hosted on Vercel at [https://server-dashboard-five.vercel.app/](https://server-dashboard-five.vercel.app/).

## Running the Application

To run the application locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-repo/server-dashboard.git
```

2. Navigate to the project directory:

```
cd server-dashboard
```

3. Install the dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Design Principles and Technical Decisions

### Component Structure

The application follows a modular component structure, with each feature or UI element contained within its own component directory. This promotes code reusability, maintainability, and separation of concerns.

### Styling

The application uses Tailwind CSS for styling, which provides a set of utility classes that can be composed to build complex user interfaces. This approach allows for rapid prototyping and easy maintenance of styles.

### Data Visualization

The application utilizes the Recharts library for creating data visualizations such as line charts, bar charts, and pie charts. This library provides a simple and intuitive API for rendering various chart types.

### Notifications

Real-time notifications are handled using the `react-toastify` library, which provides a lightweight and customizable solution for displaying toast notifications.

### Mock Data

The application uses mock data for resources and notifications, which is generated and imported from the `utils/mockData` file. In a real-world scenario, this data would be fetched from an API or a database.
