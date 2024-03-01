import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Select,
  FormLabel,
} from "@mui/material";
import { getCookie } from "cookies-next";
import { useAppDispatch } from "@/app/redux-store/hook";
import QuillEditor from "./QuillEditor";
import { createNews } from "@/app/redux-store/news/slice";

interface LooseObject {
  [key: string]: any;
}

const CreateNews = ({ open, closeForm }: { open: boolean; closeForm: any }) => {
  const dispatch = useAppDispatch();

  const [ss, setSS] = useState("");
  const username = getCookie("username");
  const [data, setData] = useState<LooseObject>({
    TenDanhMuc: "",
    CreateBy: username,
    TacGia: "",
    TieuDeChinh: "",
    TieuDePhu: "",
    NoiDung: "",
    HinhAnh: "",
  });
  const handleSave = async () => {
    alert("Thêm thành công!");
    console.log("data", data);
    console.log("sssss", ss);

    await dispatch(createNews({ data }));
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
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 5,
          overflowY: "auto",
          maxHeight: 700,
        }}
      >
        <Typography textAlign={"center"} fontSize={20} fontWeight={500}>
          Thêm Mới Bản Tin
        </Typography>
        <FormLabel>
          Tiêu đề chính
          <TextField
            fullWidth
            name="TieuDeChinh"
            value={data.TieuDeChinh}
            onChange={(e) =>
              setData({
                ...data,
                TieuDeChinh: e.target.value,
              })
            }
            sx={{ marginBottom: 2 }}
            size="small"
          />
        </FormLabel>
        <FormLabel>
          Tiêu đề phụ
          <TextField
            sx={{ marginBottom: 2 }}
            fullWidth
            name="TieuDePhu"
            value={data.TieuDePhu}
            onChange={(e) =>
              setData({
                ...data,
                TieuDePhu: e.target.value,
              })
            }
            size="small"
          />
        </FormLabel>
        <FormLabel>
          Danh mục
          <Select
            fullWidth
            name="TenDanhMuc"
            size="small"
            type={"file"}
            sx={{ marginBottom: 2 }}
          />
        </FormLabel>
        <FormLabel>
          Hình ảnh
          <TextField
            fullWidth
            name="TenDanhMuc"
            size="small"
            type={"file"}
            sx={{ marginBottom: 2 }}
          />
        </FormLabel>
        <FormLabel>
          Nội dung
          <QuillEditor onContentChange={handleContentChange} />
        </FormLabel>
        <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>
          <Button variant="contained" color="success" onClick={handleSave}>
            Thêm mới
          </Button>
          <Button variant="contained" color="success" onClick={closeForm}>
            Đóng
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateNews;
