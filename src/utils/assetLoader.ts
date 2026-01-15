const withTimeout = <T>(promise: Promise<T>, ms: number, src: string): Promise<T> => {
    return new Promise((resolve) => {
        const timer = setTimeout(() => {
            console.warn(`⚠️ TIMEOUT: Datei hat zu lange gebraucht, wird übersprungen: ${src}`);
            resolve(src as unknown as T); 
        }, ms);

        promise.then((res) => {
            clearTimeout(timer);
            resolve(res);
        });
    });
};

export const preloadImage = (src: string): Promise<string> => {
    const loadTask = new Promise<string>((resolve) => {
        console.log(`Starte Laden: ${src}`); // LOG: Start

        const img = new Image();
        img.src = src;

        img.onload = () => {
            console.log(`Bild fertig: ${src}`); // LOG: Success
            resolve(src);
        };

        img.onerror = (err) => {
            console.error(`Fehler bei Bild: ${src}`, err); // LOG: error
            resolve(src); 
        };
    });

    return withTimeout(loadTask, 5000, src);
};

export const preloadVideo = (src: string): Promise<string> => {
    const loadTask = new Promise<string>((resolve) => {
        console.log(`Starte Laden Video: ${src}`); // LOG: Start

        const video = document.createElement("video");
        video.src = src;
        video.preload = "auto";
        video.muted = true;
        video.playsInline = true;

        const onLoaded = () => {
            console.log(`Video bereit: ${src}`); // LOG: Success
            cleanup();
            resolve(src);
        };

        const onError = (err: any) => {
            console.error(`Fehler bei Video: ${src}`, err); // LOG: error
            cleanup();
            resolve(src); 
        };

        const cleanup = () => {
            video.removeEventListener("loadeddata", onLoaded);
            video.removeEventListener("error", onError);
        };

        video.addEventListener("loadeddata", onLoaded);
        video.addEventListener("error", onError);

        video.load();
    });

    return withTimeout(loadTask, 7000, src);
};