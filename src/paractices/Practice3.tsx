export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    let total: number = num * 1.1;
    console.log(total);
    return total;
  };
  const onClickPractice = () => getTotalFee(1000);
  return (
    <div>
      <p>変数の型指定</p>
      <button onClick={onClickPractice}>実行(2)</button>
    </div>
  );
};
