import { useNewsstandStore } from '../store/useNewsstandStore';
import Header from './Header';
import Ticker from './Ticker';
import TabBar from './TabBar';
import PressGrid from './PressGrid';

export default function Newsstand() {
  const { viewMode } = useNewsstandStore();

  return (
    <div className="mx-auto w-[930px] pt-12 pb-24">
      <Header />
      <Ticker />
      <TabBar />

      {/* 핵심 뷰 영역 (Grid or List) */}
      <main className="relative min-h-[384px] border border-line bg-card mt-6">
        {viewMode === 'grid' ? (
          <PressGrid />
        ) : (
          <div className="flex items-center justify-center h-[384px] text-mute">
            리스트 뷰 컴포넌트가 들어갈 자리
          </div>
        )}
      </main>
    </div>
  );
}
