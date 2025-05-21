
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EnderChatDemo() {
  const [messages, setMessages] = useState([
    { sender: "Chatkız", text: "Merhaba! Ben Chatkız. Ne hakkında konuşmak istersin? 😊" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { sender: "Sen", text: input },
      { sender: "Chatkız", text: "Hmm... Çok ilginç! Daha fazlasını anlatır mısın? 😄" },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">EnderChat</h1>
      <p className="mb-6 text-center text-lg">Chatkız burada, sohbet hazır! 💬</p>

      <Card className="w-full max-w-md mb-8">
        <CardContent className="space-y-4 max-h-[400px] overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "Chatkız" ? "text-left" : "text-right"}>
              <span className="block font-semibold">{msg.sender}</span>
              <span className="block bg-white/10 rounded-lg p-2 mt-1 inline-block">{msg.text}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="w-full max-w-md flex gap-2 mb-12">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Mesajını yaz..."
        />
        <Button onClick={handleSend}>Gönder</Button>
      </div>

      <Card className="w-full max-w-md">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Bizimle İletişime Geç</h2>
          <Input placeholder="Adınız" />
          <Input placeholder="E-posta adresiniz" />
          <Input placeholder="Mesajınız" />
          <Button className="w-full">Gönder</Button>
        </CardContent>
      </Card>
    </div>
  );
}
