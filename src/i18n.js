import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      addIngredients: 'Add ingredients',
      constructor: 'Constructor',
      login: 'Login',
      logout: 'Logout',
      orders: 'Orders',
      currentPrice: 'Current price',
      salad: 'Salad',
      bacon: 'Bacon',
      cheese: 'Cheese',
      meat: 'Meat',
      noAuthMainButton: 'Login to purchase',
      authMainButton: 'Purchase',
      less: 'Less',
      more: 'More',
    },
  },
  ru: {
    translation: {
      addIngredients: 'Добавьте ингредиенты',
      constructor: 'Конструктор',
      login: 'Войти',
      logout: 'Выйти',
      orders: 'Заказы',
      currentPrice: 'Текущая цена',
      salad: 'Салат',
      bacon: 'Бекон',
      cheese: 'Сыр',
      meat: 'Мясо',
      noAuthMainButton: 'Войти для заказа',
      authMainButton: 'Заказать',
      less: 'Больше',
      more: 'Меньше',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
