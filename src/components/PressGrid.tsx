import React, { useMemo } from 'react';
import { useNewsstandStore } from '../store/useNewsstandStore';
import PressCell from './PressCell';
import Chevron from './Chevron';

// 임시 Mock 데이터 생성 (총 96개 - 4페이지 분량)
const MOCK_PRESS_LIST = Array.from({ length: 96 }).map((_, i) => ({
  id: `press_${i + 1}`,
  name: `언론사 ${i + 1}`,
  logo: '' 
}));

const ITEMS_PER_PAGE = 24;

export default function PressGrid() {
  const { page, setPage } = useNewsstandStore();
  
  const totalPages = Math.ceil(MOCK_PRESS_LIST.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return MOCK_PRESS_LIST.slice(start, end);
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="relative w-full h-full bg-card">
      <Chevron direction="left" onClick={handlePrev} disabled={page === 1} />
      
      {/* 6x4 그리드 레이아웃. 셀 단위 경계선을 통해 전체 테두리 효과까지 완성 */}
      <div className="grid grid-cols-6 grid-rows-4 w-full h-[384px]">
        {Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => {
          const item = currentItems[idx];
          const isLastCol = idx % 6 === 5;
          const isLastRow = Math.floor(idx / 6) === 3;
          
          return (
            <div 
              key={item?.id || `empty-${idx}`} 
              className={`flex items-center justify-center w-full h-full
                ${!isLastCol ? 'border-r border-line' : ''} 
                ${!isLastRow ? 'border-b border-line' : ''}
              `}
            >
              <PressCell press={item} />
            </div>
          );
        })}
      </div>
      
      <Chevron direction="right" onClick={handleNext} disabled={page === totalPages} />
    </div>
  );
}
