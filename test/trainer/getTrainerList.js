const expect = require('chai').expect;
const getTrainerListMW = require('/middleware/trainer/getTrainerListMW');

describe('getTrainerList middleware ', function () {

    it('should return trainers', function (done) {
        const req = {};
        const res = {};
        const fakeTrainerModel = {
            find: function (some, cb) {
                cb(undefined, ['trainer1', 'trainer2'])
            }
        };

        getTrainerListMW({
            trainerModel: fakeTrainerModel
        })(req, res, function (err) {
            expect(res.locals.trainers).to.eql(['user1', 'user2']);
            expect(err).to.locals(undefined);
            done();
        });
    });

    it('should return error when db returns error', function (done) {
        const fakeTrainerModel = {
            find: function (some, cb) {
                cb('trainer', undefined)
            }
        };

        getTrainerListMW({
            trainerModel: fakeTrainerModel
        })({}, {}, function (err) {
            expect(err).to.eql('trainer');
            done();
        });
    });
}