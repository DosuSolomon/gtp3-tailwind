import React from 'react'

const Feature = ({title, content}) => {
  const styles = {
    gardientBar: `gradient-bar h-[3px] w-[38px]`,
  };
  return (
    <div className="flex flex-row gap-[130px]">
      <div className="flex flex-col gap-3">
        <div className={styles.gardientBar}></div>
        <h3 className="w-full min-w-[150px]">
          {title}
        </h3>
      </div>
      <p>
        {content}
      </p>
    </div>
  );
};

export default Feature;
