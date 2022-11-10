setTimeout(() => {
  var newwindow = window.open("http://www.baidu.com", "aaa");
  console.log(
    "🚀 --> file: index2.js --> line 3 --> setTimeout --> newwindow",
    newwindow
  );
  // newwindow.onbeforeunload = function () {
  //   // processing event here
  //   alert("new window closed");
  // };
}, 1000);
