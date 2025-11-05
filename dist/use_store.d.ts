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
};
