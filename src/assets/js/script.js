console.log("script connected successful");

const text = {
  ru: {
    advantage_1: {
      title: "Комплекс услуг",
      description:
        "Комплексный пакет услуг преследует подход “Заказал и пользуйся”. Наиболее удобен и быстр, требует минимального внимания со стороны заказчика. Включает все работы необходимые для начала эксплуатации автономной канализации, включая подготовительные.",
    },
    advantage_2: {
      title: "Готовые решения",
      description:
        "Больше 10 лет успешного изготовления, введения в эксплуатацию и сервисного обслуживания, выработали больше 10 вариантов готовых наборов оборудования для решения большинства типовых задач. Готовое решение упрощает процесс комплектации, экономят средства и время, увеличивая ресурс службы узлов, улучшая качество конечного продукта.",
    },
    advantage_3: {
      title: "Автоматизация и автономность",
      description:
        "Автоматический процесс очистки без труда справится с любым объемом стоков, не зависит от внешних условий и не нуждается в привлечении службы ассенизаторов (откачки). Оснащение системой аварийного режима работы, исключает остановку, загрязнение окружающей среды и позволяет продолжать использование станции до устранения неисправностей. Не нуждается в пополнении бактериями, имеет систему самоочистки.",
    },
    advantage_4: {
      title: "Компактность",
      description:
        "Позволяет получить безупречный результат очистки во время всего периода эксплуатации автономной канализации при этом сохраняя наиболее компактные размеры среди очистных систем представленных на рынке.",
    },
    advantage_5: {
      title: "Гарантия 50 лет",
      description:
        "Собственное производство, более 16 лет опыта в направлении очистных сооружений, изготовление по запатентованной технологии с использованием проверенного европейского оборудования.",
    },
    advantage_6: {
      title: "Производительность",
      description:
        "Технология SBR позволяет быстро перерабативать большие обемы стоков без гниения и запахов. Производительность сохраняется на протяжении всего периода эксплуатации очистных систем.",
    },
    advantage_7: {
      title: "Установка независимо от местности и условий",
      description:
        "Особенностью нашей станции является возможность размещения как классическим способом “В ГРУНТ”, так и “НА ПОВЕРХНОСТИ” как отдельно стоящее или как часть технического строения. Толщина пластика и особенности конструкции придают стойкости к различным деформациям, позволяет сократить расходы на дополнительное обустройство мест размещения.",
    },
    advantage_8: {
      title: "Собственная сервисная служба",
      description:
        "Установка, переоборудование и обслуживание не только наших станций. Использование проверенного европейского оборудования, грамотный, опытный персонал.",
    },
  },
  // uk: {
  //   advantage_1: {
  //     title: "Trst",
  //     description: "Test",
  //   },
  // },
};

const title = document.querySelector(".info__title");
const description = document.querySelector(".info__description");
const advantageList = document.querySelectorAll(".advantage");
const info = document.querySelector(".info");

advantageList.forEach((advantage) =>
  advantage.addEventListener("mouseover", currentAdvantage)
);

// on mouseover
// --- visibility: visable;
// --- add content

advantageList.forEach((advantage) =>
  advantage.addEventListener("mouseout", isHidden)
);

// on mouseout
// --- visibility: hidden;

function currentAdvantage(event) {
  for (const languageTitle in text) {
    let currentLanguageAdvantageList = text[languageTitle];

    for (const advantageTitle in currentLanguageAdvantageList) {
      let advantage = currentLanguageAdvantageList[advantageTitle];

      if (advantageTitle === event.target.id) {
        console.log(advantage.title, advantage.description);
        title.textContent = advantage.title;
        description.textContent = advantage.description;
      }
    }
  }

  isVisable();
}

function isVisable() {
  info.classList.remove("is-hidden");
}

function isHidden() {
  info.classList.add("is-hidden");
}
