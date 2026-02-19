import { useState, useEffect } from "react";

/* ──────────────────────────────────────────────
   앱 데이터 배열 — 확장 시 여기에 객체 추가
   ────────────────────────────────────────────── */
const apps = [
  {
    name: "챗GPT",
    gradient: "from-[#10a37f] to-[#1a7f5a]",
    url: "https://chat.openai.com",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path
          d="M20 6C12.268 6 6 11.373 6 18c0 3.667 1.8 6.933 4.6 9.2L9.2 33l6.133-3.067C16.8 30.6 18.333 31 20 31c7.733 0 14-5.373 14-12S27.733 6 20 6z"
          fill="rgba(255,255,255,0.9)"
        />
        <text
          x="20"
          y="22"
          textAnchor="middle"
          fill="#10a37f"
          fontSize="11"
          fontWeight="700"
          fontFamily="-apple-system, sans-serif"
        >
          G
        </text>
      </svg>
    ),
  },
  {
    name: "클로드",
    gradient: "from-[#d4a574] to-[#c4956a]",
    url: "https://claude.ai",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path
          d="M20 4l4.5 11.5L36 20l-11.5 4.5L20 36l-4.5-11.5L4 20l11.5-4.5z"
          fill="rgba(255,255,255,0.85)"
        />
        <text
          x="20"
          y="24"
          textAnchor="middle"
          fill="#c4956a"
          fontSize="12"
          fontWeight="700"
          fontFamily="-apple-system, sans-serif"
        >
          C
        </text>
      </svg>
    ),
  },
  {
    name: "제미나이",
    gradient: "from-[#4285f4] to-[#669df6]",
    url: "https://gemini.google.com",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path
          d="M20 4C20 4 30 14 30 20C30 26 24 34 20 36C16 34 10 26 10 20C10 14 20 4 20 4Z"
          fill="rgba(255,255,255,0.9)"
        />
        <path
          d="M20 4C20 4 10 14 10 20C10 26 16 34 20 36C24 34 30 26 30 20C30 14 20 4 20 4Z"
          fill="rgba(255,255,255,0.5)"
        />
        <text
          x="20"
          y="24"
          textAnchor="middle"
          fill="#4285f4"
          fontSize="11"
          fontWeight="700"
          fontFamily="-apple-system, sans-serif"
        >
          G
        </text>
      </svg>
    ),
  },
  {
    name: "퍼플렉시티",
    gradient: "from-[#20b8cd] to-[#1a9aab]",
    url: "https://perplexity.ai",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="18" cy="18" r="9" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none" />
        <line x1="25" y1="25" x2="33" y2="33" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" />
        <text
          x="18"
          y="22"
          textAnchor="middle"
          fill="rgba(255,255,255,0.9)"
          fontSize="10"
          fontWeight="700"
          fontFamily="-apple-system, sans-serif"
        >
          P
        </text>
      </svg>
    ),
  },
  {
    name: "스타일 변환",
    gradient: "from-[#e44d90] to-[#c13584]",
    url: "https://260216-image-style-transfer.vercel.app/",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="6" width="14" height="18" rx="2" fill="rgba(255,255,255,0.5)" />
        <rect x="18" y="16" width="14" height="18" rx="2" fill="rgba(255,255,255,0.9)" />
        <path d="M15 15l10 10" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="15" cy="15" r="3" fill="rgba(255,255,255,0.9)" />
        <text
          x="25"
          y="29"
          textAnchor="middle"
          fill="#c13584"
          fontSize="9"
          fontWeight="700"
          fontFamily="-apple-system, sans-serif"
        >
          ST
        </text>
      </svg>
    ),
  },
  {
    name: "디자인 픽",
    gradient: "from-[#f97316] to-[#ea580c]",
    url: "https://design-pick-henna.vercel.app/",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="7" y="7" width="12" height="12" rx="2" fill="rgba(255,255,255,0.9)" />
        <rect x="21" y="7" width="12" height="5" rx="1.5" fill="rgba(255,255,255,0.55)" />
        <rect x="21" y="14" width="12" height="5" rx="1.5" fill="rgba(255,255,255,0.55)" />
        <rect x="7" y="21" width="26" height="5" rx="1.5" fill="rgba(255,255,255,0.55)" />
        <rect x="7" y="28" width="12" height="5" rx="1.5" fill="rgba(255,255,255,0.55)" />
        <rect x="21" y="28" width="12" height="5" rx="1.5" fill="rgba(255,255,255,0.55)" />
        <text
          x="13"
          y="16"
          textAnchor="middle"
          fill="#ea580c"
          fontSize="8"
          fontWeight="700"
          fontFamily="-apple-system, sans-serif"
        >
          DP
        </text>
      </svg>
    ),
  },
  {
    name: "페이지크래프트",
    gradient: "from-[#8b5cf6] to-[#6d28d9]",
    url: "https://page-craft-ai.vercel.app/",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="6" width="24" height="28" rx="3" fill="rgba(255,255,255,0.9)" />
        <path d="M14 16l-3 4 3 4" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 16l3 4-3 4" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="22" y1="14" x2="18" y2="26" stroke="#6d28d9" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────
   한국어 요일/월 매핑
   ────────────────────────────────────────────── */
const DAYS_KR = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
const MONTHS_KR = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

/* ──────────────────────────────────────────────
   메인 컴포넌트
   ────────────────────────────────────────────── */
export default function AIHub() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isWiggling, setIsWiggling] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState(null);

  // 시간 업데이트 — 매 초 갱신
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 시간 포맷 (HH:MM)
  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const timeString = `${hours}:${minutes}`;

  // 날짜 포맷 (한국어)
  const dayName = DAYS_KR[currentTime.getDay()];
  const month = MONTHS_KR[currentTime.getMonth()];
  const date = currentTime.getDate();
  const dateString = `${dayName}, ${month}월 ${date}일`;

  // 길게 누르기 핸들러 (편집 모드 토글)
  const handleLongPressStart = () => {
    const timer = setTimeout(() => {
      setIsWiggling((prev) => !prev);
    }, 600);
    setLongPressTimer(timer);
  };

  const handleLongPressEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  // 위글 모드에서 배경 클릭 시 해제
  const handleBackgroundClick = () => {
    if (isWiggling) setIsWiggling(false);
  };

  return (
    <>
      {/* CSS 키프레임 애니메이션 */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
          75% { transform: rotate(-1deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-wiggle {
          animation: wiggle 0.4s ease-in-out infinite;
        }
      `}</style>

      {/* 외부 컨테이너 — 다크 배경, 중앙 정렬 */}
      <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center p-4">
        {/* iPhone 15 Pro 디바이스 프레임 */}
        <div
          className="relative w-[393px] h-[852px] max-h-[90vh] max-w-[90vw]"
          style={{ aspectRatio: "393/852" }}
        >
          {/* 외곽 베젤 */}
          <div
            className="absolute inset-0 rounded-[50px] bg-[#1c1c1e] shadow-2xl"
            style={{
              boxShadow:
                "0 0 0 2px #2c2c2e, 0 0 0 4px #1c1c1e, 0 25px 60px rgba(0,0,0,0.6)",
            }}
          />

          {/* 내부 스크린 영역 */}
          <div
            className="absolute inset-[3px] rounded-[47px] overflow-hidden flex flex-col"
            onClick={handleBackgroundClick}
          >
            {/* 배경화면 — 수채화 하늘 (피치-라벤더-퍼플 구름) */}
            <div className="absolute inset-0">
              {/* 메인 그라데이션: 피치 → 라벤더 → 딥퍼플 */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, #e8b49a 0%, #dea68e 15%, #d4a0a0 28%, #c9a0b8 40%, #b89cc8 52%, #9b8abf 65%, #8a7bb5 75%, #7b6ba8 85%, #6d5c9a 100%)",
                }}
              />
              {/* 구름 레이어 — 하단 흰/라벤더 구름 */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(ellipse 120% 40% at 50% 95%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 30%, transparent 60%),
                    radial-gradient(ellipse 80% 35% at 20% 88%, rgba(255,255,255,0.85) 0%, rgba(230,220,240,0.5) 40%, transparent 65%),
                    radial-gradient(ellipse 90% 30% at 80% 90%, rgba(255,255,255,0.8) 0%, rgba(200,190,220,0.4) 45%, transparent 70%),
                    radial-gradient(ellipse 60% 25% at 35% 82%, rgba(180,160,200,0.6) 0%, rgba(140,120,180,0.3) 50%, transparent 70%),
                    radial-gradient(ellipse 70% 20% at 65% 85%, rgba(200,185,220,0.5) 0%, transparent 60%)
                  `,
                }}
              />
              {/* 별/반짝이 효과 — 작은 점들 */}
              <div className="absolute inset-0 overflow-hidden">
                {[
                  { top: "8%", left: "18%", size: 12, opacity: 0.8 },
                  { top: "5%", left: "72%", size: 14, opacity: 0.9 },
                  { top: "15%", left: "85%", size: 10, opacity: 0.7 },
                  { top: "22%", left: "12%", size: 8, opacity: 0.6 },
                  { top: "28%", left: "55%", size: 11, opacity: 0.7 },
                  { top: "18%", left: "42%", size: 6, opacity: 0.5 },
                  { top: "35%", left: "75%", size: 9, opacity: 0.65 },
                  { top: "32%", left: "30%", size: 7, opacity: 0.5 },
                ].map((star, i) => (
                  <svg
                    key={i}
                    className="absolute"
                    style={{ top: star.top, left: star.left, opacity: star.opacity }}
                    width={star.size}
                    height={star.size}
                    viewBox="0 0 16 16"
                    fill="white"
                  >
                    <path d="M8 0 L9 6 L16 8 L9 10 L8 16 L7 10 L0 8 L7 6 Z" />
                  </svg>
                ))}
                {/* 초승달 */}
                <svg
                  className="absolute"
                  style={{ top: "12%", left: "25%", opacity: 0.85 }}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 2A10 10 0 0 0 7 19.3 8 8 0 0 1 12 2Z" />
                </svg>
              </div>
            </div>

            {/* 콘텐츠 레이어 */}
            <div className="relative z-10 flex flex-col h-full">
              {/* ── 상태바 (Status Bar) ── */}
              <div className="flex items-center justify-between px-8 pt-4 pb-1">
                {/* 왼쪽: 시간 */}
                <span
                  className="text-sm font-semibold tracking-tight"
                  style={{ color: "#3d2b4e", textShadow: "0 0 4px rgba(255,255,255,0.3)" }}
                >
                  {timeString}
                </span>

                {/* Dynamic Island */}
                <div className="absolute left-1/2 -translate-x-1/2 top-3 w-[120px] h-[34px] bg-black rounded-full" />

                {/* 오른쪽: 시스템 아이콘 */}
                <div className="flex items-center gap-1.5">
                  {/* 셀룰러 신호 */}
                  <svg viewBox="0 0 18 14" className="w-4 h-3" fill="#3d2b4e">
                    <rect x="0" y="10" width="3" height="4" rx="0.5" opacity="1" />
                    <rect x="5" y="7" width="3" height="7" rx="0.5" opacity="1" />
                    <rect x="10" y="4" width="3" height="10" rx="0.5" opacity="1" />
                    <rect x="15" y="0" width="3" height="14" rx="0.5" opacity="0.35" />
                  </svg>
                  {/* Wi-Fi */}
                  <svg viewBox="0 0 16 12" className="w-4 h-3" fill="#3d2b4e">
                    <path
                      d="M8 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3.5-3a5.25 5.25 0 017 0 .75.75 0 01-1 1.12 3.75 3.75 0 00-5 0 .75.75 0 01-1-1.12zm-3-3a9 9 0 0113 0 .75.75 0 01-1.06 1.06 7.5 7.5 0 00-10.88 0A.75.75 0 011.5 4.5z"
                      fillRule="evenodd"
                    />
                  </svg>
                  {/* 배터리 */}
                  <svg viewBox="0 0 28 14" className="w-7 h-3.5">
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="13"
                      rx="3"
                      stroke="rgba(61,43,78,0.5)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <rect x="2" y="2" width="17" height="10" rx="1.5" fill="#34c759" />
                    <rect x="24.5" y="4" width="2" height="6" rx="1" fill="rgba(61,43,78,0.4)" />
                  </svg>
                </div>
              </div>

              {/* ── 날짜/시간 위젯 ── */}
              <div className="text-center mt-12 mb-8">
                <div
                  className="text-7xl font-bold tracking-tight"
                  style={{ color: "#3d2b4e", textShadow: "0 2px 12px rgba(255,255,255,0.3)" }}
                >
                  {timeString}
                </div>
                <div
                  className="text-lg mt-1 font-medium"
                  style={{ color: "rgba(61,43,78,0.7)", textShadow: "0 1px 6px rgba(255,255,255,0.2)" }}
                >
                  {dateString}
                </div>
              </div>

              {/* ── 앱 그리드 (홈화면 영역) ── */}
              <div className="flex-1 flex items-start justify-center px-8 pt-4">
                <div className="grid grid-cols-4 gap-x-6 gap-y-5">
                  {apps.map((app, index) => (
                    <a
                      key={app.name}
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${app.name} 열기`}
                      className={`
                        flex flex-col items-center gap-1.5 group
                        animate-fade-in-up
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                        focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                        rounded-2xl
                        ${isWiggling ? "animate-wiggle" : ""}
                      `}
                      style={{ animationDelay: `${index * 100}ms` }}
                      onMouseDown={handleLongPressStart}
                      onMouseUp={handleLongPressEnd}
                      onMouseLeave={handleLongPressEnd}
                      onTouchStart={handleLongPressStart}
                      onTouchEnd={handleLongPressEnd}
                      onClick={(e) => {
                        if (isWiggling) {
                          e.preventDefault();
                        }
                      }}
                    >
                      {/* 앱 아이콘 */}
                      <div
                        className={`
                          w-[60px] h-[60px] rounded-[14px]
                          bg-gradient-to-br ${app.gradient}
                          flex items-center justify-center
                          shadow-lg shadow-black/30
                          transition-all duration-150 ease-out
                          group-hover:brightness-110 group-hover:scale-105
                          group-active:scale-90
                        `}
                      >
                        {app.icon}
                      </div>
                      {/* 앱 이름 라벨 — 배경과 어울리는 다크 퍼플 통일 */}
                      <span
                        className="text-[11px] font-semibold text-center leading-tight"
                        style={{ color: "#3d2b4e", textShadow: "0 1px 4px rgba(255,255,255,0.4)" }}
                      >
                        {app.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* ── 하단 독 (Dock) ── */}
              <div className="mt-auto px-5 pb-2">
                <div
                  className="backdrop-blur-xl rounded-[28px] px-5 py-3 flex items-center justify-around"
                  style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
                >
                  {apps.slice(0, 4).map((app, index) => (
                    <a
                      key={`dock-${app.name}`}
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${app.name} 열기 (독)`}
                      className={`
                        flex flex-col items-center group
                        animate-fade-in-up
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                        focus-visible:ring-offset-1 focus-visible:ring-offset-transparent
                        rounded-xl
                        ${isWiggling ? "animate-wiggle" : ""}
                      `}
                      style={{ animationDelay: `${(index + apps.length) * 100}ms` }}
                      onClick={(e) => {
                        if (isWiggling) {
                          e.preventDefault();
                        }
                      }}
                    >
                      <div
                        className={`
                          w-[52px] h-[52px] rounded-[12px]
                          bg-gradient-to-br ${app.gradient}
                          flex items-center justify-center
                          shadow-md shadow-black/25
                          transition-all duration-150 ease-out
                          group-hover:brightness-110 group-hover:scale-105
                          group-active:scale-90
                        `}
                      >
                        {app.icon}
                      </div>
                    </a>
                  ))}
                </div>

                {/* ── 홈 인디케이터 바 ── */}
                <div className="flex justify-center pt-2 pb-1">
                  <div className="w-32 h-1 rounded-full" style={{ backgroundColor: "rgba(61,43,78,0.4)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
