import { FileSelectDirective } from './file-select.directive';
import { FileDropDirective } from './file-drop.directive';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [FileSelectDirective, FileDropDirective],
    exports: [FileSelectDirective, FileDropDirective]
})
export class Ng6FileUploadModule {
};
