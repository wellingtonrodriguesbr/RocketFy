import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #2b2b2b;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-top: 20px solid rgba(0, 0, 0, 0.3);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(400, 400, 400, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;
export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${(props) => props.color};
`;
