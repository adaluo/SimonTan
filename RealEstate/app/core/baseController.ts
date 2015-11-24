/// <reference path="../_all.ts" />

module app {


  
    export class baseController implements IController {
        public promises: any;
        public $scope: any;
        constructor(public core: any, public controllerId: string, public title: string, public callBackFunc: any = null) { //            
            core.$q.all(this.promises).
                then(eventArgs => {
                if (callBackFunc != null) {
                    callBackFunc(eventArgs);
                }
                console.log('Activated ' + title + ' View');

            })
                .catch((error) => {
                console.log('Error in getting data for ' + title + ': ' + error.data.ExceptionMessage);
                toastr.error('Error in getting data for ' + title);
            });
        }

        showEditForm(form, promises) {

            this.core.$q.all(promises).
                then(eventArgs => {
                form.$show();
            })
                .catch((error) => {
                toastr.error('Error in getting data for ' + form + ': ' + error.data.message);

            });

        }


    }

} 