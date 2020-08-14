export interface MenuItem {
    path: string;
    displayName: string;
    subMenues?: MenuItem[];
    hasDivider?: boolean;
    breadCrumPath: string;
}
