import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { menuData } from "../../data/menuData";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AZ_MENU_NAMES: Record<string, string> = {
  lentil: "Mərci şorbası",
  creamyMushroom: "Qaymaqlı göbələk şorbası",
  dushbere: "Düşbərə",
  tomato: "Tomat şorbası",
  chicken: "Toyuq şorbası",
  rice: "Düyü",
  grilledVegetables: "Tərəvəz qril",
  homePotatoes: "Evsayağı kartof",
  fries: "Kartof fri",
  caesarChicken: "Toyuqlu sezar",
  caesarShrimp: "Karidəsli sezar",
  crispyEggplant: "Xırtıldayan badımcan",
  greek: "Yunan salatı",
  tomatoCranberry: "Tomat-moruq salatı",
  tuna: "Tuna salatı",
  shepherd: "Çoban salatı",
  grill: "Qril salatı",
  quinoaAthlete: "Atletik kinoa salatı",
  pomegranateBeef: "Narlı mal əti",
  lokumSteak: "Lokum biftek",
  beefLanget: "Mal əti langet",
  beefStroganoff: "Mal əti stroqanof",
  schnitzel: "Şnitzel",
  tabaka: "Tabaka toyuq",
  langet: "Toyuq langet",
  stroganoff: "Toyuq stroqanof",
  beefSaj: "Sac (mal əti)",
  chickenSaj: "Sac (toyuq)",
  lambSaj: "Sac (quzu)",
  mixedSaj: "Qarışıq sac",
  troutGrill: "Alabalıq qril",
  salmonGrill: "Somon qril",
  seaBreamGrill: "Çipura qril",
  arrabbiata: "Arrabbiata pasta",
  bolognese: "Bolonez pasta",
  alfredo: "Alfredo pasta",
  carbona: "Karbonara pasta",
  mixed: "Qarışıq pizza",
  bbq: "BBQ pizza",
  fourCheese: "Dörd pendirli pizza",
  margherita: "Marqerita pizza",
  pepperoni: "Pepperoni pizza",
  mexicano: "Meksikana",
  caesar: "Sezar pizza",
  cheese: "Pendirli burger",
  lokum: "Lokum burger",
  specialBeefWrap: "Xüsusi mal əti lavaş",
  specialChickenWrap: "Xüsusi toyuq lavaş",
  chickenShawarma: "Toyuq şavarma",
  beefShawarma: "Mal əti şavarma",
  caesarRoll: "Sezar roll",
  chickenBurrito: "Toyuq burrito",
  beefBurrito: "Mal əti burrito",
  clubSandwich: "Klab sendviç",
  cheeseToast: "Pendirli tost",
  sucukToast: "Sucuqlu tost",
  chickenNuggets: "Toyuq naqets",
  vanillaCheesecake: "Vanil çizkek",
  strawberryCheesecake: "Çiyələkli çizkek",
  chocolateCheesecake: "Şokoladlı çizkek",
  honeyCake: "Bal tort",
  tiramisu: "Tiramisu",
  sanSebastian: "San Sebastian",
  fruitPlate: "Meyvə tabağı",
  sausagePlate: "Kolbasa tabağı",
  stringCheese: "Sap pendiri",
  smokedQuail: "Hisə verilmiş bildirçin",
  friedCheese: "Qızardılmış pendiri",
  smokedMeat: "Hisə verilmiş ət",
  friedDushbere: "Qızardılmış düşbərə",
  smokedTrout: "Hisə verilmiş alabalıq",
  iveriaSausage: "İveria kolbasası",
  chickpeas: "Noxud",
  lemon: "Limon",
  pistachio: "Fıstıq",
  chips: "Çips",
  beerSet: "Pivə dəsti",
  russianSet: "Rus dəsti",
};

function buildDetailedMenuSummary(): string {
  const lines: string[] = [];
  for (const category of menuData) {
    for (const item of category.items) {
      const keyParts = item.nameKey.split(".");
      const rawKey = keyParts[keyParts.length - 2] || "";
      const name = AZ_MENU_NAMES[rawKey] || rawKey;
      lines.push(`- ${name}: ${item.price}₼${item.weight ? ` (${item.weight})` : ""}`);
    }
  }
  return lines.join("\n");
}

const DETAILED_MENU = buildDetailedMenuSummary();

