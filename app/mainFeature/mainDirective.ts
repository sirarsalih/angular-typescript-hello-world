module MainFeature {
    export class MainDirective {
        constructor() {
            return MainFeature.MainDirective.CreateDirective();
        }

        private static CreateDirective() : any {
            return {
                restrict: 'E',
                template: '<div>Hello world from directive!</div>'
            };
        }
    }
}