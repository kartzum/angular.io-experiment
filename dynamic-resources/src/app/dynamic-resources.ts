import {ViewMetadata, ComponentMetadata, reflector} from "angular2/core";

declare var System:any;

export function loadComponent(url:string, templateUrl:string):any {
    return System.import(url).then(function (m) {
        return _transform(m.default, templateUrl);
    });
}

export function applyTemplateUrl(type:any, templateUrl:string):any {
    return _transform(type, templateUrl);
}

function _transform(component:any, templateUrl:string):any {
    var compMeta:ComponentMetadata;
    var viewMeta:ViewMetadata;

    reflector.annotations(component).forEach(m => {
        if (m instanceof ViewMetadata) {
            viewMeta = m;
        }
        if (m instanceof ComponentMetadata) {
            compMeta = m;
        }
    });

    if (compMeta != null) {
        compMeta.templateUrl = templateUrl;
    } else if (viewMeta != null) {
        viewMeta.templateUrl = templateUrl;
    }

    return component;
}