const SYSTEM_PROMPT = `Sən GREEN CAFE restoranının rəsmi AI köməkçisisən. Sənin adın "Green Cafe Köməkçisi"dir.

MƏNYU:
${DETAILED_MENU}

ƏSAS QAYDALAR:
- Yalnız Green Cafe menyusu, qiymətlər, saatlar və ünvan haqqında danış
- Başqa restoran, yemək yeri və ya rəqib haqqında heç vaxt məlumat vermə
- Əgər sənə Green Cafe ilə əlaqəsiz sual versələr, mehriban şəkildə yalnız Green Cafe haqqında kömək edə biləcəyini de
- Həmişə Azərbaycan dilində cavab ver (müştəri başqa dildə yazarsa, həmin dildə cavab ver)
- Qısa, mehriban və praktik ol (2-4 cümlə)
- Əhval-ruhiyyəyə görə tövsiyə et: yorğun → yüngül yeməklər; ac → doyurucu yeməklər; şirin istəyir → desertlər
- Büdcəyə görə tövsiyə et
- Qiymətləri həmişə ₼ ilə göstər

RESTORAN MƏLUMATLARI:
- Saat: 09:00–23:00
- Ünvan: Şıxov qəs., Green City Resort
- Telefon: bilinmir (müştərini rəsmi kanallardan əlaqə saxlamağa yönləndir)

QADAĞAN:
- Siyasət, xəbər, texnologiya və digər mövzularda danışma
- Özünü başqa AI (ChatGPT, Gemini və s.) kimi təqdim etmə
- Green Cafe ilə əlaqəsiz tövsiyə vermə
`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Salam! 👋 Mən Green Cafe-nin AI köməkçisiyəm. Menyu haqqında sual verin, əhval-ruhiyyənizə və ya büdcənizə görə tövsiyə edim!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const transcribeAudio = async (audioBlob: Blob) => {
    setIsTranscribing(true);
    try {
      const formData = new FormData();
      formData.append("file", audioBlob, "audio.webm");
      formData.append("model", "whisper-large-v3");
      formData.append("language", "az");

      const response = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (data.text) {
        setInput(data.text);
      }
    } catch {
      alert("Səs tanınmadı, yenidən cəhd edin.");
    } finally {
      setIsTranscribing(false);
    }
  };

  const toggleListening = async () => {
    if (isListening) {
      mediaRecorderRef.current?.stop();
      setIsListening(false);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        await transcribeAudio(audioBlob);
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setIsListening(true);
    } catch {
      alert("Mikrofona icazə verilmədi.");
    }
  };

  const speak = (text: string) => {
    if (!ttsEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "az-AZ";
    utterance.rate = 0.9;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isLoading) return;

    setInput("");
    const userMessage: Message = { role: "user", content: messageText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          ],
        }),
      });

      const data = await response.json();
      const assistantText =
        data.choices?.[0]?.message?.content || "Bağışlayın, cavab verə bilmədim.";

      setMessages((prev) => [...prev, { role: "assistant", content: assistantText }]);
      speak(assistantText);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Xəta baş verdi. Bir az sonra yenidən cəhd edin." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickMessages = [
    "Bu gün çox acam 🍽️",
    "Yüngül bir şey istəyirəm",
    "Büdcəm 10₼-dir",
    "Şirin bir şey tövsiyə et 🍰",
  ];

  const micBusy = isListening || isTranscribing;

  return (
    <>
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-stone-900 text-white shadow-lg transition hover:bg-stone-700 active:scale-95"
        aria-label="AI köməkçi"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex w-[340px] flex-col rounded-2xl border border-stone-200 bg-[#f6f6f2] shadow-2xl sm:w-[380px]">
          <div className="flex items-center justify-between rounded-t-2xl border-b border-stone-200 bg-stone-900 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <MessageCircle size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">AI Köməkçi</p>
                <p className="text-[10px] text-stone-400">Green Cafe</p>
              </div>
            </div>
            <button
              onClick={() => {
                setTtsEnabled((v) => !v);
                if (isSpeaking) window.speechSynthesis?.cancel();
              }}
              className="rounded-full p-1.5 text-stone-400 transition hover:bg-white/10 hover:text-white"
              title={ttsEnabled ? "Səsi söndür" : "Səsi aç"}
            >
              {ttsEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
          </div>

          <div className="flex h-72 flex-col gap-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${msg.role === "user"
                      ? "bg-stone-900 text-white"
                      : "bg-white text-stone-800 shadow-sm"
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-stone-400"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="border-t border-stone-100 px-4 py-3">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-stone-400">
                Sürətli suallar
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickMessages.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-700 transition hover:bg-stone-900 hover:text-white"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 border-t border-stone-200 p-3">
            <button
              onClick={toggleListening}
              disabled={isTranscribing}
              className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition ${isListening
                  ? "animate-pulse bg-red-500 text-white"
                  : isTranscribing
                    ? "bg-amber-400 text-white"
                    : "bg-stone-100 text-stone-500 hover:bg-stone-200"
                }`}
              title={isListening ? "Dayandır" : isTranscribing ? "Çevrilir..." : "Səslə yaz"}
            >
              {micBusy ? <MicOff size={16} /> : <Mic size={16} />}
            </button>

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                isListening
                  ? "Danışın..."
                  : isTranscribing
                    ? "Çevrilir..."
                    : "Mesaj yazın..."
              }
              disabled={isLoading || isTranscribing}
              className="min-w-0 flex-1 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300 disabled:opacity-60"
            />

            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isLoading}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-stone-900 text-white transition hover:bg-stone-700 disabled:opacity-40"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}