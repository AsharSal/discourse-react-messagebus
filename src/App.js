// src/App.js
import NotificationBell from "./NotificationBell";

function App() {
  const userId = 1; // Replace with your logged-in Discourse user ID

  return (
    <div className="App">
      <h1>Discourse Real-Time Notification Demo</h1>
      <NotificationBell userId={userId} />
    </div>
  );
}

export default App;
