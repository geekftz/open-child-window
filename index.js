function openChildWindow(url, name, options, callbacks) {
  //网页名称，可为空;
  name = name || "新页面";
  // //弹出窗口的宽度;
  const width = 500;
  const innerWidth = width;
  //弹出窗口的高度;
  const height = 500;
  const innerHeight = height;
  // 垂直容器边距
  const verticalPadding = 30;
  // 水平容器边距
  const horizontalPadding = 10;

  // 相对于整个显示器屏幕
  // window.screen.height获得屏幕的高
  // window.screen.width获得屏幕的宽
  //获得窗口的垂直位置;
  const top = (window.screen.height - verticalPadding - height) / 2;
  //获得窗口的水平位置;
  const left = (window.screen.width - horizontalPadding - width) / 2;

  // other options
  const toolbar = "no";
  const menubar = "no";
  const scrollbars = "no";
  const resizable = "no";
  const location = "no";
  const status = "no";

  const windowFeaturesOptions = {
    width,
    innerWidth,
    height,
    innerHeight,
    top,
    left,
    toolbar,
    menubar,
    scrollbars,
    resizable,
    location,
    status,
    ...options,
  };

  const generateWindowFeatures = (options) => {
    return Object.keys(options).reduce((acc, cur, curIndex) => {
      const keyValueStr = cur + "=" + options[cur];

      if (curIndex === 0) {
        return keyValueStr;
      }

      return acc + `,${keyValueStr}`;
    });
  };

  const windowFeatures = generateWindowFeatures(windowFeaturesOptions);

  const newWindow = window.open(url, name, windowFeatures);

  if (callbacks !== undefined && callbacks.onunload !== undefined) {
    const loop = setInterval(function () {
      if (newWindow && newWindow.closed) {
        callbacks.onunload();
        clearInterval(loop);
      }
    }, 500);
  }

  return newWindow;
}

$(function () {
  $(".shangqiao").click(function () {
    const childWindow = openChildWindow(
      "http://www.baidu.com",
      "child window",
      {},
      {
        onunload: () => {
          alert("监听用户关闭子窗口");
        },
      }
    );
  });
});
