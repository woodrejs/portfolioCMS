import Scrollbar from "smooth-scrollbar";

export const scrollTrack = (scroll, isMobile, scrollRef) => {
  const scrollBar = Scrollbar.init(scrollRef.current, {
    damping: isMobile ? 0.12 : 0.07,
  });
  scrollBar.track.xAxis.element.remove();
  scrollBar.addListener((status) => {
    scrollBar.setPosition(0, status.offset.y);
    scroll && scroll.set(status.offset.y);
  });
};
