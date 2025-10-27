// store/baseState.ts

export interface BaseState<T> {
  byId: Record<number, T>;
  allIds: number[];
  loading: boolean;
  error: string | null;
}

export const initialBaseState = <T>(): BaseState<T> => ({
  byId: {},
  allIds: [],
  loading: false,
  error: null,
});
