"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = useStore;
exports.useServerSyncedStore = useServerSyncedStore;
exports.useServerSyncedStore2 = useServerSyncedStore2;
const react_1 = require("react");
function useStore(store) {
    return (0, react_1.useSyncExternalStore)((cb) => store.subscribe(cb), () => store.snapshot, () => store.snapshot);
}
function useServerSyncedStore(store) {
    const state = useStore(store);
    (0, react_1.useEffect)(() => {
        if (store.status === "idle") {
            store.fetch();
        }
    }, [store]);
    return state;
}
function useServerSyncedStore2(store) {
    const state = useStore(store);
    (0, react_1.useEffect)(() => {
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
//# sourceMappingURL=use_store.js.map