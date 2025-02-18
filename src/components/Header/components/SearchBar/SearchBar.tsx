import style from "./style.module.scss";
import { useRef, useState } from "react";
import SearchIcon from "/src/assets/images/header/searchIcon.svg?react";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { searchProductFilter } from "../../../../features/products/filters";
import { IBaseProduct } from "../../../../interface/interface";
import { Link } from "react-router-dom";
import { PATH_SHOP } from "../../../../routes/routes";
import ProductLists from "./components/ProductLists/ProductLists";

interface IProps {
  className?: string;
}


function SearchBar(props: IProps): JSX.Element {

  const { className = "" } = props;

  const [inputState, setInputState] = useState<string>('');

  const products: IBaseProduct[] = useAppSelector(searchProductFilter(inputState));

  return (
    <div className={`${style.wrapper} ${className}`}>
      <div className={style.headerActionSearchBar}>
        <input
          type="text"
          value={inputState}
          className={style.headerSearchInput}
          placeholder="Поиск по названию, производителю, действующему веществу или симптому"
          onChange={(event) => setInputState(event.target.value)}
          onBlur={() => setTimeout(() => { setInputState("") }, 100)}
        />
        <SearchIcon />
      </div>
      {products.length ? (
        <div className={style.searchPopup}>
          <ProductLists products={products} />
          <Link to={PATH_SHOP} className={style.searchPageLink}>
            Перейти на страницу поиска
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
