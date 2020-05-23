Page({
  print(event) {
    my.alert({
      content: 'level2_1',
      buttonText: '我知道了',
      success: () => {
        my.alert({
          title: '用户点击了「我知道了」',
        });
      },
    });
  }
});
