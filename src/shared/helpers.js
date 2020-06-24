
export function setPageTitle(title) {
    document.title = title;
}

export function setMeta(metaName, contentMeta) {
    document.querySelector('meta[name="'+ metaName +'"]').content = contentMeta
}

export function setFavicon(path) {
    document.querySelector('link[rel="icon"]').href = path;
}

export function mapObject(object, callback) {
    Object.keys.map(key => {
        callback(key, object[key]);
    });
}