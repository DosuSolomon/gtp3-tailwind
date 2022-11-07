import React from "react";
import Feature from "./../components/feature";

const wgpt3Data = [
  {
    id: 1,
    title: "title 1",
    text: "text1",
  },
  {
    id: 2,
    title: "title 2",
    text: "text2",
  },
  {
    id: 3,
    title: "title 3",
    text: "text3",
  },
];

const Wgpt3 = () => {
  const styles = {
    gardientBar: `gradient-bar h-[3px] w-[38px]`,
  };
  return (
    <div className="w-full px-[80px] py-[74px]">
      <div className="flex flex-col py-[50px] px-[50px] what-gradient-bg gap-[80px]">
        <div className="flex flex-row gap-[140px]">
          <div className="flex flex-col gap-3">
            <div className={styles.gardientBar}></div>
            <h3 className="w-full min-w-[150px]">What is GPT-3</h3>
          </div>
          <p className="leading-[30px]">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-[34px] font-[800] max-w-[470px] gradient-text">
            The possibilities are beyond your imagination
          </h2>
          <p className="gradient-text">Explore the library</p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row justify-start items-start gap-10">
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-col gap-3">
                <div className={styles.gardientBar}></div>
                <h3 className="w-full min-w-[150px]">Chatbots</h3>
              </div>
              <p className="w-full flex">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought.
              </p>
            </div>
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-col gap-3">
                <div className={styles.gardientBar}></div>
                <h3 className="w-full min-w-[150px]">Knowledgebase</h3>
              </div>
              <p className="w-full flex">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b
              </p>
            </div>
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-col gap-3">
                <div className={styles.gardientBar}></div>
                <h3 className="w-full min-w-[150px]">Education</h3>
              </div>
              <p className="w-full flex">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wgpt3;
