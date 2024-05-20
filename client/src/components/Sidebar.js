import React, { useEffect, useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [sdkReady, setSdkReady] = useState(false);
  const [sdkError, setSdkError] = useState(false);

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
      setSdkReady(true);
      if (window.KoreSDK && window.KoreSDK.show) {
        window.KoreSDK.show(window.KoreSDK.chatConfig); // SDK 준비 완료 후 자동으로 챗 인터페이스 열기
      }
    };
    script.onerror = () => {
      console.error("Failed to load the Kore SDK");
      setSdkError(true);
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // SDK 준비 상태 감시
    if (sdkReady && window.KoreSDK && window.KoreSDK.show) {
      window.KoreSDK.show(window.KoreSDK.chatConfig);
    }
  }, [sdkReady]); // sdkReady가 변경될 때마다 실행

  return (
    <div className="sidebar">
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
