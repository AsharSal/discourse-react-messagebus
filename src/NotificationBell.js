/* global MessageBus */
import { useEffect, useState } from "react";

export default function NotificationBell({ userId }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const channel = `/topic/17`;
    const handler = (msg) => {
      console.log("Received:", msg);
      if (msg.post_number === undefined) {
        console.log("Received without post_number:", msg);
        return;
      }
      setCount(msg.post_number)
    };

    MessageBus.subscribe(channel, handler, 0);
    return () => MessageBus.unsubscribe(channel, handler);
  }, [userId]);

  return (
    <div style={{ padding: "10px", fontSize: "20px" }}>
      🔔 posts count: {count}
    </div>
  );
}
