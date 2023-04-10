export default function AddPost() {

  
  return (
    <form className="form-baiviet">
      <h2>Bài viết</h2>
      <div className="form-group">
        <label htmlFor="tenbaiviet">Nhập tên bài viết</label>
        <input
          type="text"
          className="form-control"
          id="tenbaiviet"
          placeholder="Tên bài viết ..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">
          Chọn ảnh đại diện cho bài viết
        </label>
        <input
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="tenbaiviet">Nhập trích dẫn bài viết</label>
        <input
          type="text"
          className="form-control"
          id="tenbaiviet"
          placeholder="Trích dẫn ..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Lựa chọn thể loại</label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>Tin mới</option>
          <option>PC/Console</option>
          <option>Mobile</option>
          <option>Cosplay</option>
          <option>Độc lạ Teyvat</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">Lựa chọn thể loại con</label>
        <select
          multiple=""
          className="form-control"
          id="exampleFormControlSelect2"
        >
          <option>Tin mới</option>
          <option>PC/Console</option>
          <option>Mobile</option>
          <option>Cosplay</option>
          <option>Độc lạ Teyvat</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">
          Lựa chọn phân loại tin
        </label>
        <select
          multiple=""
          className="form-control"
          id="exampleFormControlSelect2"
        >
          <option>Tin mới</option>
          <option>PC/Console</option>
          <option>Mobile</option>
          <option>Cosplay</option>
          <option>Độc lạ Teyvat</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">Tên của bạn</label>
        <select
          multiple=""
          className="form-control"
          id="exampleFormControlSelect2"
        >
          <option>Hiếu</option>
          <option>Hiếu</option>
          <option>Hiếu</option>
          <option>Hiếu</option>
          <option>Hiếu</option>
          <option>Hiếu</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="tenbaiviet">Ngày cập nhật</label>
        <input
          type="datetime-local"
          className="form-control"
          id="tenbaiviet"
          placeholder="Trích dẫn ..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Nhập nội dung đoạn 1</label>
        <textarea
          placeholder="Nội dung đoạn 1..."
          rows={4}
          className="form-control-file"
          id="exampleFormControlFile1"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Chọn ảnh số 1</label>
        <input
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Nhập nội dung đoạn 2</label>
        <textarea
          placeholder="Nội dung đoạn 2..."
          rows={4}
          className="form-control-file"
          id="exampleFormControlFile1"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Chọn ảnh số 2</label>
        <input
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Nhập nội dung đoạn 3</label>
        <textarea
          placeholder="Nội dung đoạn 3..."
          rows={4}
          className="form-control-file"
          id="exampleFormControlFile1"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Chọn ảnh số 3</label>
        <input
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Nhập nội dung đoạn 4</label>
        <textarea
          placeholder="Nội dung đoạn 4..."
          rows={4}
          className="form-control-file"
          id="exampleFormControlFile1"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">
        Đăng bài
      </button>
    </form>
  );
}
