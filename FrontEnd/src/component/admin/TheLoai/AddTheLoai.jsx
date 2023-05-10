import React from "react";

export default function AddTheLoai() {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput" className="lable-admin">Nhập tên thể loại mới</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Nhập tên thể loại"
          />
        </div>
        <button type="button" className="btn btn-success">Xác nhận</button>
      </form>
    </>
  );
}
