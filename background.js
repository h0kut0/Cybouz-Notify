function showNotification() {
  var options = {
    type: "basic",
    title: "kurt cobain",
    message: "出社ボタンは押したかい？",
    contextMessage: "Cybouz Notify",
    iconUrl: "kurt.jpg",
    requireInteraction: true
  };

  //notification options set
  chrome.notifications.create(options, callback);
  //notification set
}

function callback() {
  chrome.notifications.onClicked.addListener(function(notificationId) {
    window.open('https://cb.colon.ne.jp/cbag/ag.cgi');
  })
}

showNotification();
