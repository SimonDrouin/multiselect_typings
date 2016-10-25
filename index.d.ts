// Type definitions for Multiselect 0.9.12
// Project: https://github.com/lou/multi-select
// Definitions by: Simon Drouin <https://github.com/SimonDrouin/multiselect_typings/>

interface JQuery {
    multiselect(settings?: multiselect.Settings): JQuery;

}

declare namespace multiselect {
    interface Settings {
        buttonWidth: any
        includeSelectAllOption: any
        selectAllText: any
        allSelectedText: any
        buttonClass: any
        onChange: any
        onSelectAll: any
    }
}

declare module "multiselect" {
    export = multiselect;
}
