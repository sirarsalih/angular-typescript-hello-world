///<reference path="../bootstrapper/bootstrapper.ts"/>

module MainFeature {
    export class MainCtrl{
        private scope: any;
        private mainSvc: MainFeature.IMainSvc;
        private message: string;

        constructor($scope: ng.IScope, mainSvc: MainFeature.IMainSvc){
            this.scope = $scope;
            this.mainSvc = mainSvc;
            this.SetMessage();
        }
        public SetMessage():void{
            this.message = this.mainSvc.GetMessage();
        }
    }
}