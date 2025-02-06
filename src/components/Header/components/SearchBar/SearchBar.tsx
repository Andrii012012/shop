import style from "./style.module.scss";
import { useEffect, useRef, useState } from "react";

// IMPORT ICONS
import SearchIcon from "/src/assets/images/header/searchIcon.svg?react";

function SearchBar() {
  const [isShopSearchBar, setIsShopSearchBar] = useState<boolean>(false);
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLDivElement | null>(null);

  function handleChangeSearchInput() {
    setIsShopSearchBar(true);
  }

  function handleCloseSearchBar(e: MouseEvent) {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(e.target as Node) &&
      searchInputRef.current &&
      !searchInputRef.current.contains(e.target as Node)
    ) {
      setIsShopSearchBar(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseSearchBar);

    return () => {
      document.removeEventListener("mousedown", () =>
        setIsShopSearchBar(false)
      );
    };
  }, []);

  return (
    <>
      <div className={style.headerActionSearchBar} ref={searchInputRef}>
        <input
          type="text"
          className={style.headerSearchInput}
          placeholder="Поиск по названию, производителю, действующему веществу или симптому"
          onChange={handleChangeSearchInput}
        />
        <SearchIcon />
      </div>
      {isShopSearchBar ? (
        <div className={style.searchPopup} ref={searchBarRef}>
          <ul className={style.searchPopupList}>
            {[...Array(3)].map((_, index) => {
              return (
                <li key={index} className={style.searchPopupListItem}>
                  <a href="#" className={style.searchPopupListLink}>
                    <img
                      src="src/assets/images/header/productIcon.png"
                      alt="Product Icon"
                      className={style.searchPopupListLinkImg}
                    />
                    <span className={style.searchPopupListLinkTitle}>
                      Астрафарм антигельминтный препарат
                    </span>
                    <span className={style.searchPopupListLinkPrice}>
                      371 ₽
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <a href="#" className={style.searchPageLink}>
            Перейти на страницу поиска
          </a>
        </div>
      ) : null}
    </>
  );
}

export default SearchBar;
