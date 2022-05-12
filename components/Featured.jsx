import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  //Состояние слайдера. Какая картинка будет показываться в данный момент.
  const [index, setIndex] = useState(0);

  const images = [
    "/img/featured1.png",
    "/img/featured2.png",
    "/img/featured3.png"
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      //Если показывает не первую картинку, то листаем на одну в лево. Если показывает первую, то листаем сразу на последнюю.
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      //Аналогично для кнопки вправо. С последней перепрыгиваем сразу на первую.
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          alt="arrowL"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        //Первый слайд расположен на 0vw все остальные в право в сумме 300vw.
        //Соответственно второй слайд -100vw и третий -200vw.
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            {/* Лайоут филл -  полностью заполняет контейнер пропорционально */}
            <Image src={img} alt="f1" layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          alt="arrowR"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
