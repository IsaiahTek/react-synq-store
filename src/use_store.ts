import { useEffect, useSyncExternalStore } from "react";
import { Store, SynqStore } from "synq-store";

export function useStore<T>(store: Store<T>): T | T[] | null {
  return useSyncExternalStore(
    (cb) => store.subscribe(cb),
    () => store.snapshot,
    () => store.snapshot
  );
}

export function useServerSyncedStore<T extends { id: string }, B>(store: SynqStore<T, B>) : T[] {
  const state = useStore(store);
  useEffect(() => {
    if (store.status === "idle") {
      store.fetch();
    }
  }, [store]);
  return state as T[];
}

export function useServerSyncedStore2<T extends { id: string }, B>(store: SynqStore<T, B>) {
  const state = useStore(store);
  
  useEffect(() => {
    if (store.status === "idle") {
      store.fetch();
    }
  }, [store]);

  return {  
    data: state as T[],
    fetch: store.fetch,
    add: store.add,
    update: store.update,
    remove: store.remove,
    addMany: store.addMany,
    dispose: store.dispose,
    subscribe: store.subscribe,
    setState: store.setState,
  };
}