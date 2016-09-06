var options = {
  type: "basic",
  title: "kurt cobain",
  message: "出社ボタンは押したかい？",
  contextMessage: "Cybouz Notify",
  iconUrl: "kurt.jpg",
  requireInteraction: true,
  isClickable: true
};

chrome.notifications.create('id1', options, callback);

function callback() {
  chrome.notifications.onClicked.addListener(function() {
    window.open('https://cb.colon.ne.jp/cbag/ag.cgi');
    chrome.notifications.clear('id1', function() {});
  });
}
