// アロー関数を使用して、コンソールに出力したいのですが、うまくいきません。
// ご教授いただけるとありがたいです。よろしくお願いいたします。

const today = () => {

  console.log((today.getMonth() + 1) + "月");
  console.log(today.getDate() + "日");
  console.log(today.getFullYear() + "年");
};


today();