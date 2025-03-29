export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2", // New primary color
        secondary: "#D0021B", // New secondary color
        background: "#F0F2F5", // Softer background
        card: "#FFFFFF", // White cards
        text: "#333333", // Dark text for readability
        border: "#E0E0E0", // Light gray for borders
      },
      spacing: {
        18: "4.5rem", // Custom spacing for better padding
      },
      borderRadius: {
        xl: "1rem", // Softer rounded corners
      },
      boxShadow: {
        custom: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
      },
      backgroundImage: {
        'kanban-bg': "url('/assets/images.jpeg')", // Background image for the board
      },
    },
  },
  plugins: [],
};
