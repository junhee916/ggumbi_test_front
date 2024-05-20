import React, { useEffect, useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [sdkReady, setSdkReady] = useState(false);

  const scrollPage = (direction) => {
    const distance = window.innerHeight;
    window.scrollBy({
      top: direction === "up" ? -distance : distance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://jp-bots.kore.ai/webclient/UI/dist/kore-ai-sdk.min.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://jp-bots.kore.ai/api/platform/websdkjs/6366c7e89be949e9acd5b0f55e7f0d9d299b7263dd524539975c88aaa33920edst6d";
    script.async = true;
    script.onload = () => {
      if (window.KoreSDK) {
        setSdkReady(true);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const showChat = () => {
    if (sdkReady && window.KoreSDK.show) {
      window.KoreSDK.show(window.KoreSDK.chatConfig);
    } else {
      console.error("KoreSDK is not ready or show is not a function");
    }
  };

  return (
    <div className="sidebar">
      <button onClick={showChat}>test</button>
      <button onClick={() => scrollPage("up")} className="up-arrow">
        ▲
      </button>
      <button onClick={() => scrollPage("down")} className="down-arrow">
        ▼
      </button>
    </div>
  );
}

export default Sidebar;
