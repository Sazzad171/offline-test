import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const updateStatus = () => setOnline(navigator.onLine);
    updateStatus(); // run once

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return online;
}
