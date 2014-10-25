describe('mainCtrl unit tests.', function(){
    var rootScopeFake, mainSvcFake;
    var mainCtrl;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(angular.mock.inject(function($rootScope, MainSvc){
        rootScopeFake = $rootScope.$new();
        mainSvcFake = MainSvc;
    }));

    it('Should call MainSvc.GetMessage() when MainCtrl is loaded.', function(){
        spyOn(mainSvcFake, 'GetMessage');
        mainCtrl = new MainFeature.MainCtrl(rootScopeFake, mainSvcFake);
        expect(mainSvcFake.GetMessage).toHaveBeenCalled();
    });

    it('Should set message to "Hello world!" when MainCtrl is loaded', function(){
        mainCtrl = new MainFeature.MainCtrl(rootScopeFake, mainSvcFake);
        expect(mainCtrl.message).toEqual("Hello world!");
    })
});