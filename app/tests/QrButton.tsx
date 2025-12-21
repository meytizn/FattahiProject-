"use client";

import { QRCodeCanvas } from "qrcode.react";
import { usePathname } from "next/navigation";

const QrButton = () => {
  const pathname = usePathname();

  // Build full URL safely on client
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}${pathname}`
      : "";

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <QRCodeCanvas value={url} size={200} />
      {/* <p style={{ marginTop: "10px" }}>{url}</p> */}
    </div>
  );
};

export default QrButton;
