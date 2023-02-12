import { action, map } from "nanostores";

export const counter = map({
  attempt: 0,
  locked: false,
});

export const setAttempt = action(counter, "setAttempt", (store) => {
  const { attempt, locked } = store.get();

  console.log(attempt);

  store.setKey("attempt", attempt + 1);

  if (attempt > 3) {
    setBlocked();
    alert("Vous avez épuisé vos tentatives");
  }
});

export const setBlocked = action(counter, "setBlocked", (store) => {
  const { locked } = store.get();

  store.setKey("locked", true);
});
