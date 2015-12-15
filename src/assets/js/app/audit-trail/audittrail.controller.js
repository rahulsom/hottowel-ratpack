(function () {
    'use strict';

    angular
        .module('app.audittrail')
        .controller('AuditTrailController', AuditTrailController);

    AuditTrailController.$inject = ['logger'];
    /* @ngInject */
    function AuditTrailController(logger) {
        var vm = this;
        vm.title = 'Audit Trail';
        // Keep the accordion open by default
        vm.searchOpen = true;
        activate();

        function activate() {
            logger.info('Activated Audit trail View');
        }
    }
})();