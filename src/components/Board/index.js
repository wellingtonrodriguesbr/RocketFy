import React, { useState } from "react";
import BoardContext from "./context";
import produce from "immer";

import { List } from "../List";
import { Container } from "./styles";
import { loadLists } from "../../services/api";

const data = loadLists();

export const Board = () => {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from];
        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContext.Provider value={{ move, lists }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} data={list} index={index} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
};
