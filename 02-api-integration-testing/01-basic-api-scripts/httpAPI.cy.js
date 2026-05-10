describe('testing httpbin API', () => {
    it('httpbin has status 200', () => {
        cy.request("https://httpbin.org/status/200").then(response => {
            const status = response.status;
            assert.equal(200, status); 
        });
    });
});


describe("httpbin API tests", () => {
    it("GET request", () => {
        cy.request("GET", "https://httpbin.org/get").then(response => {
            const body = response.body;
            expect(body).to.be.an('object');
            expect(body).to.include.keys('url');
        });
    });
});


describe("httpbin API tests", () => {
    it("PUT request", () => {
        cy.request("PUT", "https://httpbin.org/put").then(response => {
            const body = response.body;
            expect(body).to.be.an('object');
            expect(body).to.include.keys('url');
        });
    });
});


describe("httpbin API tests", () => {
    it("DELETE request", () => {
        cy.request("DELETE", "https://httpbin.org/delete").then(response => {
            const body = response.body;
            expect(body).to.be.an('object');
            expect(body).to.include.keys('url');
        });
    });
});


describe("httpbin API tests", () => {
    it("returning cookie data", () => {
        cy.request("GET", "https://httpbin.org/cookies").then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.cookies).to.not.be.empty;
        });
    });
});


describe("httpbin API tests", () => {
    it("header test", () => {
        cy.request("GET", "https://httpbin.org/headers").then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property("headers");
        });
    });
});


describe("httpbin API tests", () => {
    it("returning json data", () => {
        cy.request("GET", "https://httpbin.org/json", response => {
            expect(response.status).to.equal(200);
            expect(response.headers["Content-Type"]).to.contain("application/json");
        })
    });
});


describe("httpbin API tests", () => {
    it("delay response test", () => {
        cy.request({
            method: "PATCH",
            url: "https://httpbin.org/delay/20", 
            timeout: 20000
         }).then(response => {
            expect(response.status).to.equal(200);
        });
    });
});


describe("httpbin API tests", () => {
    it("authorization test as admin", () => {
        cy.request({
            method: "GET",
            url: "https://httpbin.org/basic-auth/admin/admin",
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.authenticated).to.be.true;
            expect(response.body.user).to.equal("admin");
        });
    });
});


describe("httpbin API tests", () => {
    it("redirection attempt to wikipedia.org", () => {
        cy.request("POST", "https://httpbin.org/redirect-to?url=https://www.wikipedia.org").then(response => {
            expect(response.status).to.equal(200);
            const incorrectURL = "https://www.amazon.com/";
            expect(response.redirectedToUrl).to.not.eq(incorrectURL);
        });
    });
});
