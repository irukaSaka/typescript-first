export const Practice4 = () => {
  const calcTotalFee = (num: number): void => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>設定ファイル</p>
      <button onClick={onClickPractice}>実行(1)</button>
    </div>
  );
};
