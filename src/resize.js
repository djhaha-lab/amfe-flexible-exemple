import { ref } from "vue";
// * 指向最外层容器
export const screenRef = ref();

export default function windowResize() {
  // * 定时函数
  const timer = ref(0);
  // * 默认缩放值
  const scale = {
    width: "1",
    height: "1",
  }; // * 设计稿尺寸（px）
  const baseWidth = 1920;
  const baseHeight = 1080; // * 需保持的比例（默认1.77778）
  const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5));
  const calcRate = () => {
    // 当前宽高比
    const currentRate = parseFloat(
      (window.innerWidth / window.innerHeight).toFixed(5)
    );
    if (screenRef.value) {
      if (currentRate > baseProportion) {
        // 表示更宽
        //让高度按变化的比例调整，宽度按原来的比例调制
        scale.width = (
          (window.innerHeight * baseProportion) /
          baseWidth
        ).toFixed(5);
        scale.height = (window.innerHeight / baseHeight).toFixed(5);

        screenRef.value.setAttribute(
          "style",
          `transform: scale(${scale.width},${scale.height})`
        );
        console.log(screenRef.value.style.transform ?? "none");
      } else {
        // 表示更高
        // 让宽度按变化的比例调整，高度按原来的比例调制

        scale.height = (
          window.innerWidth /
          baseProportion /
          baseHeight
        ).toFixed(5);

        console.log("devicePixelRatio", window.devicePixelRatio);
        scale.width =
          (Number((window.innerWidth / baseWidth).toFixed(5)) +
            window.devicePixelRatio) /
          (window.devicePixelRatio + 1);

        screenRef.value.setAttribute(
          "style",
          `transform: scale(${scale.width},${scale.height})`
        );
      }
    }
  };
  const resize = () => {
    clearTimeout(timer.value);
    timer.value = window.setTimeout(() => {
      calcRate();
    }, 200);
  }; // 改变窗口大小重新绘制
  const windowDraw = () => {
    window.addEventListener("resize", resize);
  }; // 改变窗口大小重新绘制
  const unWindowDraw = () => {
    window.removeEventListener("resize", resize);
  };
  return { calcRate, windowDraw, unWindowDraw };
}
