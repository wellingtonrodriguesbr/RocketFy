import styled from "styled-components";

export const Container = styled.div`
  padding: 0 30px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${(props) => (props.done ? 0.4 : 1)};

  & + div {
    border-left: 1px solid rgba(400, 400, 400, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      border: none;
      background: #52b788;
      color: #fff;
      font-size: 0px;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
