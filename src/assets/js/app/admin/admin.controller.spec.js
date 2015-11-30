/* jshint -W117, -W030 */
describe('AdminController', function() {
    var controller, $controller;

    beforeEach(module('app.admin'));

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        controller = $controller('AdminController');
        //$rootScope.$apply();
    }));

    //TODO why verification failed ?
    //bard.verifyNoOutstandingHttpRequests();

    describe('Admin controller', function() {
        it('should be created successfully', function () {
            expect(controller).toBeDefined();
        });

        describe('after activate', function() {
            it('should have title of Admin', function() {
                expect(controller.title).toBe('Admin');
            });

            it('should have logged "Activated"', function() {
                //todo: how to inject $log ?
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});
