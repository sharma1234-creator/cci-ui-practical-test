import React from "react";

const Model = () => {
  return (
    <>
      <div className="modal" id="edit_user_modal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Edit User</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <form>
                <div className="form-group row">
                  <label for="firstName" className="col-sm-3 col-form-label">
                    First name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="lastName" className="col-sm-3 col-form-label">
                    Last name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="userEmail" className="col-sm-3 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      id="userEmail"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="userMobile" className="col-sm-3 col-form-label">
                    Mobile
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="userMobile"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="userCity" className="col-sm-3 col-form-label">
                    City
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="userCity"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="userIsActive" className="col-sm-3 col-form-label">
                    IsActive
                  </label>
                  <div className="col-sm-1">
                    <input
                      type="checkbox"
                      className="form-control"
                      id="userIsActive"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <button type="submit" className="btn btn-primary">
                      Edit User
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
