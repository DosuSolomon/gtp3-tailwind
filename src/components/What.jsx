


const What = ({title, content}) => {
  const styles = {
    gardientBar: `gradient-bar h-[3px] w-[38px]`,
  };
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex flex-col gap-3">
        <div className={styles.gardientBar}></div>
        <h3 className="w-full min-w-[150px]">{title}</h3>
      </div>
      <p className="w-full flex">
        {content}
      </p>
    </div>
  );
};
export default What
// We so opinion friends me message as delight. Whole front do of plate
        // heard oh ought.
//ChatBot