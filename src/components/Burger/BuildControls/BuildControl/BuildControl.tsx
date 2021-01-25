import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const BuildControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const BuildControlButton = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;

  &:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }

  &:hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

const Less = styled(BuildControlButton)`
  background-color: #d39952;
  color: white;

  &:hover,
  &:active {
    background-color: #daa972;
    color: white;
  }
`;

const More = styled(BuildControlButton)`
  background-color: #8f5e1e;
  color: white;

  &:hover,
  &:active {
    background-color: #99703f;
    color: white;
  }
`;

type Props = {
  label: string;
  added: () => void;
  removed: () => void;
  disabled: boolean;
};

export const BuildControl = ({ label, added, removed, disabled }: Props) => {
  const { t } = useTranslation();

  return (
    <BuildControlWrapper>
      <Label>{label}</Label>
      <Less onClick={removed} disabled={disabled}>
        {t('less')}
      </Less>
      <More onClick={added}>{t('more')}</More>
    </BuildControlWrapper>
  );
};
