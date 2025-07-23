type PlanName = 'starter' | 'professional' | 'enterprise';
type PlanObject = {
  month: number;
  year: number;
};

type PriceObject = Record<PlanName, PlanObject>;

const price: PriceObject = {
  starter: {
    month: 980,
    year: 9400,
  },
  professional: {
    month: 1980,
    year: 19000,
  },
  enterprise: {
    month: 3980,
    year: 38200,
  },
};

const priceBox = document.querySelectorAll<HTMLParagraphElement>('.plan__item-price-num');
const toggleBtns = document.querySelectorAll<HTMLInputElement>('[data-toggle="plan"]');

const toggleAct = () => {
  if (priceBox && toggleBtns) {
    const checkConfirm = (): boolean[] => Array.from(toggleBtns).map((btn) => btn.checked);

    const applyToggle = (time: 'month' | 'year') => {
      let index = 0;
      for (const p in price) {
        const key = p as keyof typeof price;
        priceBox[index].textContent = price[key][time].toLocaleString();
        index++;
      }
    };

    const toggleFunc = () => {
      let currentPlan = checkConfirm();
      currentPlan[0] ? applyToggle('month') : applyToggle('year');
    };

    toggleBtns.forEach((btn) => {
      btn.addEventListener('change', () => {
        toggleFunc();
      });
    });

    toggleFunc();
  }
};

export default toggleAct;
