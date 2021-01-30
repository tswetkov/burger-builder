import styled from 'astroturf';

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

type Props = {
  onClick: () => void;
};

export const Backdrop = ({ onClick }: Props) => (
  <StyledBackdrop onClick={onClick} />
);
