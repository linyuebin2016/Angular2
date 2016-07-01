"use strict";
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, routeParams) {
        this.heroService = heroService;
        this.routeParams = routeParams;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(function (hero) { return _this.hero = hero; });
    };
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
var id = +this.routeParams.get('id');
//# sourceMappingURL=HeroDetailComponent .js.map