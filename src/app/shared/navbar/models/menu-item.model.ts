export interface MenuItem {
    path: string;
    displayName: string;
    class: string;
    idDropDownList?: boolean;
    subMenues?: MenuItem[];
}
