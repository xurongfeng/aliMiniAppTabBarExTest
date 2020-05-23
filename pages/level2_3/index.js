Page({
  print(event) {
    my.alert({
      content: 'level2_3',
      buttonText: '我知道了',
      success: () => {
        my.alert({
          title: '用户点击了「我知道了」',
        });
      },
    });
  }
});
