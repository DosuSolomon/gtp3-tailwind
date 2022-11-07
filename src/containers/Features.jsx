import React from 'react'

const Features = () => {
  const styles = {
    gardientBar: `gradient-bar h-[3px] w-[38px]`,
  };
  return (
    <div className="w-full flex flex-row px-[80px]">
      <div className="flex flex-col flex-1 gap-[34px]">
        <h1 className="w-[426px] gradient-text text-[34px] font-[800] leading-[45px]">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <h6 className="text-[#FF8A71]">Request Early Access to Get Started</h6>
      </div>
      <div className="w-full flex flex-col flex-1 gap-[30px]">
        <div className="flex flex-row gap-[130px]">
          <div className="flex flex-col gap-3">
            <div className={styles.gardientBar}></div>
            <h3 className="w-full min-w-[150px]">
              Improving end distrusts instantly
            </h3>
          </div>
          <p>
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded.
          </p>
        </div>
        <div className="flex flex-row gap-[130px]">
          <div className="flex flex-col gap-3">
            <div className={styles.gardientBar}></div>
            <h3 className="w-full min-w-[150px]">Become the tended active</h3>
          </div>
          <p>
            Considered sympathize ten uncommonly occasional assistance
            sufficient not. Letter of on become he tended active enable to.
          </p>
        </div>
        <div className="flex flex-row gap-[130px]">
          <div className="flex flex-col gap-3">
            <div className={styles.gardientBar}></div>
            <h3 className="w-full min-w-[150px]">Message or am nothing</h3>
          </div>
          <p>
            Led ask possible mistress relation elegance eat likewise debating.
            By message or am nothing amongst chiefly address.
          </p>
        </div>
        <div className="flex flex-row gap-[130px]">
          <div className="flex flex-col gap-3">
            <div className={styles.gardientBar}></div>
            <h3 className="w-full min-w-[150px]">Really boy law county</h3>
          </div>
          <p>
            Really boy law county she unable her sister. Feet you off its like
            like six. Among sex are leave law built now. In built table in an
            rapid blush.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features
