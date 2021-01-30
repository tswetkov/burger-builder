import styled from 'astroturf';

import { Burger } from 'src/components/Burger';
import { Button } from 'src/components/UI';
import { Ingredient } from 'src/components/Burger/BurgerIngredient';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CheckoutSummaryWrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
`;

type Props = {
  checkoutCancel: () => void;
  checkoutContinued: () => void;
};

export const CheckoutSummary = ({
  checkoutCancel,
  checkoutContinued,
}: Props) => {
  const history = useHistory();
  const { t } = useTranslation();
  const [, ingredientsData] = history.location.hash.split('#');
  const ingredients: Ingredient[] = JSON.parse(atob(ingredientsData));

  return (
    <CheckoutSummaryWrapper>
      <h1>{t('checkoutSummary.title')}</h1>
      <Burger ingredients={ingredients} />
      <Button onClick={checkoutCancel} btnType="danger">
        {t('checkoutSummary.close')}
      </Button>
      <Button onClick={checkoutContinued} btnType="success">
        {t('checkoutSummary.next')}
      </Button>
    </CheckoutSummaryWrapper>
  );
};
