export default function Register() {
  return (
    <>
      <section className="gradient-custom w-100">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: 15 }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className=" pb-2 pb-md-0 mb-md-5">Đăng ký</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 ">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="firstName">
                            Tên tài khoản
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="lastName">
                            Tên người dùng
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6  d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <label htmlFor="birthdayDate" className="form-label">
                            Ngày sinh
                          </label>
                          <input
                            type="datetime"
                            className="form-control form-control-lg"
                            id="birthdayDate"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <label className="form-label" htmlFor="phoneNumber">
                          Giới tính
                        </label>
                        <select className="select form-control-lg">
                          <option value={1} disabled="">
                            Chọn Giới tính
                          </option>
                          <option value={2}>Nam</option>
                          <option value={3}>Nữ</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6  pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="emailAddress">
                            Email
                          </label>
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-md-6  pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <select className="select form-control-lg">
                          <option value={1} disabled="">
                            Tỉnh
                          </option>
                          <option value={2}>Hải Dương</option>
                          <option value={3}>Hà Nội</option>
                          <option value={4}>Hà Nam</option>
                        </select>
                        <label className="form-label select-label">
                          Chọn tỉnh
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <select className="select form-control-lg">
                          <option value={1} disabled="">
                            Choose option
                          </option>
                          <option value={2}>Subject 1</option>
                          <option value={3}>Subject 2</option>
                          <option value={4}>Subject 3</option>
                        </select>
                        <label className="form-label select-label">
                          Choose option
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <select className="select form-control-lg">
                          <option value={1} disabled="">
                            Choose option
                          </option>
                          <option value={2}>Subject 1</option>
                          <option value={3}>Subject 2</option>
                          <option value={4}>Subject 3</option>
                        </select>
                        <label className="form-label select-label">
                          Choose option
                        </label>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        defaultValue="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
