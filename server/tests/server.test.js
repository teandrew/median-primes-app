const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);

describe("Server", () => {
  describe("/Get median ", function() {
    it("should get median primes", done => {
      chai
        .request(server)
        .get("/median-prime/10")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body).to.be.eql([3, 5]);

          done();
        });
    });

    it("should give limit must be a number error", done => {
      chai
        .request(server)
        .get("/median-prime/abcd")
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.equal("Limit must be a number");
          done();
        });
    });

    it("should give limit too high error", done => {
      chai
        .request(server)
        .get("/median-prime/10000000000")
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.equal("Limit too high");
          done();
        });
    });
  });
});
