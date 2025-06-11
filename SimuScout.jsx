// SimuScout Türkçe Demo – Hızlı Prototip (2 oyuncu, grafik + yapay zekâ örneği)

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const mockData = {
  "Tammy Abraham": {
    gol: 16,
    asist: 3,
    pas: 72,
    xg: 12.3,
    havaTopu: 55,
  },
  "Rafa Silva": {
    gol: 10,
    asist: 9,
    pas: 85,
    xg: 8.7,
    havaTopu: 15,
  },
};

const aiResponse = {
  "Tammy Abraham": `Abraham, Beşiktaş'ın 4-2-3-1 sisteminde pivot forvet olarak ideal bir seçenek. Yaklaşık 15-18 gol arası katkı verebilir. Hava toplarında etkili olması, duran toplarda avantaj sağlar. Ancak savunma presine katkısı sınırlı.`,
  "Rafa Silva": `Rafa Silva, Beşiktaş'a transfer olursa top tekniği ve pas yüzdesiyle yaratıcı orta saha rolüne büyük katkı sağlar. 8-10 gol, 10+ asist potansiyeli taşır. Ancak fiziksel ikili mücadelelerde zorlanabilir.`,
};

export default function SimuScout() {
  const [player1, setPlayer1] = useState("Tammy Abraham");
  const [player2, setPlayer2] = useState("Rafa Silva");
  const [showAI, setShowAI] = useState(false);

  const data = {
    labels: ["Gol", "Asist", "Pas %", "xG", "Hava Topu"],
    datasets: [
      {
        label: player1,
        data: Object.values(mockData[player1]),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: player2,
        data: Object.values(mockData[player2]),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">SimuScout TR – Demo Karşılaştırma</h1>

      <div className="grid grid-cols-2 gap-4">
        <Input value={player1} onChange={(e) => setPlayer1(e.target.value)} placeholder="Oyuncu 1" />
        <Input value={player2} onChange={(e) => setPlayer2(e.target.value)} placeholder="Oyuncu 2" />
      </div>

      <Card>
        <CardContent>
          <Bar data={data} />
        </CardContent>
      </Card>

      <Button onClick={() => setShowAI(true)}>AI Simülasyon Tahminini Göster</Button>

      {showAI && (
        <div className="space-y-4 p-4 bg-gray-100 rounded-xl">
          <h2 className="text-xl font-semibold">Yapay Zekâ Tahminleri</h2>
          <p><strong>{player1}:</strong> {aiResponse[player1]}</p>
          <p><strong>{player2}:</strong> {aiResponse[player2]}</p>
        </div>
      )}
    </div>
  );
}
