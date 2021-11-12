import { IIntegrationV1Testdata } from "src/app/services/test-data.model";

export const IntegrationV1Data: { [key: string]: IIntegrationV1Testdata } = {
    catalog: {
        legacyUrlPath: 'search.php?tb=hilti&searchitem=beton&searchopt=0&ade=0&viewMode=0'
    },
    catalogItem: {
        legacyUrlPath: 'online/usr/show.php?tb=imi&ids=10,27&key=id&fmt=html'
    },
    exportDialog: {
        legacyUrlPath: 'online/usr/export.php?tblst=gessler,LH1E&key=anr&fmt=pdf&target=email'
    },
    export: {
        legacyUrlPath: 'online/usr/export.php?tblst=bruns_obst,1154,686&key=id&mode=silent&target=file&fmt=pdf'
    },
}
