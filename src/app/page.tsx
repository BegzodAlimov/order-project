"use client";
import HorizontalCard from "../components/horizontal_card/horizontalCard";
import Navbar from "../components/navbar/navbar";
import styles from "./page.module.css";
import IMG from "@/public/images/img.png";
import IMG2 from "@/public/images/img (1).png";
import IMG3 from "@/public/images/img (2).png";
import IMG4 from "@/public/images/img (3).png";
import IMG5 from "@/public/images/img (4).png";
import IMG6 from "@/public/images/img (5).png";
import IMG7 from "@/public/images/img (6).png";
import IMG8 from "@/public/images/img (7).png";
import IMG9 from "@/public/images/img (8).png";
import IMG10 from "@/public/images/img (9).png";
import IMG11 from "@/public/images/img (10).png";
import IMG12 from "@/public/images/img (11).png";
import IMG13 from "@/public/images/img (12).png";
import IMG14 from "@/public/images/img (13).png";
import IMG15 from "@/public/images/img (14).png";
import IMG16 from "@/public/images/img (15).png";
import ICON6 from "@/public/icons/MdOutlineFormatListBulleted.svg";
import ICON4 from "@/public/icons/MdOutlineFormatListBulletedWhite.svg";
import ICON1 from "@/public/icons/BiBuildings.svg";
import ICON2 from "@/public/icons/BiMap.svg";
import ICON3 from "@/public/icons/BiGridAlt.svg";
import ICON5 from "@/public/icons/BiGridAltWhite.svg";
import Image from "next/image";
import FilterCard from "../components/filter_card/filterCard";
import VerticalCard from "../components/vertical_card/verticalCard";
import { useState } from "react";

const images1 = [
  IMG, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8
];
const images2 = [
  IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15, IMG16
];

export default function Home() {
  const [selectedType, setSelectedType] = useState<string>("list");
  const [selectedImage, setSelectedImage] = useState<number[]>([]);

  const handleImageClick = (index: number) => {
    if (selectedImage?.includes(index)) {
      setSelectedImage(selectedImage.filter((i) => i !== index));
    } else {
      setSelectedImage([...selectedImage, index]);
    }
  };

  return (
    <div className={styles.page}>
      <Navbar/>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <p className={styles.navigation}>Главная / Каталог Недвижимости</p>
            <h1 className={styles.title}>Недвижимость в Таиланде от собственников </h1>
          </div>
          
          <div className={styles.icon_container}>
            <div className={styles.icon}>
              <Image src={ICON1} alt="icon" priority width={20} height={20} />
            </div>

            <div className={styles.icon}>
              <Image src={ICON2} alt="icon" priority width={20} height={20} />
            </div>
            <div className={`${styles.icon} ${selectedType === "grid" ? styles.active : ""}`}>
              <Image src={selectedType === "grid" ? ICON5 :ICON3} alt="icon" priority width={20} height={20} onClick={() => setSelectedType("grid")} />
            </div>
            <div className={`${styles.icon} ${selectedType === "list" ? styles.active : ""}`}>
              <Image src={selectedType === "list" ? ICON6 : ICON4} alt="icon" priority width={20} height={20} onClick={() => setSelectedType("list")} />
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.left_section}>
          <FilterCard />
          </div>
          <div className={styles.right_section}>
            <div className={styles.right_header}>
              <p>1467 найденных объектов</p>
              <div>
                <span>Сортировать </span>
                <p>
                  Рекомендуемые 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10.862 6.19531L7.99998 9.05731L5.13798 6.19531L4.19531 7.13798L7.99998 10.9426L11.8046 7.13798L10.862 6.19531Z" fill="#2D3748"/>
                  </svg>
                </p>
              </div>
            </div>
            { selectedType === "list" ?             
            <div className={styles.cards}>
              {images1.map((img, index) => (
                <HorizontalCard key={index} imgSrc={img} />
              ))}
            </div>
            :
            <div className={styles.vertical_cards}>
              {images2.map((img, index) => (
                <VerticalCard key={index} selected={selectedImage?.includes(index)} onClick={() => handleImageClick(index)} imgSrc={img} />
              ))}
            </div>
            }
          </div>
        </div>

      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
