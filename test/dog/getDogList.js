const expect = require('chai').expect;
const getDogList = require('/middleware/trainer/getTrainerListMW');

describe('getDogList middleware ', function () {

    it('should return trainers', function (done) {
        const req = {};
        const res = {};
        const fakeDogModel = {
            find: function (some, cb) {
                cb(undefined, ['dog1', 'dog2'])
            }
        };

        getDogList({
            dogModel: fakeDogModel
        })(req, res, function (err) {
            expect(res.locals.trainers).to.eql(['dog1', 'dog2']);
            expect(err).to.locals(undefined);
            done();
        });
    });

    it('should return error when db returns error', function (done) {
        const fakeDogModel = {
            find: function (some, cb) {
                cb('dog', undefined)
            }
        };

        getDogList({
            trainerModel: fakeDogModel
        })({}, {}, function (err) {
            expect(err).to.eql('dog');
            done();
        });
    });
}