export default function Post(){
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
            Chọn ảnh đại diện cho web
          </label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Example select</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">
            Example multiple select
          </label>
          <select
            multiple=""
            className="form-control"
            id="exampleFormControlSelect2"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
          />
        </div>
      </form>
    )
}