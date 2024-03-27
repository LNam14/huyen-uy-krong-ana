import excuteQuery from "@/app/db/db";
import moment from "moment";

export async function POST(req: any) {
  try {
    let body = null;

    const requestBody = await req.json().then((requestBody: any) => {
      body = requestBody;
    });
    if (body) {
      const result: any = await excuteQuery(
        "SELECT * FROM bantin WHERE TenDanhMuc = ? ORDER BY createDate DESC",
        [body["TenDanhMuc"]]
      );

      const formattedResult = result.map((item: any) => ({
        ID: item.ID,
        TenDanhMuc: item.TenDanhMuc,
        createBy: item.createBy,
        TieuDeChinh: item.TieuDeChinh,
        TieuDePhu: item.TieuDePhu,
        NoiDung: item.NoiDung,
        TrangThai: item.TrangThai,
        LuotXem: item.LuotXem,
        TacGia: item.TacGia,
        HinhAnh: item.HinhAnh,
        createDate: moment(item.createDate).format("DD-MM-YYYY"),
      }));

      return new Response(JSON.stringify(formattedResult), { status: 200 });
    } else {
      return new Response("Missing body data", { status: 400 });
    }
  } catch (error) {
    console.log(error);
    return new Response("Error", { status: 500 });
  }
}
