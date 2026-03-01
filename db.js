// db.js
const DB_NAME = 'podcast-offline';
const DB_VERSION = 1;
const STORE_NAME = 'episodios';

let dbPromise = null;

function getDB() {
    if (!dbPromise) {
        dbPromise = new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
                    store.createIndex('mediaUrl', 'mediaUrl', { unique: true });
                }
            };
        });
    }
    return dbPromise;
}

async function guardarEpisodio(episodio) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        // Verificar si ya existe por mediaUrl
        const index = store.index('mediaUrl');
        const requestGet = index.get(episodio.mediaUrl);
        requestGet.onsuccess = () => {
            if (requestGet.result) {
                reject(new Error('Episodio ya descargado'));
                return;
            }
            const requestAdd = store.add(episodio);
            requestAdd.onsuccess = () => resolve(requestAdd.result);
            requestAdd.onerror = () => reject(requestAdd.error);
        };
        requestGet.onerror = () => reject(requestGet.error);
    });
}

async function obtenerEpisodios() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function obtenerEpisodioPorUrl(mediaUrl) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const index = store.index('mediaUrl');
        const request = index.get(mediaUrl);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function eliminarEpisodio(id) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const request = store.delete(id);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}
