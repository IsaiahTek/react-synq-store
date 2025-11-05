import { Store, SynqStore } from "synq-store/dist/types";
export declare function useStore<T>(store: Store<T>): T;
export declare function useServerSyncedStore<T extends {
    id: string;
}>(store: SynqStore<T>): T[];
export declare function useServerSyncedStore2<T extends {
    id: string;
}>(store: SynqStore<T>): {
    data: T[];
    fetch: () => Promise<void>;
    add: (item: Partial<T>) => Promise<void>;
    update: (item: T) => Promise<void>;
    remove: (id: string) => Promise<void>;
    addMany: (items: T[]) => Promise<void>;
    dispose: () => void;
    subscribe: (listener: import("synq-store/dist/types").Listener<T[]>) => () => void;
    setState: (next: T[]) => void;
};
