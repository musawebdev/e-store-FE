import React from "react";

const Login = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6 offset-lg-3">
            <div className="p-3 bg-light mb-4">
              <div className="login-header">
                <h3>Create New Account</h3>
              </div>
              <div className="login-form">
                <div className="login-body">
                  <form className="form-wrap" action="#">
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <input
                          className="w-100 py-2 px-2"
                          id="email"
                          name="email"
                          type="email"
                          required=""
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <input
                          className="w-100 py-2 px-2"
                          id="pwd"
                          name="pwd"
                          type="password"
                          required=""
                          placeholder="Password"
                        />
                      </div>

                      <div className="col-sm-12 col-12 mb-20">
                        <div className="checkbox style2">
                          <input type="checkbox" id="test_1" />
                          <label for="test_1">
                            I Agree with the{" "}
                            <a
                              className="link style1"
                              href="terms-of-service.html"
                            >
                              Terms &amp; conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <button className="btn style1">Registre Now</button>
                        </div>
                      </div>
                      <div className="col-md-12 text-center">
                        <p className="mb-0">
                          Have an Account?{" "}
                          <a className="link style1" href="login.html">
                            Sign In
                          </a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
