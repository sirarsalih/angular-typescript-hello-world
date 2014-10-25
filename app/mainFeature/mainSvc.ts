///<reference path="../bootstrapper/bootstrapper.ts"/>

module MainFeature {
    export interface IMainSvc {
        GetMessage():string;
    }

    export class MainSvc implements IMainSvc {
        constructor() {
        }
        public GetMessage():string{
            return "Hello world!";
        }
    }
}