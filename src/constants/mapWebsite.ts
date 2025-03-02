import { IMapWebsite } from "../interface/interface";
import { PATH_HOME } from "../routes/routes";

export const MAP_WEBSITE: IMapWebsite[] = [
  {
    sectionMain: "Главная страница",
    children: [
      {
        sectionMain: "Интернет-магазин",
        children: [
          {
            section: "Лекарственные препараты",
            children: [
              {
                section: "Антибиотики",
                children: null,
              },
              {
                section: "Антисептики",
                children: null,
              },
              {
                section: "Противогрибковые препораты",
                children: null,
              },
              {
                section: "Противомикробные препораты",
                children: null,
              },
              {
                section: "ГРИПП, ОРВ, простуда",
                children: null,
              },
              {
                section: "Насморк, кашель, боль в горле",
                children: null,
              },
              {
                section: "Заболевание глаз, ушей",
                children: [
                  {
                    section: "Противовоспалительные препараты для глаз",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Противовоспалительные препараты для ушей",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Капли от сухости глаз",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты при глаукоме",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты при катаракте",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Иммунитет",
                children: [
                  {
                    section: "Иммуноглобулины",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Иммуностимуляторы",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Иммунодепрессанты",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Иммуномодуляторы",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Дермотологические препораты",
                children: [
                  {
                    section: "Препараты при дерматите",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты при псориазе",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты при герпесе",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты от бородавок, кандилом",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты от угрей и акне",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты от выпадения волос",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Болезни опорно двигательного- аппарата",
                children: [
                  {
                    section: "Хондропротекторы",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Заместители синовиальной жидкости ",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Система кроветворения",
                children: [
                  {
                    section: "Кровоостанавливающие препараты",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Плазмозаменяющие растворы",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты для парентерального питания",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Стимуляторы кроветворения",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Мочеполовая система",
                children: [
                  {
                    section: "Мочегонные препараты",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section:
                      "Препараты при заболевании почек и мочевыводящих путей",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты при заболевании предстательной железы",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты при эректильной дисфункции",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты при недержании мочи",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Нервная система",
                children: [
                  {
                    section: "Анальгетики",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Спазмолитики",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Миорелаксанты",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Антидепрессанты",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Нейролептики",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Ноотропы",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты от укачивания",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Седативные препараты",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Транквилизаторы",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "При алкоголизме и табакокурении ",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Головная боль, мигрень",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Заболевания нервной системы",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Нарушение обмена веществ",
                children: [
                  {
                    section: "Препараты для коррекции веса",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты для коррекции веса",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты для улучшения обмена веществ",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Онкология",
                children: [],
              },
              {
                section: "Пищеварительная система",
                children: [
                  {
                    section: "Препараты для улучшения микрофлоры",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "При заболевании желудка и кишечника",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "При заболеваниях печени",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Желчегонные препараты",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Слабительные препараты",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Противодиарейные препараты",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты при отравлениях",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Сердечно-сосудистая система",
                children: [
                  {
                    section: "Препараты при аритмии",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Препараты при болезнях вен",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Ишемическая болезнь сердца",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Профилактика сердечно-сосудистых заболеваний",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Профилактика образования тромбов",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для снижения артериального давления",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для снижения холестерина",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для улучшения микроциркуляции",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "При геморрое",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Сосудорасширяющие препараты",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Эндокринная система",
                children: [
                  {
                    section: "Гормональные препараты",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Лечение Диабета",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для щитовидной железы",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Витамины и БАДы",
                children: [
                  {
                    section: "Моновитамины",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Поливитамины (Мультивитамины)",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Микроэлементы",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для работоспособности",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для беременных",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для детей",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для мужчин",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для женщин",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для больных диабетом",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для зрения",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Для волос",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Красота и уход",
                children: [
                  {
                    section: "Средства женской гигиены",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Средства для ванной и душа",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Дезодоранты",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Гигиенические расходные материалы",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Уход за зубами, полостью рта",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Уход за  руками, ногами, ногтями",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Маникюрные принадлежности",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Уход за волосами",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Уход за лицом",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Уход за телом",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Бритье и депиляция",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Средства для загара",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Планирование семьи",
                children: [
                  {
                    section: "Презервативы и смазки",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Тесты на беременность",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Тесты на овуляцию",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Тесты на овуляцию",
                    children: null,
                    to: PATH_HOME,
                  },
                  {
                    section: "Контрацепция для женщин",
                    children: null,
                    to: PATH_HOME,
                  },
                ],
              },
              {
                section: "Мама и малышь",
                children: [
                  {
                    section: "Товары для беременных",
                    children: [
                      {
                        section: "Товары для кормящих мам",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Косметика для мам",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Белье для беременных",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Питание для мам",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                  {
                    section: "Товары для кормления",
                    children: [
                      {
                        section: "Бутылочки для кормления",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Бутылочки для кормления",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Соски",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Столовые приборы",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Посуда",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                  {
                    section: "Тесты на овуляцию",
                    children: [
                      {
                        section: "Бутылочки для кормления",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Бутылочки для кормления",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Соски",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Столовые приборы",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Посуда",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Средства для мытья детской посуды",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Стерилизаторы",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Подогреватели",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                  {
                    section: "Игрушки для малышей",
                    children: [
                      {
                        section: "Подогреватели",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Прорезыватели",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Игрушки для купания",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Игрушки развивающие",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                  {
                    section: "Подгузники и пеленки",
                    children: [
                      {
                        section: "Подгузники",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Трусики",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Пеленки",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                  {
                    section: "Товары для безопасности мам и малышей",
                    children: [
                      {
                        section:
                          "«Радионяня», заглушки, замки на дверцы, светоотражающие аксессуары и т.п.”",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                ],
              },
              {
                section: "Медицинские изделия",
                children: [
                  {
                    section: "Аптечки, контейнеры для лекарств, таблетницы",
                    children: [],
                  },
                  {
                    section: "Бахилы",
                    children: [],
                  },
                  {
                    section: "Беруши",
                    children: [],
                  },
                  {
                    section: "Инъекционные расходные материалы",
                    children: [
                      {
                        section: "Шприцы",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Иглы",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Катетеры внутривенные",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Системы для переливания",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                  {
                    section: "Медицинский трикотаж",
                    children: [
                      {
                        section: "Гольфы компрессионные",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Колготки компрессионные",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Чулки компрессионные",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Одежда, белье",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                  {
                    section: "Медицинские инструменты",
                    children: [
                      {
                        section: "Банки медицинские",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Колготки компрессионные",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Катетеры урологические",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Гинекологические наборы",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Зонды",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Спринцовки",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Грелки, компрессы",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                  {
                    section: "Медицинские инструменты",
                    children: [],
                  },
                  {
                    section: "Одежда",
                    children: [],
                  },
                  {
                    section: "Перчатки медицинские",
                    children: [],
                  },
                  {
                    section: "Перевязочные материалы",
                    children: [],
                  },
                  {
                    section: "Средства по уходу за больными",
                    children: [
                      {
                        section: "Матрасы противопролежневые",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Мочеприемники",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Калоприемники",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Подгузники для взрослых",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Урологические прокладки",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Судно подкладное",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Простыни, пеленки",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Посуда",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Лечебное питание",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Средства для ухода за кожей",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Пояса послеоперационные",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Обработка помещений",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                  {
                    section: "Контейнеры для биопроб",
                    children: [],
                  },
                ],
              },
              {
                section: "Ортопедические изделия",
                children: [
                  {
                    section: "Бинты эластичные",
                    children: [],
                  },
                  {
                    section: "Воротники, шины, подушки",
                    children: [],
                  },
                  {
                    section: "Корсеты для осанки",
                    children: [],
                  },
                  {
                    section: "Трости и костыли",
                    children: [],
                  },
                  {
                    section: "Ходунки, роллаторы, опоры",
                    children: [],
                  },
                  {
                    section: "Кресло-коляски",
                    children: [],
                  },
                  {
                    section: "Бандажи",
                    children: [],
                  },
                  {
                    section: "Пояса",
                    children: [],
                  },
                  {
                    section: "Стельки ортопедические",
                    children: [],
                  },
                  {
                    section: "Обувь для больных диабетом",
                    children: [],
                  },
                  {
                    section: "Адаптивная обувь",
                    children: [],
                  },
                  {
                    section: "Фиксаторы суставов, ортезы",
                    children: [],
                  },
                ],
              },
              {
                section: "Медицинская техника",
                children: [
                  {
                    section: "Весы",
                    children: [],
                  },
                  {
                    section: "Глюкометры, ланцеты, тест-полоски",
                    children: [
                      {
                        section: "Глюкометры",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Ланцеты, ручки для прокалывания",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Тест-полоски для глюкометра",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                  {
                    section: "Ингаляторы",
                    children: [],
                  },
                  {
                    section: "Массажеры",
                    children: [],
                  },
                  {
                    section: "Миостимуляторы",
                    children: [],
                  },
                  {
                    section: "Физиотерапия",
                    children: [],
                  },
                  {
                    section: "Тонометры",
                    children: [],
                  },
                  {
                    section: "Стетоскопы, фонендоскопы",
                    children: [],
                  },
                  {
                    section: "Экспресс-тесты",
                    children: [
                      {
                        section: "Тест на алкоголь",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Тест на наркотики",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Диагностика состава крови",
                        children: null,
                        to: PATH_HOME,
                      },
                      {
                        section: "Диагностика состава мочи",
                        children: null,
                        to: PATH_HOME,
                      },
                    ],
                  },
                  {
                    section: "Ветеринарная аптека",
                    children: [
                      {
                        section: "Лекарства",
                        children: [
                          {
                            section: "Препараты для собак",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Препараты для кошек",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Препараты для грызунов",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Препараты для птиц",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Препараты для лошадей",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Препараты для рептилий",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Препараты для рыб",
                            children: null,
                            to: PATH_HOME,
                          },
                        ],
                      },
                      {
                        section: "Лечебные корма и лакомства",
                        children: [
                          {
                            section: "Корма для собак",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Корма для кошек",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Корма для грызунов",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Корма для птиц",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Корма для лошадей",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Корма для рептилий",
                            children: null,
                            to: PATH_HOME,
                          },
                          {
                            section: "Корма для рыб",
                            children: null,
                            to: PATH_HOME,
                          },
                        ],
                      },
                      {
                        section: "Аксессуары",
                        children: [],
                      },
                      {
                        section: "Игрушки",
                        children: [],
                      },
                      {
                        section: "Гигиена",
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    sectionMain: "О компании",
    children: null,
  },
  {
    sectionMain: "Помощь",
    children: null,
  },
  {
    sectionMain: "Акции",
    children: null,
  },
  {
    sectionMain: "Новости",
    children: null,
  },
  {
    sectionMain: "Юр. информация",
    children: null,
  },
  {
    sectionMain: "Лицензии и реквизиты",
    children: null,
  },
];
