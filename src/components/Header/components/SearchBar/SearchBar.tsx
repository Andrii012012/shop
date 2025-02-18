import style from "./style.module.scss";
import gStyle from '../../../../styles/styles.module.css';
import { useEffect, useState } from "react";
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

  const [placeholderInput, setPlaceholderInput] = useState<{ text: string[], opacityText: string[], originText: string }>({ opacityText: [], text: [], originText: "" });

  const products: IBaseProduct[] = useAppSelector(searchProductFilter(inputState));

  function handleSetPlaceholder(name: string, value?: string): void {
    setPlaceholderInput((prevState) => {

      const newState = { ...prevState };

      newState.originText = name;

      const valueInput = value ? value : inputState;

      if (inputState.length < 1) {
        newState.opacityText = [];
        newState.text = [];
        newState.originText = "";

      } else {
        const opacityArray = [];
        const textArray = [];

        for (let index = 0; index <= name.length; index++) {
          if (valueInput[index] === name[index]) {
            opacityArray.push(name[index]);
          } else {
            if (valueInput[index] && valueInput[index] !== newState.originText[index]) {
              newState.opacityText = [];
              newState.text = [];
              return newState;
            }
            textArray.push(name[index]);
          }
        }

        newState.opacityText = opacityArray;
        newState.text = textArray;

      }

      return newState;

    })
  }

  function handleOnBlur() {
    setTimeout(() => { setInputState(""), setPlaceholderInput({ opacityText: [], text: [], originText: '' }) }, 100)
  }

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputState(event.target.value);
    handleSetPlaceholder(placeholderInput.originText, event.target.value);
  }

  useEffect(() => {
    if (!products.length) {
      setPlaceholderInput({ opacityText: [], text: [], originText: '' })
    }
  }, [products.length]);

  return (
    <div className={`${style.wrapper} ${className}`}>
      <div className={style.headerActionSearchBar}>
        <div className={style.bodyInput}>
          <input
            type="text"
            value={inputState}
            className={style.headerSearchInput}
            placeholder="Поиск по названию, производителю, действующему веществу или симптому"
            onChange={handleChangeInput}
            onBlur={handleOnBlur}
          />
          <p className={`${style.placeholder} ${gStyle.textMedium}`}><span>{placeholderInput.opacityText}</span>{placeholderInput.text}</p>
        </div>
        <SearchIcon />
      </div>
      {products.length ? (
        <div className={style.searchPopup}>
          <ProductLists products={products} handleSetPlaceholder={handleSetPlaceholder} />
          <Link to={PATH_SHOP} className={style.searchPageLink}>
            Перейти на страницу поиска
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
