let assert = chai.assert;
describe('Pretraga', function() {
    describe('pretragaGodina()', function() {
        it('Pretaga da li su sakriveni svi predmeti koji nisu na drugoj godini kada se pozove pretragaGodina(2)', function() {
            Pretraga.pretragaGodina(2);
            let tabele = document.getElementsByClassName("second-year");
            assert.equal(tabele.length, 12, "Treba biti prikazana druga godina");
        });
        it('Pretaga da li su sakriveni svi predmeti koji nisu na prvoj godini kada se pozove pretragaGodina(1)', function() {
            Pretraga.pretragaGodina(1);
            let tabele = document.getElementsByClassName("first-year");
            assert.equal(tabele.length, 12, "Treba biti prikazana prva godina");
        });
        it('Pretaga da li su prikazani svi predmeti  kada se pozove pretragaGodina(3)', function() {
            Pretraga.pretragaGodina(3);
            let tabele = document.getElementsByClassName("second-year first-year");
            assert.equal(tabele.length, 0, "Trebaju biti prikazane obje godine");
        });

    });




});