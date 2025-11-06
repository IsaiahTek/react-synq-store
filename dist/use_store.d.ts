import { Store, SynqStore } from "synq-store";
export declare function useStore<T>(store: Store<T>): T | T[] | null;
export declare function useServerSyncedStore<T extends {
    id: string;
}, B>(store: SynqStore<T, B>): T[];
export declare function useServerSyncedStore2<T extends {
    id: string;
}, B>(store: SynqStore<T, B>): {
    data: T[];
    fetch: () => Promise<void>;
    add: (item: Partial<T>, xId?: B | undefined) => Promise<void>;
    update: (item: T) => Promise<void>;
    remove: (id: string) => Promise<void>;
    addMany: (items: T[]) => Promise<void>;
    dispose: () => void;
    subscribe: (listener: import("synq-store").Listener<T | T[]>) => () => boolean;
    setState: (next: T | T[]) => void;
};
