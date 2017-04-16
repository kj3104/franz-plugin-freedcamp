module.exports = (Franz, options) => {

  function getMessages() {
    const notifCount = parseInt($('#unread_items_cnt').text(), 10);
    Franz.setBadge(notifCount);
  }

  Franz.loop(getMessages);
};
