import React, { useEffect, useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { useAppDispatch } from "@/app/redux-store/hook";
import { getCategory, updateCategory } from "@/app/redux-store/category/slice";
import QuillEditor from "./QuillEditor";

interface LooseObject {
  [key: string]: any;
}

const FormWFA = ({
  open,
  closeForm,
  news,
}: {
  open: boolean;
  closeForm: any;
  news: any;
}) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<LooseObject>({
    TenDanhMuc: "",
    ID: 0,
    TieuDeChinh: "",
    TieuDePhu: "",
    NoiDung: "",
    createDate: "",
    createBy: "",
    LuotXem: 0,
  });
  useEffect(() => {
    if (news) {
      setData({
        TenDanhMuc: news.TenDanhMuc || "",
        ID: news.ID || 0,
        TieuDeChinh: news.TieuDeChinh || "",
        TieuDePhu: news.TieuDePhu || "",
        NoiDung: news.NoiDung || "",
        createDate: news.createDate || "",
        createBy: news.createBy || "",
        LuotXem: news.LuotXem || 0,
      });
    }
  }, [news]);

  console.log(news, "news");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    await dispatch(updateCategory(data));
    await dispatch(getCategory());
    closeForm();
  };

  const handleContentChange = (content: string) => {
    setData({
      ...data,
      NoiDung: content,
    });
  };

  return (
    <Modal open={open} onClose={closeForm}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "55%",
          transform: "translate(-50%, -50%)",
          width: "55%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 5,
          overflowY: "auto",
          maxHeight: "80vh",
        }}
      >
        <Typography textAlign={"center"} fontSize={20} fontWeight={500}>
          Bản tin
        </Typography>
        <Box></Box>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            borderBottom: "2px solid #d9d9d9",
            marginBottom: 1,
            marginLeft: 0.2,
            fontFamily: "Times New Roman, sans-serif",
          }}
        >
          {data.TenDanhMuc}
        </Typography>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#010457",
            fontFamily: "Times New Roman, sans-serif",
          }}
        >
          {data.TieuDeChinh}
        </Typography>
        <Box display={"flex"} padding={1}>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: "400",
              color: "grey",
              display: "flex",
              alignItems: "center",
              fontFamily: "Times New Roman, sans-serif",
            }}
          >
            {data.createDate} | {data.createBy}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: 16,
            fontWeight: "600",
            fontStyle: "italic",
            fontFamily: "Times New Roman, sans-serif",
          }}
        >
          {data.TieuDePhu}
        </Typography>
        <Typography
          className="ql-align-center"
          sx={{ fontFamily: "Times New Roman, sans-serif" }}
          dangerouslySetInnerHTML={{ __html: data.NoiDung }}
        />
        <Typography
          sx={{
            fontSize: 16,
            textAlign: "right",
            fontFamily: "Times New Roman, sans-serif",
          }}
        >
          {data.createBy}
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            textAlign: "left",
            fontFamily: "Times New Roman, sans-serif",
          }}
        >
          Lượt người xem: {data.LuotXem}
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>
          <Button variant="contained" color="success" onClick={handleSave}>
            Phê duyệt
          </Button>
          <Button variant="contained" color="success" onClick={closeForm}>
            Từ chối
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FormWFA;
