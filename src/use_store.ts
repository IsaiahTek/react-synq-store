import { useEffect, useSyncExternalStore } from "react";
import { Store, SynqStore } from "synq-store/dist/types";

export function useStore<T>(store: Store<T>): T {
  return useSyncExternalStore(
    (cb) => store.subscribe(cb),
    () => store.snapshot,
    () => store.snapshot
  );
}

export function useServerSyncedStore<T extends { id: string }>(store: SynqStore<T>) {
  const state = useStore(store);
  useEffect(() => {
    if (store.status === "idle") {
      store.fetch();
    }
  }, [store]);
  return state;
}

export function useServerSyncedStore2<T extends { id: string }>(store: SynqStore<T>) {
  const state = useStore(store);
  
  useEffect(() => {
    if (store.status === "idle") {
      store.fetch();
    }
  }, [store]);

  return {  
    data: state,
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