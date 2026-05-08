import React, { useState, useEffect } from 'react';

const CATEGORIES = ['종합/경제', '방송/통신', 'IT', '영자지', '스포츠/연예', '매거진/전문지', '지역'];

// 임시 리스트 뷰 목업 데이터
const MOCK_PRESS_DETAIL = {
  id: 'press_1',
  name: '서울경제',
  date: '2023. 02. 10. 18:53 편집',
  headline: {
    title: '동네 소아과도 안심 못한다… 영유아 접종, 이젠 맞을 수 있을까?',
    imageUrl: 'https://via.placeholder.com/400x200/F5F7F9/5F6E76?text=Headline+Image'
  },
  articles: [
    '기사 제목 1이 들어갈 자리입니다.',
    '기사 제목 2가 들어갈 자리입니다.',
    '기사 제목 3이 들어갈 자리입니다.',
    '기사 제목 4가 들어갈 자리입니다.',
    '기사 제목 5가 들어갈 자리입니다.',
    '기사 제목 6이 들어갈 자리입니다.'
  ]
};

export default function PressView() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  // 6초 프로그레스 바 애니메이션 및 자동 탭 전환 로직
  useEffect(() => {
    setProgress(0);
    let currentProgress = 0;
    const duration = 6000;
    const interval = 50; 
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      currentProgress += step;
      
      if (currentProgress >= 100) {
        // 100% 도달 시 다음 탭으로 자동 전환. (이 상태 변경이 useEffect를 재실행시켜 진행도를 0으로 초기화함)
        setActiveTab((prevTab) => (prevTab + 1) % CATEGORIES.length);
      } else {
        setProgress(currentProgress);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <div className="w-full h-[384px] flex flex-col bg-card">
      {/* 상단 카테고리 탭 영역 */}
      <div className="flex h-10 bg-soft border-b border-line">
        {CATEGORIES.map((cat, idx) => {
          const isActive = activeTab === idx;
          return (
            <div
              key={cat}
              onClick={() => setActiveTab(idx)}
              className={`relative flex-1 flex items-center justify-center text-sm cursor-pointer overflow-hidden
                ${isActive ? 'font-bold text-card bg-accent' : 'text-sub hover:bg-line/20'}
                border-r border-line last:border-r-0
              `}
            >
              <div className="z-10 flex gap-2 items-center">
                <span>{cat}</span>
                {isActive && <span className="text-xs">1 / 1</span>}
              </div>
              {/* 프로그레스 바 영역 (활성 탭일 때만 렌더링) */}
              {isActive && (
                <div 
                  className="absolute left-0 top-0 h-full bg-accent-deep transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* 하단 기사 렌더링 영역 */}
      <div className="flex flex-1 p-6 gap-8">
        {/* 좌측 메인 헤드라인 (로고, 날짜, 구독 버튼 + 메인 기사 이미지) */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="font-bold text-ink">{MOCK_PRESS_DETAIL.name}</span>
            <span className="text-xs text-mute">{MOCK_PRESS_DETAIL.date}</span>
            <button className="px-3 py-1.5 text-xs border border-line rounded-full text-sub hover:bg-soft transition-colors flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2.5V9.5M2.5 6H9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              구독하기
            </button>
          </div>
          <div className="flex-1 group cursor-pointer flex flex-col">
            <div className="w-full h-[200px] overflow-hidden border border-line bg-soft mb-3">
              <img 
                src={MOCK_PRESS_DETAIL.headline.imageUrl} 
                alt="Headline" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <span className="text-ink text-base font-medium group-hover:underline line-clamp-2">
              {MOCK_PRESS_DETAIL.headline.title}
            </span>
          </div>
        </div>

        {/* 우측 6개의 일반 기사 리스트 */}
        <div className="flex-1 flex flex-col justify-between py-2 mt-8">
          <ul className="flex flex-col gap-4">
            {MOCK_PRESS_DETAIL.articles.map((title, idx) => (
              <li key={idx} className="text-ink hover:underline cursor-pointer truncate flex items-center gap-2">
                <span className="text-sub text-xs">●</span>
                {title}
              </li>
            ))}
          </ul>
          <div className="text-sub text-sm hover:underline cursor-pointer mt-4 font-medium">
            {MOCK_PRESS_DETAIL.name} 언론사에서 직접 편집한 뉴스입니다.
          </div>
        </div>
      </div>
    </div>
  );
}
