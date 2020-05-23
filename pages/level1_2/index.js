Page({
  print(event) {
    my.alert({
      content: 'level1_2',
      buttonText: '我知道了',
      success: () => {
        my.alert({
          title: '用户点击了「我知道了」',
        });
      },
    });
  }
});
