export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    console.log(total);
    return total;
  };
  const onClickPractice = () => getTotalFee(1000);
  return (
    <div>
      <p>返却値の型指定</p>
      <button onClick={onClickPractice}>実行(2)</button>
    </div>
  );
};
