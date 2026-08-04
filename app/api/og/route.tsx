import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

const bold = fs.readFileSync(
  path.join(process.cwd(), "public/fonts/PlusJakartaSans-Bold.ttf")
);
const extraBold = fs.readFileSync(
  path.join(process.cwd(), "public/fonts/PlusJakartaSans-ExtraBold.ttf")
);
const logoDataUrl = `data:image/png;base64,${fs
  .readFileSync(path.join(process.cwd(), "public/logos/EmlakCRM-Logo-Beyaz.png"))
  .toString("base64")}`;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Emlak CRM Pro";
  const type = searchParams.get("type") === "blog" ? "blog" : "home";
  const pillLabel = type === "blog" ? "Emlak CRM Pro Blog" : "Emlak CRM Pro";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1200px",
          height: "630px",
          background: "radial-gradient(circle at 15% 15%, #18181B 0%, #0A0A0A 60%)",
          position: "relative",
          fontFamily: "Plus Jakarta Sans",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "8px",
            height: "630px",
            background: "#D71920",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-160px",
            width: "520px",
            height: "520px",
            borderRadius: "9999px",
            background: "#D71920",
            opacity: 0.1,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "64px 80px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUrl} width={180} height={34.6} alt="" />

          <div
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#FFFFFF",
              maxWidth: "980px",
            }}
          >
            {title}
          </div>

          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              background: "#D71920",
              color: "#FFFFFF",
              fontSize: 22,
              fontWeight: 700,
              padding: "10px 24px",
              borderRadius: "9999px",
            }}
          >
            {pillLabel}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Plus Jakarta Sans", data: bold, weight: 700, style: "normal" },
        { name: "Plus Jakarta Sans", data: extraBold, weight: 800, style: "normal" },
      ],
    }
  );
}
