(function() {
    'use strict';

    angular
        .module('app.audittrail')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'audittrail',
                config: {
                    url: '/audittrail',
                    templateUrl: 'app/audit-trail/audittrail.html',
                    controller: 'AuditTrailController',
                    controllerAs: 'vm',
                    title: 'Audit Trail',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Audit Trail'
                    }
                }
            }
        ];
    }
})();