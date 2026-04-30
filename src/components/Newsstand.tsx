import { useNewsstandStore } from '../store/useNewsstandStore';

export default function Newsstand() {
  const { tab, viewMode } = useNewsstandStore();

  return (
    <div className="mx-auto w-[930px] pt-12 pb-24">
      {/* 
        이후 구현될 영역들을 위한 Placeholder 
        여백 규칙(8px 단위) 적용: pt-12(48px), pb-24(96px), mb-8(32px) 등
      */}
      
      {/* 상단 Header 영역 Placeholder */}
      <header className="h-[48px] flex items-center justify-between mb-8">
        <div className="font-serif text-2xl font-bold text-ink">뉴스스탠드</div>
        <div className="text-sub font-medium">YYYY. MM. DD. 요일</div>
      </header>

      {/* Ticker 영역 Placeholder */}
      <section className="flex gap-4 mb-8">
        <div className="flex-1 h-[48px] bg-soft border border-line flex items-center px-4 rounded-sm text-sub">
          왼쪽 티커 영역
        </div>
        <div className="flex-1 h-[48px] bg-soft border border-line flex items-center px-4 rounded-sm text-sub">
          오른쪽 티커 영역
        </div>
      </section>

      {/* TabBar & Toggle 영역 Placeholder */}
      <nav className="flex items-center justify-between h-[48px] mb-6">
        <div className="flex items-center gap-6 font-bold text-lg">
          <button className={tab === 'all' ? 'text-ink' : 'text-mute'}>전체 언론사</button>
          <button className={tab === 'sub' ? 'text-ink' : 'text-mute'}>내가 구독한 언론사</button>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-6 h-6 bg-line rounded-sm flex items-center justify-center text-xs">L</button>
          <button className="w-6 h-6 bg-accent text-card rounded-sm flex items-center justify-center text-xs">G</button>
        </div>
      </nav>

      {/* 핵심 뷰 영역 (Grid or List) Placeholder */}
      <main className="min-h-[500px] border border-line bg-card">
        <div className="flex items-center justify-center h-full min-h-[500px] text-mute">
          {viewMode === 'grid' ? '그리드 뷰 컴포넌트가 들어갈 자리' : '리스트 뷰 컴포넌트가 들어갈 자리'}
        </div>
      </main>
    </div>
  );
}
