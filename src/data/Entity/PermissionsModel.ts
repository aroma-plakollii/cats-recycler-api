import { Sitemap } from "./Sitemap";
import { UserTypeXREFSitemap } from "./UserTypeXREFSitemap";

export class PermissionModel {
    idUserTypeXREFSitemap?: UserTypeXREFSitemap[];

    constructor(idUserTypeXREFSitemap?: UserTypeXREFSitemap[]) {        
        this.idUserTypeXREFSitemap = idUserTypeXREFSitemap;
    }
}