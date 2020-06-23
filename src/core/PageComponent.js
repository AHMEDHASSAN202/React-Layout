import { ReactorComponent } from './ReactorComponent';

export class PageComponent extends ReactorComponent {


    setPageTitle(title) {
        document.title = title;
    }

    setMeta(metaName, contentMeta) {
        document.querySelector('meta[name="'+ metaName +'"]').content = contentMeta
    }

    setFavicon(path) {
        document.querySelector('link[rel="icon"]').href = path;
    }
}