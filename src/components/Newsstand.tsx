import { useNewsstandStore } from '../store/useNewsstandStore';
import Header from './Header';
import Ticker from './Ticker';

export default function Newsstand() {
  const { tab, viewMode } = useNewsstandStore();

  return (
    <div className="mx-auto w-[930px] pt-12 pb-24">
      <Header />
      <Ticker />

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
