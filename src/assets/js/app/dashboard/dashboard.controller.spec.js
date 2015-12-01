/* jshint -W117, -W030 */
describe('DashboardController', function() {
    var controller;
    var people = mockData.getMockPeople();

    beforeEach(function() {
        bard.appModule('app.dashboard');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getPeople').returns($q.when(people));
        controller = $controller('DashboardController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Dashboard controller', function() {
        it('should be created successfully', function () {
            expect(controller).toBeDefined();
        });

        describe('after activate', function() {
            it('should have title of Dashboard', function () {
                expect(controller.title).toEqual('Dashboard');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).toMatch(/Activated/);
            });

            it('should have news', function () {
                expect(controller.news.title).toBe('hottowelRatpack');
            });

            it('should have at least 1 person', function () {
                expect(controller.people.length).toBeGreaterThan(0);
            });

            it('should have people count of 5', function () {
                expect(controller.people.length).toBe(7);
            });
        });
    });
});
