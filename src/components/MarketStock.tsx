"use client";
import { useEffect } from "react";
import React from "react";

export default function MarketStock() {
  useEffect(() => {
    // Cek apakah script sudah ada untuk menghindari duplikasi
    const existingScript = document.getElementById("tradingview-widget-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "tradingview-widget-script"; // Tambahkan ID untuk menghindari duplikasi
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "dark",
        dateRange: "12M",
        showChart: true,
        locale: "id",
        isTransparent: false,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        width: "100%",
        height: "450",
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(42, 46, 57, 0)",
        scaleFontColor: "rgba(209, 212, 220, 1)",
        belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
        tabs: [
          {
            title: "Indices",
            symbols: [
              { s: "FOREXCOM:SPXUSD", d: "S&P 500 Index" },
              { s: "FOREXCOM:NSXUSD", d: "US 100 Cash CFD" },
              { s: "FOREXCOM:DJI", d: "Dow Jones Industrial Average Index" },
              { s: "INDEX:NKY", d: "Nikkei 225" },
              { s: "INDEX:DEU40", d: "DAX Index" },
              { s: "FOREXCOM:UKXGBP", d: "FTSE 100 Index" },
              { s: "IDX:BBCA", d: "BBCA" },
            ],
          },
          {
            title: "Futures",
            symbols: [
              { s: "CME_MINI:ES1!", d: "S&P 500" },
              { s: "CME:6E1!", d: "Euro" },
              { s: "COMEX:GC1!", d: "Gold" },
              { s: "NYMEX:CL1!", d: "WTI Crude Oil" },
              { s: "NYMEX:NG1!", d: "Gas" },
              { s: "CBOT:ZC1!", d: "Corn" },
            ],
          },
          {
            title: "Bonds",
            symbols: [
              { s: "CBOT:ZB1!", d: "T-Bond" },
              { s: "CBOT:UB1!", d: "Ultra T-Bond" },
              { s: "EUREX:FGBL1!", d: "Euro Bund" },
              { s: "EUREX:FBTP1!", d: "Euro BTP" },
              { s: "EUREX:FGBM1!", d: "Euro BOBL" },
            ],
          },
          {
            title: "Forex",
            symbols: [
              { s: "FX:EURUSD", d: "EUR to USD" },
              { s: "FX:GBPUSD", d: "GBP to USD" },
              { s: "FX:USDJPY", d: "USD to JPY" },
              { s: "FX:USDCHF", d: "USD to CHF" },
              { s: "FX:AUDUSD", d: "AUD to USD" },
              { s: "FX:USDCAD", d: "USD to CAD" },
            ],
          },
        ],
      });
      const widgetContainer = document.getElementById(
        "tradingview-widget-container"
      );
      if (widgetContainer) {
        widgetContainer.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="p-8">
      <p className="text-4xl font-bold py-4">Market Overviews</p>
      <div
        className="tradingview-widget-container"
        id="tradingview-widget-container"
      ></div>
    </div>
  );
}
