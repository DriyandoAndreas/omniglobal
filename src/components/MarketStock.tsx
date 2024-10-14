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
        width: "100%",
        height: "500",
        largeChartUrl: "",
        isTransparent: false,
        showSymbolLogo: true,
        showFloatingTooltip: false,
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
            title: "Stock",
            symbols: [
              {
                s: "IDX:BBCA",
                d: "BANK CENTRAL ASIAA",
              },
              {
                s: "IDX:BBRI",
                d: "BANK RAKYAT INDONESIA",
              },
              {
                s: "NYSE:TLK",
                d: "TELKOM",
              },
              {
                s: "IDX:BMRI",
                d: "BANK MANDIRI",
              },
              {
                s: "IDX:UNVR",
                d: "UNILEVER INDONESIA",
              },
              {
                s: "IDX:ASII",
                d: "ASTRA INTERNATIONAL",
              },
              {
                s: "IDX:HMSP",
                d: "HANJAYA MANDALA SAMPOERNA",
              },
              {
                s: "IDX:TPIA",
                d: "CHANDRA ASTRI PASIFIC TBK",
              },
              {
                s: "IDX:BBNI",
                d: "BANK NEGARA INDONESIA",
              },
              {
                s: "IDX:BRPT",
                d: "BARITO PASIFIC TBK",
              },
            ],
            originalTitle: "Indices",
          },
          {
            title: "Indexs",
            symbols: [
              {
                s: "INDEX:COMPOSITE",
              },
              {
                s: "IDX:KOMPAS100",
              },
              {
                s: "SP:SPX",
              },
              {
                s: "ASX:NSX",
              },
              {
                s: "TVC:DJI",
              },
              {
                s: "INDEX:NKY",
              },
              {
                s: "HKEX:HSI1!",
              },
              {
                s: "TVC:UKX",
              },
            ],
            originalTitle: "Futures",
          },
          {
            title: "Commodity",
            symbols: [
              {
                s: "CME_MINI:ES116V2024",
              },
              {
                s: "CME:6S1!",
              },
              {
                s: "COMEX:GC1!",
              },
              {
                s: "NYMEX:CL1!",
              },
              {
                s: "NYMEX:NG1!",
              },
              {
                s: "CBOT:ZC1!",
              },
            ],
            originalTitle: "Bonds",
          },
          {
            title: "Forex",
            symbols: [
              {
                s: "FX:EURUSD",
              },
              {
                s: "OANDA:GBPUSD",
              },
              {
                s: "CAPITALCOM:USDJPY",
              },
              {
                s: "OANDA:USDCHF",
              },
              {
                s: "FX:AUDUSD",
              },
              {
                s: "OANDA:USDCAD",
              },
            ],
            originalTitle: "Forex",
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
