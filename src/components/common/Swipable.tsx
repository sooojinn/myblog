import { ReactNode, useRef } from "react";

export default function Swipable({
  children,
  onSwipeLeft,
  onSwipeRight,
}: {
  children: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}) {
  const touchStartX = useRef<number | null>(null);
  const touchMoveX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      touchMoveX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchMoveX.current !== null) {
      const distance = touchMoveX.current - touchStartX.current;
      if (distance < -50 && onSwipeLeft) {
        onSwipeLeft(); // 왼쪽 스와이프 후 동작
      }
      if (distance > 50 && onSwipeRight) {
        onSwipeRight(); // 오른쪽 스와이프 후 동작
      }
    }
    // 터치 값 초기화
    touchStartX.current = null;
    touchMoveX.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="absolute inset-0"
    >
      {children}
    </div>
  );
}
