/* global MessageBus */
import { useEffect, useState } from "react";

export default function NotificationBell({ userId }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const channel = `/notification/2`;
    const handler = (msg) => {
      console.log("Received:", msg);
    };

    MessageBus.subscribe(channel, handler, -1);
    return () => MessageBus.unsubscribe(channel, handler);
  }, [userId]);

  return (
    <div style={{ padding: "10px", fontSize: "20px" }}>
      🔔 posts count: {count}
    </div>
  );
}
